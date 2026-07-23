/*
========================================================
MiniDots

Файл:
screens.js
========================================================
*/

//==================================================
// ЭКРАНЫ
//==================================================

function showScreen(screenName) {

    Game.currentScreen = screenName;

    for (const screen of Object.values(UI.screens)) {

        screen.style.display = "none";

    }

    UI.screens[screenName].style.display = "flex";

}