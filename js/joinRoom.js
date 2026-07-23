
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

    const snapshot = await db
        .ref("rooms/" + code)
        .once("value");

    if (!snapshot.exists()) {

        alert("Комната не найдена");

        return;

    }

    alert("Комната найдена!");

}