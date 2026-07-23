/*
========================================================
MiniDots

Файл:
roomPlayers.js
========================================================
*/

//==================================================
// ОБНОВЛЕНИЕ СПИСКА ИГРОКОВ
//==================================================

async function updatePlayers() {

    if (!Game.roomCode) return;

    const response = await fetch(
        `${FIREBASE_URL}/rooms/${Game.roomCode}.json`
    );

    const room = await response.json();

    if (!room) return;

    const blueTeam = document.getElementById("blueTeam");

    blueTeam.innerHTML = "";

    for (const id in room.players) {

        const slot = document.createElement("div");

        slot.className = "playerSlot";

        slot.textContent = room.players[id].name;

        blueTeam.appendChild(slot);

    }

}