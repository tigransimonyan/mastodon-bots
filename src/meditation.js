const megalodon = require('megalodon');
const generator = megalodon.default;

const BASE_URL = 'https://xn--y9a6bah4ck.xn--y9a3aq';
const ACCESS_TOKEN = process.env.ACCESS_TOKEN;

const client = generator('mastodon', BASE_URL, ACCESS_TOKEN);
const tips = [
  'Հակասութիւնները ամենուր են',
  'Զգացմունքները արժեւորւմ են փորձառութիւնը',
  'Դադարիր ընտրել այն ինչը քեզ չի ընտրում',
  'Միայն քեզ նման լինելով կարող ես գրաւել ճիշտ մարդկանց',
  'Մի նոյնականացիր քեզ սահմանափակող բաների հետ',
  'Ազատուիր կաղապարներից, որոնք այլեւս չեն օգնում քեզ',
  'Դու կարող ես ցանկանալ միայն այն ինչ գիտես',
  'Նկատիր թե ինչն է շեղում քեզ, ընդունիր ու բաց թող',
  'Ընդունիր քեզ',
  'Դու կարող ես ապրել մտքերի մէջ խորասուզուած կամ ապրել ներկայում',
  'Դու չես կարող կառաւարել ծովի ալիքները, բայց կարող ես սահել դրանց վրայով',
  'Հիմա լաւ պահ է ներկայ լինելու։ Հիմա նոյնպէս։ Հիմա էլ։',
  'Օգնութիւն խնդրիր',
  'Այն ինչը չես փոխում ընտրում ես',
  'Երեկոյեան դուրս արի քեզ հետ ընթրելու',
  'Դու ունես նուէրներ որոնք չես օգտագործում',
  'Երբեմն մարդիկ գալիս են ցոյց տալու այն, ինչ չես ուզում',
  'Իրական ընկերները չեն վախենում մարտահրաւէր նետել',
  'Միացրու երգ, որը կը յիշեցնի թե ով ես',
  'Դու չես կոտրուել',
  'Գնիր նոր հագուստ',
  'Դու ամէն մէկի համար չես',
  'Գրիր սիրային պոեմ քեզ նուիրուած',
  'Դադարիր մեղաւոր զգալ քո հանդէպ',
  'Սովորութիւնը տեսանելի է դառնում ընդհատելուց յետոյ',
  'Դու արդէն ունես այն ինչ քեզ պէտք է',
  'Փողը իրական չէ',
  'Մի խաբիր քեզ',
  'Քո սիրտը կրկին ու կրկին կոտրուելու է',
  'Գրիր առաջինը',
  'Աշխատիր այսօր քիչ խօսել',
  'Դու ապրում ես կոտրուած սրտերի կողքին',
  'Ներողութիւն խնդրիր',
  'Կերակրիր դրսի կենդանիներին',
  'Սովորիր նոր ուտեստ պատրաստել'
];

const emojes = [🤖,🧠,👨‍🏭,👣,🦖,🐣,⛹️‍♀️,🐿️,🍤,🍭,🍟,🌰,🦟,✈️,🍡,🐙,🧉,🥨,🥢,🐢,🌽,🎾,🎏,🕰️,🛰️,🍵,🥋,🧅,🎠,🐲,🏇,🦛,🦧,⚓,🌪️,🦙,🤸,⌛,🥁,🎐,🥦,🐮,🏝️,🕺,🎋,🐰,🤿];

const getRandomInt = (max) => Math.floor(Math.random() * max);

function getArrayElementByDayInYear(arr) {
  const currentDate = new Date();
  const startOfYear = new Date(currentDate.getFullYear(), 0, 1); // January 1st of the current year
  const dayInYear = Math.floor((currentDate - startOfYear) / (1000 * 60 * 60 * 24)) + 1;
  let index = dayInYear - 1; // Array indices start from 0, so we subtract 1 from the dayInYear.

  while (index >= arr.length) {
    index = index - arr.length;
  }

  return arr[index];
}


const postThreads = (status) => {
  let a = status.substring(0, 490);
  let b = status.substring(490);

  if (b) {
    a = a + '... ->';
  }

  client
    .postStatus(a)
    .then((response) => {
      if (!b) return response;
      return client.postStatus(b, { in_reply_to_id: response.data.id });
    })
    .then(() => console.log('Done!'))
    .catch((error) => console.log(error));
};

const post = (status) => {
  client
    .postStatus(status)
    .then(() => console.log('Done!'))
    .catch((error) => console.log(error));
};

const datetime = new Date();
const hours = datetime.getHours();

if (hours === 23) {
  post('🙏 ո՞ւմ կուզենայիր շնորհակալութիւն յայտնել');
} else if(hours === 22) {
  post('🌬️ խորը՜ շունչ քաշի');
} else if(hours === 16) {
  post('💦 քանի՞ բաժակ ջուր ես խմել այսօր');
} else if(hours === 18) {
  post('🦋 մի պահ կանգ առ ու վայելի՜ր ներկան');
} else if(hours === 14) {
  post('👵 ' + getArrayElementByDayInYear(tips));
}
