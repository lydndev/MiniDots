//==================================================
// ИНТЕРФЕЙС
//==================================================

const UI = {

    rotateScreen: document.getElementById("rotateScreen"),

    screens: {
        mainMenu: document.getElementById("mainMenu"),
        modeMenu: document.getElementById("modeMenu"),
        roomMenu: document.getElementById("roomMenu"),
        joinRoomScreen: document.getElementById("joinRoomScreen"),
        gameRoom: document.getElementById("gameRoom")
    },

    buttons: {

        play: document.getElementById("playButton"),

        back: document.getElementById("backToMainMenuButton"),

        mode1v1: document.getElementById("mode1v1Button"),

        mode3v3: document.getElementById("mode3v3Button"),

        mode5v5: document.getElementById("mode5v5Button"),

        createRoom: document.getElementById("createRoomButton"),

        joinRoom: document.getElementById("joinRoomButton"),

        backToMode: document.getElementById("backToModeMenuButton"),
        copyRoomCode: document.getElementById("copyRoomCodeButton"),

        selectMap: document.getElementById("selectMapButton"),

        startRoom: document.getElementById("startRoomButton"),

        leaveRoom: document.getElementById("leaveRoomButton")

    },

    modal: {

        overlay: document.getElementById("modalOverlay"),

        title: document.getElementById("modalTitle"),

        text: document.getElementById("modalText"),

        accept: document.getElementById("modalAcceptButton"),

        cancel: document.getElementById("modalCancelButton")

    },

start: {

    overlay: document.getElementById("startOverlay"),

    button: document.getElementById("startButton")

}

};

//==================================================
// ДАННЫЕ ИГРЫ
//==================================================

const Game = {

    currentScreen: "mainMenu",

    selectedMode: null,

    roomCode: null,

    leader: "Вы"

};

//==================================================
// ЗАПУСК
//==================================================

showScreen("mainMenu");

checkOrientation();

if (localStorage.getItem("startMessageSeen") === "true") {

    UI.start.overlay.style.display = "none";

}