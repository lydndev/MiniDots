/*
========================================================
MiniDots

Файл:
roomCreate.js
========================================================
*/

const FIREBASE_URL =
"https://minidots-ee1de-default-rtdb.europe-west1.firebasedatabase.app";

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


async function createRoom() {

    Game.roomCode = generateRoomCode();

    const roomData = {

        mode: Game.selectedMode,

        leader: "Вы",

        players: {

            host: {

                name: "Вы"

            }

        }

    };

    await fetch(
        `${FIREBASE_URL}/rooms/${Game.roomCode}.json`,
        {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(roomData)
        }
    );

    document.getElementById("roomCode").textContent =
        "Код: " + Game.roomCode;

    document.getElementById("roomModeText").textContent =
        "Режим: " + Game.selectedMode;

    document.getElementById("blueTeam").innerHTML =
        `<div class="playerSlot">👑 Вы</div>`;

    document.getElementById("redTeam").innerHTML = "";

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