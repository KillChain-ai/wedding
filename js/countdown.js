// ===== ДАТА СВАДЬБЫ =====

const weddingDate = new Date("2026-09-18T12:00:00");


// ===== ЭЛЕМЕНТЫ =====

const daysElement = document.getElementById("days");
const hoursElement = document.getElementById("hours");
const minutesElement = document.getElementById("minutes");
const secondsElement = document.getElementById("seconds");


// ===== ФОРМАТ ЧИСЕЛ =====

function formatNumber(number) {

    return number < 10
        ? "0" + number
        : number;

}


// ===== ОБНОВЛЕНИЕ ТАЙМЕРА =====

function updateCountdown() {

    const now = new Date();

    const difference = weddingDate - now;


    // Если дата уже наступила

    if (difference <= 0) {

        daysElement.innerHTML = "00";
        hoursElement.innerHTML = "00";
        minutesElement.innerHTML = "00";
        secondsElement.innerHTML = "00";

        clearInterval(timer);

        return;

    }


    // Вычисления

    const days =
        Math.floor(
            difference / (1000 * 60 * 60 * 24)
        );

    const hours =
        Math.floor(
            (difference % (1000 * 60 * 60 * 24))
            / (1000 * 60 * 60)
        );

    const minutes =
        Math.floor(
            (difference % (1000 * 60 * 60))
            / (1000 * 60)
        );

    const seconds =
        Math.floor(
            (difference % (1000 * 60))
            / 1000
        );


    // Вывод

    daysElement.innerHTML =
        formatNumber(days);

    hoursElement.innerHTML =
        formatNumber(hours);

    minutesElement.innerHTML =
        formatNumber(minutes);

    secondsElement.innerHTML =
        formatNumber(seconds);

}


// ===== ЗАПУСК =====

updateCountdown();

const timer = setInterval(
    updateCountdown,
    1000
);



// ===== АНИМАЦИЯ СМЕНЫ ЦИФР =====

const timerBlocks = document.querySelectorAll(".timer span");

setInterval(() => {

    timerBlocks.forEach(block => {

        block.animate(

            [
                {
                    transform: "translateY(-5px)"
                },

                {
                    transform: "translateY(0)"
                }

            ],

            {
                duration: 400
            }

        );

    });

}, 1000);
