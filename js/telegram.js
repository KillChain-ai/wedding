// ==========================
// НАСТРОЙКИ TELEGRAM
// ==========================

const TOKEN = "8861162948:AAElulNGHgF1FJKlLInUrsA2yrQUwqEYx54";

const CHAT_ID = "1029437136";

const URL =
`https://api.telegram.org/bot${TOKEN}/sendMessage`;


// ==========================
// ОТПРАВКА В TELEGRAM
// ==========================

async function sendTelegram(data){

let text =

`💍 Новая анкета\n\n` +

`👤 Имя: ${data.name}\n\n` +

`✅ Присутствие:\n${data.visit}\n\n` +

`🥂 Напитки:\n${data.drinks.join(", ")}\n\n` +

`💌 Пожелания:\n${data.wishes}\n\n` +

`🕒 ${data.date}`;


try{

await fetch(URL,{

method:"POST",

headers:{
"Content-Type":"application/json"
},

body:JSON.stringify({

chat_id:CHAT_ID,

text:text

})

});


showSuccess();

}

catch(error){

showMessage(
"Ошибка отправки"
);

}

}