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
          <li>اللهمَّ اعفُ عن <span>${diedName}</span> واغفر له وارحمه وأنت خير الراحمين.</li>
          <li>ربِّ هب <span>${diedName}</span> من لدنك رحمةً إنّك أنت الوهَّاب.</li>
          <li>اللهمَّ اغفر <span>${diedName}</span> ذنوبهم وقِهم عذاب النَّار.</li>
          <li>
            ربَّنا اغفر <span>${diedName}</span> ذنوبهم وإسرافهم في أمرهم وكفِّر عنهم سيِّئاتهم.
          </li>
          <li>اللهمَّ اغفر ل <span>${diedName}</span>  ، وارحمه، وثبته عند السُّؤال.</li>
          <li>
            اللهمَّ إنَّا نتوسل بك إليك، ونقسم بك عليك أن ترحمه ولا تعذبه، وأن
            تُثبته عند السُّؤال.
          </li>
          <li> اللهمَّ إنَّا نسألك أن ترزقه الثَّبات عند السؤال، وأن تُثقّل موازينه وتتجاوز عمَّا كان منه.</li>
          <li>اللهمَّ اجزهِ عن الإحسان إحسانًا وعن الإساءة عفوًا وغفرانًا. </li>
          <li> اللهمَّ إن كان محسنًا فزد من حسناته، وإن كان مسيئًا فتجاوز عن سيّئاته.</li>
          <li> اللهمَّ إنّ <span>${diedName}</span> نزل بك وأنت خير منزول به، وأصبح فقيرًا إلى رحمتك وأنت غنيٌ عن عذابه.</li>
          <li>اللهمَّ آت <span>${diedName}</span> برحمتك ورضاك، وقهِ فتنة القبر وعذابه، وآتهِ برحمتك الأمن من عذابك حتّى تبعثه إلى جنتك يا أرحم الرَّاحمين.</li>
          <li> اللهمَّ أسكن <span>${diedName}</span> فسيح الجنان، واغفر له يا رحمن، وارحمه يا رحيم، وتجاوز عمَّا تعلم يا عليم.</li>
          <li> اللهمَّ إنَّ رحمتك وسعت كلَّ شيءٍ فارحمه رحمةً تطمئنُّ بها نفسه، وتقرُّ بها عينه.</li>
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
