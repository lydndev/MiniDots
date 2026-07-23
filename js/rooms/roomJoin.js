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

    try {

        const response = await fetch(
            `${FIREBASE_URL}/rooms/${code}.json`
        );

        alert("Ответ сервера: " + response.status);

        const data = await response.json();

        return data;

    } catch (e) {

        alert("Ошибка:\n" + e);

        return null;

    }

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