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

//==================================================
// СОЗДАНИЕ СЛОТОВ
//==================================================

function createTeamSlots(teamId, playerCount) {

    const team = document.getElementById(teamId);

    team.innerHTML = "";

    for (let i = 0; i < playerCount; i++) {

        const slot = document.createElement("div");

        slot.className = "playerSlot";

        if (i === 0 && teamId === "blueTeam") {

            slot.textContent = "👑 Вы";

        } else {

            slot.textContent = "Свободно";

        }

        team.appendChild(slot);

    }

}


function createRoom() {

    Game.roomCode = generateRoomCode();

    document.getElementById("roomCode").textContent =
        "Код: " + Game.roomCode;

    document.getElementById("roomModeText").textContent =
        "Режим: " + Game.selectedMode;

    let playersPerTeam = 1;

if (Game.selectedMode === "3v3") {

    playersPerTeam = 3;

}

if (Game.selectedMode === "5v5") {

    playersPerTeam = 5;

}

createTeamSlots("blueTeam", playersPerTeam);

createTeamSlots("redTeam", playersPerTeam);

    showScreen("gameRoom");

}

//==================================================
// ДЕЙСТВИЯ В КОМНАТЕ
//==================================================

function copyRoomCode() {

    alert("Копирование кода появится позже");

}

function selectMap() {

    alert("Выбор карты появится позже");

}

function startRoom() {

    alert("Запуск игры появится позже");

}

function leaveRoom() {

    showScreen("roomMenu");

}