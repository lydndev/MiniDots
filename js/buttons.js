//==================================================
// ОБРАБОТКА КНОПОК
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

// Создать комнату

UI.buttons.createRoom.addEventListener("click", () => {

    createRoom();

});

// Назад к выбору режима

UI.buttons.backToMode.addEventListener("click", () => {

    showScreen("modeMenu");
});

// Выйти из комнаты

UI.buttons.leaveRoom.addEventListener("click", () => {

    showScreen("roomMenu");
});

// Стартовое окно

UI.start.button.addEventListener("click", () => {

    hideStartOverlay();

});

//==================================================
// КНОПКИ МОДАЛЬНОГО ОКНА
//==================================================

UI.modal.cancel.addEventListener("click", () => {

    hideModal();

});

UI.modal.accept.addEventListener("click", () => {

    enterFullscreen();

});
