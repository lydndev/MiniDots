/*
========================================================
MiniDots

Файл:
room.js
========================================================
*/

//==================================================
// КОМНАТА
//==================================================

function generateRoomCode() {

    const symbols = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";

    let code = "";

    for (let i = 0; i < 6; i++) {

        code += symbols[Math.floor(Math.random() * symbols.length)];

    }

    return code;

}

function createRoom() {

    Game.roomCode = generateRoomCode();

    document.getElementById("roomCode").textContent =
        "Код: " + Game.roomCode;

    document.getElementById("roomModeText").textContent =
        "Режим: " + Game.selectedMode;

    document.getElementById("blueTeam").innerHTML =
        `<div class="playerSlot">👑 Вы</div>`;

    document.getElementById("redTeam").innerHTML = "";

    showScreen("gameRoom");

}