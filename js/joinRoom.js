alert("joinRoom.js работает");

import { db } from "./firebase.js";

import {
    ref,
    get
} from "https://www.gstatic.com/firebasejs/12.16.0/firebase-database.js";

async function joinRoom() {

    const code = document
        .getElementById("joinRoomInput")
        .value
        .trim()
        .toUpperCase();

    if (code === "") {

        alert("Введите код комнаты");

        return;

    }

    const roomRef = ref(db, "rooms/" + code);

    const snapshot = await get(roomRef);

    if (!snapshot.exists()) {

        alert("Комната не найдена");

        return;

    }

    alert("Комната найдена!");

}

if (window.firebaseDB) {
    alert("Firebase подключён");
} else {
    alert("Firebase НЕ подключён");
}