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

const rotateScreen = document.getElementById("rotateScreen");

const UI = {

    rotateScreen: document.getElementById("rotateScreen"),

    screens: {
        mainMenu: document.getElementById("mainMenu"),
        modeMenu: document.getElementById("modeMenu")
    },

    buttons: {
        play: document.getElementById("playButton"),
        back: document.getElementById("backToMainMenuButton")
    }

};

function showScreen(screenName) {

    for (const screen of Object.values(UI.screens)) {

        screen.style.display = "none";

    }

    UI.screens[screenName].style.display = "flex";

}

//==================================================
// ОБРАБОТКА КНОПОК
//==================================================

UI.buttons.play.addEventListener("click", () => {

    showScreen("modeMenu");

});

const backToMainMenuButton = document.getElementById("backToMainMenuButton");

UI.buttons.back.addEventListener("click", () => {

    showScreen("mainMenu");

});

//==================================================
// ПРОВЕРКА ОРИЕНТАЦИИ
//==================================================

function checkOrientation() {

    if (window.innerHeight > window.innerWidth) {

        rotateScreen.style.display = "flex";

        // Скрываем игровые экраны
        for (const screen of Object.values(UI.screens)) {
            screen.style.display = "none";
        }

    } else {

        rotateScreen.style.display = "none";

        // Показываем последний экран
        showScreen("mainMenu");

    }

}

window.addEventListener("resize", checkOrientation);

checkOrientation();
