//==================================================
// ОБРАБОТКА КНОПОК
//==================================================

// Главное меню

UI.buttons.play.addEventListener("click", openModeMenu);

// Назад в главное меню

UI.buttons.back.addEventListener("click", backToMainMenu);

// Выбор режима

UI.buttons.mode1v1.addEventListener("click", () => {

    selectMode("1v1");

});

UI.buttons.mode3v3.addEventListener("click", () => {

    selectMode("3v3");

});

UI.buttons.mode5v5.addEventListener("click", () => {

    selectMode("5v5");

});

// Создать комнату

UI.buttons.createRoom.addEventListener("click", () => {

    createRoom();

});

// Войти по коду

UI.buttons.joinRoom.addEventListener("click", openJoinRoom);

// Назад к выбору режима

UI.buttons.backToMode.addEventListener("click", backToModeMenu);

UI.buttons.backToRoomMenu.addEventListener("click", () => {

    showScreen("roomMenu");

});

// Выйти из комнаты

UI.buttons.leaveRoom.addEventListener("click", leaveRoom);

// КНОПКИ КОМНАТЫ

UI.buttons.copyRoomCode.addEventListener("click", copyRoomCode);

UI.buttons.selectMap.addEventListener("click", selectMap);

UI.buttons.startRoom.addEventListener("click", startRoom);

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


UI.buttons.joinRoomConfirm.addEventListener("click", joinRoom);