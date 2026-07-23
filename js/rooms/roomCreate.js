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