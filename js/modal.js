/*
========================================================
MiniDots

Файл:
modal.js
========================================================
*/

//==================================================
// МОДАЛЬНЫЕ ОКНА
//==================================================

function showModal(title, text) {

    UI.modal.title.textContent = title;

    UI.modal.text.textContent = text;

    UI.modal.overlay.style.display = "flex";

}

function hideModal() {

    UI.modal.overlay.style.display = "none";

}

//==================================================
// СТАРТОВОЕ ОКНО
//==================================================

function hideStartOverlay() {

    UI.start.overlay.style.display = "none";

    localStorage.setItem("startOverlayShown", "true");

    if (document.documentElement.requestFullscreen) {

        showModal(
            "Полноэкранный режим",
            "Теперь вы можете включить полноэкранный режим для более комфортной игры."
        );

    }

}