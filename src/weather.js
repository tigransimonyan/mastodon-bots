const megalodon = require('megalodon');
const generator = megalodon.default;
const axios = require('axios').default;

const BASE_URL = 'https://xn--y9a6bah4ck.xn--y9a3aq';
const ACCESS_TOKEN = process.env.ACCESS_TOKEN;

const client = generator('mastodon', BASE_URL, ACCESS_TOKEN);
const locations = ['Երեւան', 'Լոռի', 'Սեւան', 'Դիլիջան', 'Արցախ'];

const getRandomInt = (max) => Math.floor(Math.random() * max);

const post = (array) => {
  const status = `Եղանակը Հայաստանում\n\n${array.join('\n\n')}`;
  return client.postStatus(status);
};

locations.forEach((location) => {
  const path = `/${location}?lang=hy&format=%c+${location}ում %t է (զգալի՝ %f)։`;
  axios
    .get('https://wttr.in'.concat(encodeURI(path)))
    .then((response) => post(response.data))
    .then(() => console.log('Done!'))
    .catch((error) => {
      console.log(error);
    });
});
