// ===== АНИМАЦИЯ ПОЯВЛЕНИЯ СЕКЦИЙ =====

const sections = document.querySelectorAll("section");

function revealSections() {

    sections.forEach(section => {

        const top = section.getBoundingClientRect().top;
        const trigger = window.innerHeight * 0.85;

        if (top < trigger) {
            section.classList.add("active");
        }

    });

}

window.addEventListener("scroll", revealSections);
revealSections();



// ===== ПАРАЛЛАКС ГЛАВНОЙ ФОТО =====

const heroImage = document.querySelector(".hero-image img");

window.addEventListener("scroll", () => {

    let offset = window.pageYOffset;

    if (heroImage) {
        heroImage.style.transform =
            `translateY(${offset * 0.2}px) scale(1.05)`;
    }

});



// ===== ПЛАВНОЕ УВЕЛИЧЕНИЕ ФОТО =====

const images = document.querySelectorAll(
".gallery-grid img, .female-gallery img, .male-gallery img"
);

images.forEach(image => {

    image.addEventListener("mouseenter", () => {

        image.style.transition = ".6s";
        image.style.transform = "scale(1.05)";

    });

    image.addEventListener("mouseleave", () => {

        image.style.transform = "scale(1)";

    });

});



// ===== КНОПКА МУЗЫКИ =====

const musicButton = document.querySelector(".music-button");

const music = new Audio("audio/music.mp3");

music.loop = true;

let isPlaying = false;

musicButton.addEventListener("click", () => {

    if (!isPlaying) {

        music.play();

        musicButton.style.background = "#d4b483";
        musicButton.innerHTML = "❚❚";

        isPlaying = true;

    } else {

        music.pause();

        musicButton.innerHTML = "♫";
        musicButton.style.background = "white";

        isPlaying = false;

    }

});



// ===== ПЛАВНАЯ ПРОКРУТКА =====

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        e.preventDefault();

        const target = document.querySelector(
            this.getAttribute("href")
        );

        if (target) {

            target.scrollIntoView({
                behavior: "smooth"
            });

        }

    });

});



// ===== ЛЕГКОЕ ПОКАЧИВАНИЕ КНОПКИ МУЗЫКИ =====

setInterval(() => {

    if (!isPlaying) {

        musicButton.animate([

            { transform: "scale(1)" },
            { transform: "scale(1.08)" },
            { transform: "scale(1)" }

        ], {

            duration: 1500

        });

    }

}, 3000);



// ===== АНИМАЦИЯ ПОЯВЛЕНИЯ TIMELINE =====

const timelineItems = document.querySelectorAll(".timeline-item");

window.addEventListener("scroll", () => {

    timelineItems.forEach((item, index) => {

        const top = item.getBoundingClientRect().top;

        if (top < window.innerHeight * 0.9) {

            item.style.opacity = "1";
            item.style.transform = "translateY(0)";
            item.style.transition =
                `1s ease ${index * .2}s`;

        }

    });

});



// ===== НАЧАЛЬНЫЕ СТИЛИ TIMELINE =====

timelineItems.forEach(item => {

    item.style.opacity = "0";
    item.style.transform = "translateY(50px)";

});



// ===== МЕДЛЕННОЕ ВРАЩЕНИЕ КОЛЕЦ =====

const rings = document.querySelector(".rings img");

if (rings) {

    let angle = 0;

    setInterval(() => {

        angle += 0.3;

        rings.style.transform =
            `rotate(${angle}deg)`;

    }, 20);

}