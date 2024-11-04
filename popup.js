// document.getElementById('openPopup').addEventListener('click', function () {
//     document.getElementById('popupForm').style.display = 'block';
// });

// document.querySelector('.close').addEventListener('click', function () {
//     document.getElementById('popupForm').style.display = 'none';
// });

// window.onclick = function (event) {
//     if (event.target == document.getElementById('popupForm')) {
//         document.getElementById('popupForm').style.display = 'none';
//     }
// }

document.addEventListener('DOMContentLoaded', function () {
    const openPopupButton = document.getElementById('openPopup');
    const popupForm = document.getElementById('popupForm');
    const closeButton = document.querySelector('.close');

    // Check if elements exist before adding event listeners
    if (openPopupButton && popupForm && closeButton) {
        openPopupButton.addEventListener('click', function () {
            popupForm.style.display = 'block';
        });

        closeButton.addEventListener('click', function () {
            popupForm.style.display = 'none';
        });

        window.onclick = function (event) {
            if (event.target === popupForm) {
                popupForm.style.display = 'none';
            }
        };
    }
});

