/*
========================================================
MiniDots

Файл:
joinRoom.js
========================================================
*/

const FIREBASE_URL =
"https://minidots-ee1de-default-rtdb.europe-west1.firebasedatabase.app";

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

    const response = await fetch(
        `${FIREBASE_URL}/rooms/${code}.json`
    );

    const room = await response.json();

    if (!room) {

        alert("Комната не найдена");

        return;

    }

    alert("Комната найдена!");

}