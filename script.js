/*
========================================================
MiniDots
Версия: Alpha 0.0.3

Файл:
script.js
========================================================
*/

//==================================================
// ИНТЕРФЕЙС
//==================================================

const UI = {

    rotateScreen: document.getElementById("rotateScreen"),

    screens: {
        mainMenu: document.getElementById("mainMenu"),
        modeMenu: document.getElementById("modeMenu"),
        roomMenu: document.getElementById("roomMenu")
    },

    buttons: {
        play: document.getElementById("playButton"),
        back: document.getElementById("backToMainMenuButton"),

        mode1v1: document.getElementById("mode1v1Button"),
        mode3v3: document.getElementById("mode3v3Button"),
        mode5v5: document.getElementById("mode5v5Button"),

        createRoom: document.getElementById("createRoomButton"),
        joinRoom: document.getElementById("joinRoomButton"),

        backToMode: document.getElementById("backToModeMenuButton")
    },

    modal: {
        overlay: document.getElementById("modalOverlay"),
        title: document.getElementById("modalTitle"),
        text: document.getElementById("modalText"),
        accept: document.getElementById("modalAcceptButton"),
        cancel: document.getElementById("modalCancelButton")
    }

};

//==================================================
// ДАННЫЕ ИГРЫ
//==================================================

const Game = {

    currentScreen: "mainMenu",
    selectedMode: null

};

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

//==================================================
// МОДАЛЬНОЕ ОКНО
//==================================================

function showModal(title, text) {

    UI.modal.title.textContent = title;
    UI.modal.text.textContent = text;

    UI.modal.overlay.style.display = "flex";

}

function hideModal() {

    UI.modal.overlay.style.display = "none";

}

//==================================================
// ПОЛНОЭКРАННЫЙ РЕЖИМ
//==================================================

async function enterFullscreen() {

    try {

        if (document.documentElement.requestFullscreen) {

            await document.documentElement.requestFullscreen();

        }

    } catch (error) {

        console.log(error);

    }

    hideModal();

}

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

//==================================================
// КНОПКИ
//==================================================

// Главное меню

UI.buttons.play.addEventListener("click", () => {

    showScreen("modeMenu");

});

// Назад в главное меню

UI.buttons.back.addEventListener("click", () => {

    showScreen("mainMenu");

});

// Выбор режима

UI.buttons.mode1v1.addEventListener("click", () => {

    Game.selectedMode = "1v1";

    showScreen("roomMenu");

});

UI.buttons.mode3v3.addEventListener("click", () => {

    Game.selectedMode = "3v3";

    showScreen("roomMenu");

});

UI.buttons.mode5v5.addEventListener("click", () => {

    Game.selectedMode = "5v5";

    showScreen("roomMenu");

});

// Назад к выбору режима

UI.buttons.backToMode.addEventListener("click", () => {

    showScreen("modeMenu");

});

// Модальное окно

UI.modal.cancel.addEventListener("click", hideModal);

UI.modal.accept.addEventListener("click", enterFullscreen);

//==================================================
// ЗАПУСК
//==================================================

showScreen("mainMenu");

checkOrientation();

if (window.innerWidth > window.innerHeight) {

    showModal(
        "Полноэкранный режим",
        "Для лучшего игрового опыта рекомендуем включить полноэкранный режим."
    );

}