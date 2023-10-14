var tg = window.Telegram.WebApp;

tg.expand();
tg.MainButton.textColor = "#FFF";
tg.MainButton.hide();

str = "";

// for(let i = 0; i < products.length; i++)
// {
//     str += "<div class=\"item btn\">\n" +
//         "                <img src=\"img"+(i+1)+".png\" alt=\"\" class=\"img\">\n" +
//         "                <br />\n" +
//         "                <span class='name'>"+products[i][0]+" | "+products[i][1]+" руб.</span>\n" +
//         "                <br />\n" +
//         "                <button class=\"sub-btn\" style=\"display: none\">-</button>\n" +
//         "                <span style=\"display: none;\" class=\"value\">0</span>\n" +
//         "                <button class=\"add-btn\">Добавить</button>\n" +
//         "            </div>"
// }
// document.getElementById('inner').innerHTML = str;

Telegram.WebApp.onEvent('mainButtonClicked', function(){
    tg.sendData(product);
    //при клике на основную кнопку отправляем данные в строковом виде
});


let usercard = document.getElementById('usercard');

let p = document.createElement('p');
p.innerText = `${tg.initDataUnsafe.user.first_name}` +
    `${tg.initDataUnsafe.user.last_name}`
usercard.appendChild(p);