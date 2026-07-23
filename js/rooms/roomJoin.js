/*
========================================================
MiniDots

Файл:
roomJoin.js
========================================================
*/

//==================================================
// ОТКРЫТЬ ЭКРАН ВХОДА
//==================================================

function openJoinRoom() {

    document.getElementById("joinRoomInput").value = "";

    showScreen("joinRoomScreen");

}

//==================================================
// ПОИСК КОМНАТЫ
//==================================================

async function findRoom(code) {

    const response = await fetch(
        `${FIREBASE_URL}/rooms/${code}.json`
    );

    return await response.json();

}

//==================================================
// ВХОД В КОМНАТУ
//==================================================

async function joinRoom() {

    const code = document
        .getElementById("joinRoomInput")
        .value
        .trim()
        .toUpperCase();

    if (code.length !== 6) {

        alert("Введите код комнаты");

        return;

    }

    const room = await findRoom(code);

    if (!room) {

        alert("Комната не найдена");

        return;

    }

    alert("Комната найдена!");

}