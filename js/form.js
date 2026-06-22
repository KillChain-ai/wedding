// ===== ФОРМА RSVP =====

const form = document.getElementById("rsvpForm");

if (form) {

    form.addEventListener("submit", function (e) {

        e.preventDefault();


        // ===== ПОЛУЧЕНИЕ ДАННЫХ =====

        const name = form.querySelector('input[type="text"]').value;

        const visit = form.querySelector(
            'input[name="visit"]:checked'
        );

        const drinks = [];

        form.querySelectorAll(
            'input[type="checkbox"]:checked'
        ).forEach(item => {

            drinks.push(
                item.parentElement.innerText.trim()
            );

        });

        const wishes = form.querySelector("textarea").value;


        // ===== ПРОВЕРКА =====

        if (name.trim() === "") {

            showMessage(
                "Введите ваше имя"
            );

            return;

        }

        if (!visit) {

            showMessage(
                "Подтвердите присутствие"
            );

            return;

        }


        // ===== ОБЪЕКТ ОТВЕТА =====

        const guestData = {

            name: name,

            visit: visit.parentElement.innerText.trim(),

            drinks: drinks,

            wishes: wishes,

            date: new Date().toLocaleString()

        };


        // ===== СОХРАНЕНИЕ В LOCAL STORAGE =====

        let guests = JSON.parse(
            localStorage.getItem("guests")
        ) || [];

        guests.push(guestData);

        localStorage.setItem(
            "guests",
            JSON.stringify(guests)
        );


        // ===== СООБЩЕНИЕ ОБ УСПЕХЕ =====

        sendTelegram(guestData);


        // ===== ОЧИСТКА ФОРМЫ =====

        form.reset();

    });

}



// ===== УВЕДОМЛЕНИЕ ОБ ОШИБКЕ =====

function showMessage(text) {

    const popup = document.createElement("div");

    popup.className = "popup";

    popup.innerHTML = text;

    document.body.appendChild(popup);


    setTimeout(() => {

        popup.classList.add("show");

    }, 100);


    setTimeout(() => {

        popup.classList.remove("show");

        setTimeout(() => {

            popup.remove();

        }, 500);

    }, 2500);

}



// ===== УВЕДОМЛЕНИЕ ОБ УСПЕХЕ =====

function showSuccess() {

    const popup = document.createElement("div");

    popup.className = "popup success";

    popup.innerHTML = "Спасибо! Ваш ответ отправлен ❤️";

    document.body.appendChild(popup);


    setTimeout(() => {

        popup.classList.add("show");

    }, 100);


    setTimeout(() => {

        popup.classList.remove("show");

        setTimeout(() => {

            popup.remove();

        }, 500);

    }, 3000);

}