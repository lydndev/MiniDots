/*
========================================================
MiniDots

Файл:
fullscreen.js
========================================================
*/

//==================================================
// ПОЛНОЭКРАННЫЙ РЕЖИМ
//==================================================

async function enterFullscreen() {

    try {

        if (document.documentElement.requestFullscreen) {

            await document.documentElement.requestFullscreen();

        }

    } catch (error) {

        console.log(error);

    }

    hideModal();

}