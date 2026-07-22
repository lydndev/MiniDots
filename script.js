/*
========================================================
MiniDots
Версия: Alpha 0.0.3

Файл:
script.js
========================================================
*/

//==================================================
// ГЛАВНОЕ МЕНЮ
//==================================================

const mainMenu = document.getElementById("mainMenu");
const modeMenu = document.getElementById("modeMenu");

const playButton = document.getElementById("playButton");

//==================================================
// ВЫБОР РЕЖИМА
//==================================================

function showMainMenu() {

    mainMenu.style.display = "flex";
    modeMenu.style.display = "none";

}

function showModeMenu() {

    mainMenu.style.display = "none";
    modeMenu.style.display = "flex";

}

//==================================================
// ОБРАБОТКА КНОПОК
//==================================================

playButton.addEventListener("click", () => {

    showModeMenu();

});

document.querySelector("#modeMenu button:last-child").addEventListener("click", () => {

    showMainMenu();

});
