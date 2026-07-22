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

const screens = {

    mainMenu,
    modeMenu

};

function showScreen(screenName) {

    for (const screen in screens) {

        screens[screen].style.display = "none";

    }

    screens[screenName].style.display = "flex";

}

//==================================================
// ОБРАБОТКА КНОПОК
//==================================================

playButton.addEventListener("click", () => {

    showScreen("modeMenu");

});

const backToMainMenuButton = document.getElementById("backToMainMenuButton");

backToMainMenuButton.addEventListener("click", () => {

    showScreen("mainMenu");

});

//==================================================
// ПРОВЕРКА ОРИЕНТАЦИИ
//==================================================

function checkOrientation() {

    alert(
        "Высота: " + window.innerHeight +
        "\nШирина: " + window.innerWidth
    );

    if (window.innerHeight > window.innerWidth) {

        rotateScreen.style.display = "flex";

    } else {

        rotateScreen.style.display = "none";

    }

}

window.addEventListener("resize", checkOrientation);

checkOrientation();