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
  
//==================================================  
// ВЫБОР РЕЖИМА  
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
  
}  
  modal: {

    overlay: document.getElementById("modalOverlay"),

    title: document.getElementById("modalTitle"),

    text: document.getElementById("modalText"),

    accept: document.getElementById("modalAcceptButton"),

    cancel: document.getElementById("modalCancelButton")

}

};  
  
const Game = {

    currentScreen: "mainMenu",

    selectedMode: null

};

function showScreen(screenName) {

    Game.currentScreen = screenName;

    for (const screen of Object.values(UI.screens)) {

        screen.style.display = "none";

    }

    UI.screens[screenName].style.display = "flex";

} 

  function showModal(title, text) {

    UI.modal.title.textContent = title;

    UI.modal.text.textContent = text;

    UI.modal.overlay.style.display = "flex";

}

function hideModal() {

    UI.modal.overlay.style.display = "none";

}

//==================================================  
// ОБРАБОТКА КНОПОК  
//==================================================  
  
UI.buttons.play.addEventListener("click", () => {  
  
    showScreen("modeMenu");  
  
});  
  
UI.buttons.back.addEventListener("click", () => {  
  
    showScreen("mainMenu");  
  
});  
  
//==================================================  
// ПРОВЕРКА ОРИЕНТАЦИИ  
//==================================================  
  
function checkOrientation() {  
  
    if (window.innerHeight > window.innerWidth) {  
  
      UI.rotateScreen.style.display = "flex";  
  
        // Скрываем игровые экраны  
        for (const screen of Object.values(UI.screens)) {  
            screen.style.display = "none";  
        }  
  
    } else {  
  
      UI.rotateScreen.style.display = "none";  
  
        // Показываем последний экран  
        showScreen(Game.currentScreen);
        showModal(
    "Полноэкранный режим",
    "Для лучшего игрового опыта рекомендуем открыть игру в полноэкранном режиме."
);
  
    }  
  
}  
  
window.addEventListener("resize", checkOrientation);  
  
checkOrientation();  
  
//==================================================  
// ВЫБОР РЕЖИМА  
//==================================================  
  
UI.buttons.mode1v1.addEventListener("click", () => {  
  
    showScreen("roomMenu");  
  
});  
  
UI.buttons.mode3v3.addEventListener("click", () => {  
  
    showScreen("roomMenu");  
  
});  
  
UI.buttons.mode5v5.addEventListener("click", () => {  
  
    showScreen("roomMenu");  
  
});  
  
//==================================================  
// НАЗАД  
//==================================================  
  
UI.buttons.backToMode.addEventListener("click", () => {  
  
    showScreen("modeMenu");  
  
});

UI.modal.cancel.addEventListener("click", () => {

    hideModal();

});