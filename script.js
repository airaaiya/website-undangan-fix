//elemen
const splash = document.getElementById("splash");
const main = document.getElementById("main");
const openBtn = document.getElementById("openBtn");
const bgmusic = document.getElementById("bgmusic");
const sections = document.querySelectorAll("section, header");

//buka undangan 
openBtn.addEventListener("click", () => {
    splash.style.display = "none";
    main.style.display = "block";
    bgmusic.play ()
});

//countdown
const eventDate = new Date("November 18, 2025 09:00:00").getTime();

setInterval (() => {
    const now = new Date().getTime();
    const distance = eventDate - now;

    const days = Math.floor (distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor ((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 *60));
    const minutes = Math.floor ((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor ((distance % (1000 * 60)) / (1000));

    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;
}, 1000);

//animasi
window.addEventListener("scroll", () => {
  sections.forEach(sec => {
    const top = window.scrollY;
    const offset = sec.offsetTop - window.innerHeight + 100;
    if (top > offset) {
      sec.classList.add("show");
    }
  });
});