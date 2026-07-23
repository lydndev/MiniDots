/*
========================================================
MiniDots
Версия: Alpha 0.0.3

Файл:
orientation.js
========================================================
*/

//==================================================
// ПРОВЕРКА ОРИЕНТАЦИИ
//==================================================

function checkOrientation() {

    if (window.innerHeight > window.innerWidth) {

        UI.rotateScreen.style.display = "flex";

        for (const screen of Object.values(UI.screens)) {

            screen.style.display = "none";

        }

    } else {

        UI.rotateScreen.style.display = "none";

        showScreen(Game.currentScreen);

    }

}

window.addEventListener("resize", checkOrientation);