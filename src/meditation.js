const megalodon = require("megalodon");
const generator = megalodon.default;

const BASE_URL = "https://xn--y9a6bah4ck.xn--y9a3aq";
const ACCESS_TOKEN = process.env.ACCESS_TOKEN;

const client = generator("mastodon", BASE_URL, ACCESS_TOKEN);
const tips = [
  "Start early. \nTry to meditate first thing in the morning. That way you can be sure that it actually gets done and not bumped off the to-do list as the day gets more hectic. Plus, morning meditation can be a nice way to start the day — you’re refreshed, awake, and on track for a mindful day.",
  "Same time, same place. \nIf you can’t meditate in the morning, try to make a commitment to meditating at the same time and in the same place every day. Making your practice a regular part of your normal daily routine is key to developing a lasting habit.",
  "Get creative about location. \nYes, it’s recommended that your regular meditation practice happens in the same place every day for consistency. But sometimes that simply isn’t possible. The great thing about meditation is that it can be practiced anywhere — at home, at work, in a park, even walking in a busy airport. It doesn’t matter where it happens, as long as you can find stillness and not be disturbed.",
  "Don’t sit cross-legged (if you don’t think it’s comfortable). \nForget the stereotypical images of people sitting cross-legged to meditate; for most people, that position can be uncomfortable — and distracting. What’s most important is to find the meditation position that’s most comfortable for you (and if that just so happens to be sitting cross-legged, then of course that’s perfectly fine).",
  "Find the best position for you. \nThere are four meditation positions that we find work most optimally. You don’t need to force yourself to sit up too straight. If you’re too upright, your mind will be too uptight. The ideal meditating position for most people is somewhere in between: sitting in a chair or on a sofa or couch, arms and legs uncrossed, feet flat on the floor, a cushion or rolled up towel underneath the backside, so that the back is naturally upright.",

  "Breathe naturally. \nMeditation does involve focusing on the breath and using it as an anchor for the mind, but try not to think about the breath or alter it in any way. Simply allow things to unfold naturally, noticing the rising and falling sensation it creates in the body.",
  "Get comfortable with discomfort. \nPeople who are new to meditation — and even people who have been doing it for years — often experience negative emotions like anxiety, restlessness, and irritation while practicing. Rather than trying to resist these emotions, give them your full attention and allow them to come and go. Over time the mind learns to recognize these emotions but gets used to not getting caught up in negative patterns of thought — a skill that can be enormously beneficial not only during meditation but also in daily life.",
  "Take mindfulness with you. \nBefore you finish meditating and go about your day, form a clear idea of what you are going to do next — maybe you’ll shower, or make breakfast, or drive the kids to school. Whatever the activity, try to carry the mindfulness you cultivated during your meditation with you into the next task and throughout the rest of your day.",

  "Take a moment and check in with yourself. \nAfter each session, try to take a moment to notice how you feel physically, emotionally, and mentally. Are you more calm than you were when you sat down? Does your mind feel more clear? Are you more focused on the day ahead? The more you’re able to establish a connection between your meditation practice and feeling better, the more invested you’ll be in finding time to sit down each day for practice.",
  "Record any excuses. \nIf you decide not to meditate one day, make a note of your reasoning. Seeing the excuse written down can help to minimize it. Tomorrow it won’t have the same power over you, especially when compared to how important the health of your mind really is.",
  "Buddy up. \nTry to get a friend to start meditating, too. You don’t have to meditate at the same time, but having someone who’s also looking to meditating regularly can help motivate you toward establishing a consistent practice. With a friend as an accountability partner, you’re less likely to make excuses and more likely to show up day after day.",
  "Don’t judge. \nIt may be tempting to judge each meditation practice as “good” or “bad” and, once you’ve been doing it for a while, to wonder if you are “improving.” Try to resist this urge to analyze your progress in terms of whether you experience lightning bolts of insights or dramatic life shifts. Instead, the next time you meditate, take a minute at the end to notice if you feel any different from when you sat down — perhaps you’re a little less tense or a little more aware of how you feel. Mediation isn’t something we ever expect to master or excel at; rather, it’s a life-long skill we are constantly working on day by day.",
];

const getRandomInt = (max) => Math.floor(Math.random() * max);

const post = () => {
  const status = `🧘‍♀️ Մեդիտացիայի ժամ\n\n` + tips[getRandomInt(tips.length - 1)];
  client
    .postStatus(status)
    .then(() => console.log("Done!"))
    .catch((error) => console.log(error));
};

post();
