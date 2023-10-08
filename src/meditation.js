const megalodon = require('megalodon');
const generator = megalodon.default;

const BASE_URL = 'https://xn--y9a6bah4ck.xn--y9a3aq';
const ACCESS_TOKEN = process.env.ACCESS_TOKEN;

const client = generator('mastodon', BASE_URL, ACCESS_TOKEN);
const tips = [

  'Stop choosing what isn\'t choosing you',
  'Think of your memories as a lending library with high fines for late returns',
  'Don\'t identify yourself with what limits you',
  'Break patterns that no longer support you',
  'People will love you, people will hate you, none of that will have anyting to do with you. Keep working on your energy and you will attract the right people',
  'You can only desire based on waht you know',
  'Whatever you are not changing you are choosing',
  
  "Start early.\n\nTry to meditate first thing in the morning. That way you can be sure that it actually gets done and not bumped off the to-do list as the day gets more hectic. Plus, morning meditation can be a nice way to start the day — you’re refreshed, awake, and on track for a mindful day.",
  "Same time, same place.\n\nIf you can’t meditate in the morning, try to make a commitment to meditating at the same time and in the same place every day. Making your practice a regular part of your normal daily routine is key to developing a lasting habit.",
  "Get creative about location.\n\nYes, it’s recommended that your regular meditation practice happens in the same place every day for consistency. But sometimes that simply isn’t possible. The great thing about meditation is that it can be practiced anywhere — at home, at work, in a park, even walking in a busy airport. It doesn’t matter where it happens, as long as you can find stillness and not be disturbed.",
  "Don’t sit cross-legged (if you don’t think it’s comfortable).\n\nForget the stereotypical images of people sitting cross-legged to meditate; for most people, that position can be uncomfortable — and distracting. What’s most important is to find the meditation position that’s most comfortable for you (and if that just so happens to be sitting cross-legged, then of course that’s perfectly fine).",
  "Find the best position for you.\n\nThere are four meditation positions that we find work most optimally. You don’t need to force yourself to sit up too straight. If you’re too upright, your mind will be too uptight. The ideal meditating position for most people is somewhere in between: sitting in a chair or on a sofa or couch, arms and legs uncrossed, feet flat on the floor, a cushion or rolled up towel underneath the backside, so that the back is naturally upright.",

  "Breathe naturally.\n\nMeditation does involve focusing on the breath and using it as an anchor for the mind, but try not to think about the breath or alter it in any way. Simply allow things to unfold naturally, noticing the rising and falling sensation it creates in the body.",
  "Get comfortable with discomfort.\n\nPeople who are new to meditation — and even people who have been doing it for years — often experience negative emotions like anxiety, restlessness, and irritation while practicing. Rather than trying to resist these emotions, give them your full attention and allow them to come and go. Over time the mind learns to recognize these emotions but gets used to not getting caught up in negative patterns of thought — a skill that can be enormously beneficial not only during meditation but also in daily life.",
  "Take mindfulness with you.\n\nBefore you finish meditating and go about your day, form a clear idea of what you are going to do next — maybe you’ll shower, or make breakfast, or drive the kids to school. Whatever the activity, try to carry the mindfulness you cultivated during your meditation with you into the next task and throughout the rest of your day.",

  "Take a moment and check in with yourself.\n\nAfter each session, try to take a moment to notice how you feel physically, emotionally, and mentally. Are you more calm than you were when you sat down? Does your mind feel more clear? Are you more focused on the day ahead? The more you’re able to establish a connection between your meditation practice and feeling better, the more invested you’ll be in finding time to sit down each day for practice.",
  "Record any excuses.\n\nIf you decide not to meditate one day, make a note of your reasoning. Seeing the excuse written down can help to minimize it. Tomorrow it won’t have the same power over you, especially when compared to how important the health of your mind really is.",
  "Buddy up.\n\nTry to get a friend to start meditating, too. You don’t have to meditate at the same time, but having someone who’s also looking to meditating regularly can help motivate you toward establishing a consistent practice. With a friend as an accountability partner, you’re less likely to make excuses and more likely to show up day after day.",
  "Don’t judge.\n\nIt may be tempting to judge each meditation practice as “good” or “bad” and, once you’ve been doing it for a while, to wonder if you are “improving.” Try to resist this urge to analyze your progress in terms of whether you experience lightning bolts of insights or dramatic life shifts. Instead, the next time you meditate, take a minute at the end to notice if you feel any different from when you sat down — perhaps you’re a little less tense or a little more aware of how you feel. Mediation isn’t something we ever expect to master or excel at; rather, it’s a life-long skill we are constantly working on day by day.",

  "Brilliant things happen in calm minds. Be calm. You're brilliant.\n\n#mindfulmoments",
  'To know yourself is to be confident. To be confident is to fearlessly express your potential.\n\n#mindfulmoments',
  'A day thinking about what could happen, should happen, or what might have been is a day missed.\n\n#mindfulmoments',
  'Creativity is as boundless, spacious and limitless as the sky. We are born with it. It cannot be lost and it cannot be destroyed. It can only be forgotten.\n\n#mindfulmoments',
  'Distractions are everywhere. Notice what takes your attention, acknowledge it, and then let it go.\n\n#mindfulmoments',
  'Remember the blue sky. It may at times be obscured by clouds, but it is always there.\n\n#mindfulmoments',
  'Look up and smile. But only if you feel like it.\n\n#mindfulmoments',
  'So much time and effort is spent on wanting to change, trying to change, to be somebody different, better, or new. Why not use this time to get comfortable with yourself as you are instead?\n\n#mindfulmoments',
  "To know one's own mind is nothing short of life-changing.\n\n#mindfulmoments",
  'We can’t always change what’s happening around us, but we can change what happens within us.\n\n#mindfulmoments',
  'Meditation nourishes the mind in the same way that food nourishes the body.\n\n#mindfulmoments',
  'In the midst of movement and chaos, keep stillness inside of you.\n\n#mindfulmoments',
  'Life is short. We can live it lost in thought or we can choose to be present as life unfolds around us.\n\n#mindfulmoments',
  'Meditation means letting go of our baggage, letting go of all the pre-rehearsed stories and inner-dialogue that we’ve grown so attached to.\n\n#mindfulmoments',
  'Mindfulness allows us to live life fully. Fully aware, fully awake, fully alive.\n\n#mindfulmoments',
  "We can't control the sea, but we can learn how to surf the waves.\n\n#mindfulmoments",
  'There is no good or bad meditation — there is simply awareness or non-awareness. To begin with, we get distracted a lot. Over time, we get distracted less. Be gentle with your approach, be patient with the mind, and be kind to yourself along the way.\n\n#mindfulmoments',
  'Everyone has a little madness on the inside. The skill is in understanding the madness, and then being at ease with it.\n\n#mindfulmoments',
  'Meditation is not about having yet another new strategy of self-help plan, but rather providing a framework in which to see yourself more clearly.\n\n#mindfulmoments',
  'The quieter you become, the more you can hear.\n\n#mindfulmoments',
  'Clarity dictates our perspective, and our perspective dictates our experience. Get more clarity in your life.\n\n#mindfulmoments',
  'Now is a great time to be present. Now is good, too. And now.\n\n#mindfulmoments',
  'The heart of meditation is taking ourselves a little less seriously.\n\n#mindfulmoments',
  'It is not that thinking is bad, and non-thinking is good. True freedom is when we are equally content, no matter what arises in the mind; free from bias, beyond any idea of thought versus no-thought, or this versus that.\n\n#mindfulmoments',
  'No matter how fast life is moving around us, there is always a place of stillness inside.\n\n#mindfulmoments',
  'There are no mistakes in meditation. There is only the process of learning how to approach the practice, and discovering what habits or actions to let go of. This journey is unique for us all.\n\n#mindfulmoments',
  'There is no room for anger when the mind is calm.\n\n#mindfulmoments',
  'Meditation means letting go of our baggage, letting go of all the pre-rehearsed stories and inner-dialogue that we’ve grown so attached to.\n\n#mindfulmoments',
  'The mind is our most precious resource, through which we experience every single moment of life. Are you looking after yours?\n\n#mindfulmoments',
  'In letting go, we cease trying to make something happen, and then the mind naturally opens. It is like watching a flower grow — free from effort, its petals naturally unfold to reveal its beauty.\n\n#mindfulmoments',
  'Meditation is less about knowing what to do and more about knowing what not to do.\n\n#mindfulmoments',
  'Best advice ever received was from one of my meditation teachers at the monastery: ‘Be present, be patient, be gentle, be kind…everything else will take care of itself.’\n\n#mindfulmoments',
  'Meditation and life are not separate. Meditation simply helps us to see and understand life more clearly.\n\n#mindfulmoments',

  'Հակասութիւնները ամենուր են',
  'Մարդիկ պէտք է ցանկանան փոխուել',
  'Զգացմունքները արժեւորւմ են փորձառութիւնը',
  'Այն ինչը չես փոխում ընտրում ես',
  'Դադարիր ընտրել այն ինչը քեզ չի ընտրում',
  'Քեզ նման լինելով կարող ես գրաւել ճիշտ մարդկանց'
];

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
  post('🦋 խորը՜ շունչ քաշի');
} else if(hours === 16) {
  post('🌵 քանի՞ բաժակ/լիտր ջուր ես խմել այսօր');
} else if(hours === 18) {
  post('✨ մի պահ կանգ առ ու վայելի՜ր ներկան');
} else if(hours === 14) {
  post('📜 ' + getArrayElementByDayInYear(tips));
}
