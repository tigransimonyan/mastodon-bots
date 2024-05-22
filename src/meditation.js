const megalodon = require('megalodon');
const lunarphase = require('lunarphase-js');
const generator = megalodon.default;

const BASE_URL = 'https://xn--y9a6bah4ck.xn--y9a3aq';
const ACCESS_TOKEN = process.env.ACCESS_TOKEN;

const client = generator('mastodon', BASE_URL, ACCESS_TOKEN);
const tips = [
  'Մի խոստացիր այն ինչ չես կարող',
  'Զգուշաւոր լինելը ճիշտ որոշում է',
  'Ինչքա՞ն նշան է քեզ պէտք հասկանալու համար',
  'Թոյլ տուր սէրը միացնի քեզ',
  'Քեզ միայն պէտք է մի փոքր յոյս',
  'Դառնութիւնը պէտք չէ կուտակել, վերացրու',
  'Դու անփոխարինելի ես',
  'Թոյլ թող քեզ',
  'Գտիր մարդկանց, որոնց կողքին քեզ ապահով կը զգաս',
  'Ջուրը աւելի խորն է քան թուում է',
  'Դու արդէն ունես այն ինչ քեզ պէտք է',
  'Փողը իրական չէ',
  'Մի խաբիր քեզ',
  'Քո սիրտը կրկին ու կրկին կոտրուելու է',
  'Գրիր առաջինը',
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
  'Այն ինչ կարող է գոյութիւն ունենալ, դեռ պէտք է կառուցել',
  'Իրականութիւնը կարող է աւելի վատը թուալ, երբ դու տխուր կամ միայնակ ես',
  'Ծիծաղը արտադրում է սերոտոնին, լաւացնում ուշադրութիւնը, օբեւկտիւութիւնը եւ ուղեղի աշխատանքը',
  'Ստիպիր քեզ լինել աւելի ինքնավստահ',
  'Դու ստեղծել ես անիրական կապ ինքդ քեզ սիրելու եւ սիրուած լինելու միջեւ',
  'Դու իրօք կարող ես սովորեցնել նոր բան հին շանը',
  'Սէրը այստեղ է որ ազատի քեզ',
  'Դիմադրութիւնը յստակութիւն է տալիս',
  'Դու սովորում ես հետեւել քո սեփական ուղուն',
  'Փորձիր կապ հաստատել աչքերով',
  'Ապրիր համացանցում յօրինուած կեանքով ինչպէս զուգահեռ իրականութիւնում',
  'Հիմա քո հերթն է',
  'Եղիր գործնական',
  'Թող քո ներկայութիւնը զգացուի',
  'Դու պէտք է լինես քո փաստաբանը',
  'Սեփական անձի հանդէպ խստութիւնը ամէն ինչ աւելի է բարդացնում',
  'Դու ձգողական ես',
  'Հպարտացիր քո ստեղծած, քեզ աջակցող մեխանիզմով',
  'Հաճոյք ստացիր ամէն փոքր բանից',
  'Հեռաւորութիւն պահիր քո հանրային եւ անձնական կեանքի միջեւ',
  'Դու փնտրում ես մէկին, ով կը հանի քեզ քո մարմնից',
  'Քո մարմինը տիեզերքի ստեղծագործութիւնն է',
  'Կարելի է լացել նոյնիսկ երբ ամէն ինչ լաւ է',
  'Խորասուզուիր աշխատանքի մէջ',
  'Պատմութիւնը տեղի է ունենում հէնց հիմա',
  'Այնքան ասա մինչեւ սկսես հաւատալ',
  'Դու հաւասարաչափ նպատակասլաց եւ համարձակ ես',
  'Երբեմն մարդիկ գալիս են ցոյց տալու այն, ինչ չես ուզում',
  'Իրական ընկերները չեն վախենում մարտահրաւէր նետել',
  'Գրիր սիրային պոեմ քեզ նուիրուած',
  'Միացրու երգ, որը կը յիշեցնի թե ով ես',
  'Դու չես կոտրուել',
  'Գնիր նոր հագուստ',
  'Դու ամէն մէկի համար չես',
  'Դադարիր մեղաւոր զգալ քո հանդէպ',
  'Սովորութիւնը տեսանելի է դառնում ընդհատելուց յետոյ',
  'Տիեզերքը ոչինչ քեզ պարտք չէ',
  'Դու ձանձրալի չես',
  'Ի՞նչն է քեզ ստիպում մտածել, որ կարող ես կառաւարել մարդկանց',
  'Դու չես կարող վստահել նրան ով քեզ չի վստահում',
  'Մարդաշատ սենեակը գոյութիւն ունի միայն քո գլխում',
  'Թող ուղեղդ մի քիչ հանգստանայ',
  'Նպատակը քեզ նման դառնալն է',
  'Փորձիր հաճոյք ստանալ կարգապահութիւնից',
  'Ստուերը ցոյց է տալիս սահմանը եւ խորութիւնը',
  'Թափ տուր ինքնավստահութիւնդ',
  'Դու հանդիպածդ մարդկանց հաւաքական կերպարն ես',
  'Հաշուիր ծաղիկի թերթիկները՝ սիրում է, չի սիրում',
  'Տես թե ով քայլ կանի երբ հանձնուես',
  'Լռութեան մէջ նստելը միակ բանն է որ կարող ես անել',
  'Եղիր յարգալից քեզ հետ',
  'Բացատրելու կարիք չկայ',
  'Համբերութիւնը պարզութիւն է բերում',
  'Նորը սկսում է խայթել',
  'Ընդունիր քննադատութիւնը որպէս գործընթացի մաս',
  'Դու կարող ես դիպչել առանց դիպչելու',
  'Դա տեղի կունենայ երբ չես սպասի',
  'Երբ լաւ ես զգում աւելի յստակ ես տեսնում միւսներին',
  'Փակիր աչքերդ։ Լսիր բոլոր հեռու եւ մօտ ձայները',
  'Հարցը պայքարի անհրաժեշտութեան մասին չէ, այլ ձեւի',
  'Հպարտացիր քեզնով',
  'Սիրոյ համար չկայ չափման միաւոր',
  'Սկանդալը վերածիր դաւադրութեան',
  'Ուշադրութիւն դարձրու առաջարկուող արքետիպերին։ Փոխիր սցենարը',
  'Ինչո՞ւ ես փորձում դաւաճանել քեզ',
  'Սէրը մրցակցութիւն չէ',
  'Դու ապրում ես կոտրուած սրտերի կողքին',
  'Կերակրիր դրսի կենդանիներին',
  'Սովորիր նոր ուտեստ պատրաստել',
  'Տխրութիւնը սխալ որոշման նշան չէ',
  'Հեռացիր այն տեղից, որտեղ երջանիկ չես',
  'Սէրը ժամանակի մեքենայ է',
  'Աշխատիր այսօր քիչ խօսել',
  'Հագիր քո սիրած շորը',
  'Դու չես կարող պլանաւորել ամէն ինչ',
  'Ամէն օր կորցրու մի բան',
  'Որևէ բան սիրելու միակ ձեւը գիտակցելն է, որ դու չպետք է տիրես դրան',
  'Քո սիրտը գիրք է',
  'Դու լաւ գիտես ինչպէս զուարճանալ',
  'Քիչը շատ է',
  'Քո ընկերները աւելի շատ ունեն քո կարիքը քան քեզ թուում է',
  'Դուրս գալու միակ ձեւը միջով անցնելն է',
  'Փորձիր չմտածել մարդկանց մասին, իբրեւ քո հոգեվիճակի պրոյեկցիա',
  'Ցանկացած գործողութիւն պահանջում է որոշակի ռիսկ',
  'Դու քո մտքերը չես',
  'Կասկածի տակ դիր ենթադրութիւններդ',
  'Գտիր ճանապարհ վիշտդ դուրս հանելու',
  'Դու ես որոշում ինչ կահոյք տեղադրել',
  'Ուշադրութիւնն աղօթք է',
  'Ջուրը փորձելու համար կարիք կը լինի մտնել աւազանը',
  'Քեզ խրախուսել են ձեռք բելեր ամէն տեսակ կախուածութիւն։ Կանգ առ',
  'Դու պարտաւոր չես լինել լաւը',
  'Միակ աշխարհը քո ստեղծած աշխարհն է',
  'Մտածիր «սրիկայ» բառի մասին',
  'Մի մեղադրիր քեզ մտերմութիւն ցանկանալու համար',
  'Ուշադրութիւն դարձրու իւրաքանչիւր բառին',
  'Շարունակիր նոյն ձեւով',
  'Սիրո հասնելու համար դու պէտք է քանդես քո էգոն',
  'Այսօր դու կարող ես դադարել սպասել',
  'Դու պէտք է տեսնես եւ ընդունես քո դերը անառողջ դրամայում',
  'Ճիշտ գնահատիր տեղ հասնելու ժամանակը',
  'Ամէն ինչ չէ, որ պէտք է անել հենց հիմա',
  'Թոյլ տուր քեզ մի փոքր լաց լինել',
  'Սիրահարուիր հազարաւոր տարիներ առաջ ապրած գրողին։ Փորձին հասկանալ նրան',
  'Քո բնազդները լաւն են',
  'Ցանկութիւնը կարող է դուրս գալ քո մարմինց այն բառերի հետ, որոնք միգուցէ դու չէիր ցանկանում ասել',
  'Ինչպէ՞ս ես կայացնում կարեւոր որոշումներ',
  'Քո կարիքները քննարկման ենթակայ չեն',
  'Դուրս տուր',
  'Դու տեսնում ես աշխարհը ամէն օր ուրիշ աչքով',
  'Այսօր քեզ համար սննդարար կերակուր պատրաստիր',
  'Դու չես կարող ամէն անգամ հասկանալ, թե ինչու ես զգում այն ինչ զգում ես',
  'Պարտադիր չէ միանգամից խօսել այդ մասին',
  'Սիրտդ բաց պահիր',
  'Կառուցիր նոր մտածելակերպ',
  'Դու պատրաստ ես վայրի եւ ոտաբոբիկ լինել',
  'Վավերացրու քո բոլոր զգացմունքները',
  'Պատասխանիր՝ «Այո», որքան հնարաւոր է շատ',
  'Սէրը ունի իր կողմնացոյցը',
  'Մի տուր ցուցադրական խոստումներ',
  'Իմացիր որտեղից է գալիս քո խանդը',
  'Իւրաքանչիւր յաջողակ մարդ ինքնավստահ խաբեբայ է',
  'Եղիւ ազնիւ քո սահմանափակումների հետ',
];

function splitTextToLines(text) {
  const words = text.split(' ');
  let lines = [];
  for (let i = 0; i < words.length; i += 3) {
    let line = words.slice(i, i + 3).join(' ');
    lines.push(line);
  }
  return lines;
}

const getRandomInt = (max) => Math.floor(Math.random() * max);

function getArrayElementByDayInYear(arr) {
  const currentDate = new Date();
  const startOfYear = new Date(currentDate.getFullYear(), 0, 1); // January 1st of the current year
  const dayInYear =
    Math.floor((currentDate - startOfYear) / (1000 * 60 * 60 * 24)) + 1;
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

const pronouns = [
  'սիրուններ ջան',
  'համովներ ջան',
  'դամբուլներ ջան',
  'սրտիկներ ջան',
  'խելոքներս',
  'անքուններ ջան',
];

if (hours === 23) {
  post('🥰 ո՞ւմ կուզենայիր շնորհակալութիւն յայտնել');
} else if (hours === 16) {
  post(`✋ մի պահ կանգ առ

🚶 ուղղիր մէջքդ 

🥤 ջուր խմիր`);
} else if (hours === 18) {
  post(`🌸    🦋                  🦋    
                                              🦋
🦋     վայելի՜ր ներկան    
                                           🦋
    🦋             🦋`);
} else if (hours === 14) {
  const lines = splitTextToLines(getArrayElementByDayInYear(tips));
  let text = '╔═════════════\n║\n';
  lines.forEach((line) => {
    text += `║    ${line}\n`;
  });
  text += '║\n╚═════════════';
  post(text);
} else if (hours === 1) {
  const luna = lunarphase.Moon.lunarPhaseEmoji();
  post(`.                             ✨
 ${luna}   
            խաղա՜ղ գիշեր քեզ      ✨

        ✨                            💫`);
}
