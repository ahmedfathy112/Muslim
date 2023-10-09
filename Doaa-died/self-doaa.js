let diedBTN = document.getElementById("died-btn");
let doaasSEC = document.getElementById("doaas");
let savebtn = document.getElementById("save-btn");
diedBTN.addEventListener("click", () => {
  let diedName = document.getElementById("died-input").value;
  if (diedName == "") {
    diedBTN.stop();
  }
  savebtn.style.display = "block";
  doaasSEC.innerHTML += `
    <ul>
        <li>اللهم ألبسني انا عبدك <span> ${diedName}</span> العافية حتى تهنيني بالمعيشة، واختم لي بالمغفرة حتى لا تضرني الذنوب، واكفني كل هول دون الجنة حتى تبلغنيها.</li>
        <li>رب اجعل أيامنا كلها سعادة رب بدد
        الأحزان وأبرئ الأسقام وابسط الأرزاق وحسن الأخلاق وانشر الرحمات وامح السيئات تباركت يا رب البريات يا رب الأرض والسماوات.</li>
        <li>اللهم إني عبدك <span> ${diedName}</span> أعوذ بك من قلب لا يخشع، ومن دعاء لا يُسمع، ومن نفس لا تشبع، ومن علم لا ينفع، اللهم إني أعوذ بك من هؤلاء الأربع.
</li>
        <li>
يا رب، أدعوك انا عبدك <span> ${diedName}</span> بعزتك وجلالك، أن لا تصعّب لي حاجة، ولا تعظم علي أمرا، ولا تحنِ لي قامة، ولا تفضح لي سرا، ولا تكسر لي ظهرا.
        </li>
        <li>اللهم فوضتك أمري كله، فجمّله خيرا بما شئت، واجعلني يا رب ممن نظرت إليه فرحمته، وسمعت دعاءه فأجبته.
</li>
        <li>
           اللهم اجبر كسر قلبي، جبرا يتعجب منه أهل السماوات والأرض، جبرا يليق بكرمك، وعظمتك، وقدرتك، يا رب.

        </li>
        <li> اللهم أعطني من الدنيا ما تقيني به فتنتها، وتغنيني به عن أهلها، ويكون بلاغا لي إلى ما هو خير منها، فإنه لا حول ولا قوة إلا بك، اللهم اجعلنا من الذين فتحوا باب الصبر، وجازوا شديد العقاب، وعبروا جسر الهوى.
</li>
        <li>اللهم إنك عفو تحب العفو فاعف عنا، ربي استودعتك كل دعاء دعوته إليك وكل ما فاضت نفسي به وكل رغبة عجزت ان اصيغها لك في دعاء فافرحني باستجابه منك عاجلا غير اجل.
 </li>
        <li> اللهم إني أسألك يا الله بأنك الواحد الأحد الصمد، الذي لم يلد ولم يولد ولم يكن له كفؤا أحد، أن تغفر لي ذنوبي، إنك أنت الغفور الرحيم، اللهم إني أسألك عيشة نقية، وميتة سوية، ومردا غير مخز، ولا فاضح.
</li>
        <li> يا خالق الراحة وكلتك امري واستودعتك إياه، فبشرني بمآ يفتح مداخل السعادة في قلبي.
</li>
        <li>يا رّب إني دعوتك و كلي يقين بأن الإجابة من عندك، اللهم إن توفيقي و سعادتي بيديك استودعتك جل ما في قلبي فبشرنّي بما يسرني.
</li>
        <li>صباح اليقين بأن رحمة خالقي أوسع من متاعب الدنيا.
</li>
        <li>اللهم اكفني شر كل ذي شر.
</li>
        </ul>
  `;
  // the save button
  savebtn.addEventListener("click", () => {
    navigator.clipboard.writeText(doaasSEC.innerText);
    savebtn.innerHTML = "";
    savebtn.innerHTML = "تم الحفظ";
  });
});

// top btn
let topBTN = document.getElementById("top-btn");

window.onscroll = function topFUN() {
  if (pageYOffset <= 186) {
    topBTN.style.display = "none";
  } else {
    topBTN.style.display = "block";
  }
};
topBTN.addEventListener("click", () => {
  scrollTo(0, 0);
});
