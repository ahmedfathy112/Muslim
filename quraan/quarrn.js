let pageContent = document.getElementById("content-page");
let surahPage = document.getElementById("surah-page");

fetch("https://api.alquran.cloud/v1/quran/ar.alafasy")
  .then((response) => response.json())
  .then((data) => {
    const surahs = data.data.surahs;
    surahs.forEach((surah) => {
      const suraahLink = document.createElement("a");
      suraahLink.className = "surrah-link";
      const ol = document.createElement("ol");
      const li = document.createElement("li");
      li.textContent = surah.number + "-" + surah.name;
      ol.appendChild(li);
      suraahLink.appendChild(ol);
      pageContent.appendChild(suraahLink);

      // إضافة حدث النقر على الرابط لعرض صفحة السورة
      suraahLink.addEventListener("click", (event) => {
        event.preventDefault(); // منع الانتقال إلى الرابط الأصلي
        surahPage.innerHTML = ""; // مسح محتوى صفحة السورة السابق
        surahPage.innerHTML += `
        <h2> ${surah.name}</h2>
        <i class="fa fa-facebook" aria-hidden="true" id="i-surah">اغلاق</i>
        `;
        fetch(`https://api.alquran.cloud/v1/surah/${surah.number}/ar.alafasy`)
          .then((response) => response.json())
          .then((data) => {
            const verses = data.data.ayahs;
            verses.forEach((verse) => {
              const verseItem = document.createElement("p");
              verseItem.textContent = `${verse.numberInSurah}. ${verse.text}`;
              surahPage.appendChild(verseItem);
            });
            surahPage.appendChild(versesList);
          })
          .catch((error) => console.log(error));
        surahPage.style.display = "block"; // عرض صفحة السورة
        document.getElementById("i-surah").addEventListener("click", () => {
          surahPage.style.display = "none";
        });
      });
    });
  })
  .catch((error) => console.log(error));

// go to the top
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
