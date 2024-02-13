document.addEventListener('DOMContentLoaded', function () {

    // nav 선택 시, 색 변경
    const menuItems = document.querySelectorAll('.nav-item');

    menuItems.forEach(function (menuItem) {
        menuItem.addEventListener('click', function () {
            menuItems.forEach(function (item) {
                item.classList.remove('selected');
            });
            menuItem.classList.add('selected');

            var clickedItemText = menuItem.textContent;

            updateMainContent(clickedItemText);
        });
    });

    // nav first li 선택
    var defaultNavItem = document.querySelector('.nav-item');
    defaultNavItem.classList.add('selected');

    var defaultItemText = defaultNavItem.textContent;

    updateMainContent(defaultItemText);

    // nav li에 따라 이미지 변경
    function updateMainContent(itemText) {
        var mainElement = document.querySelector('main');
        mainElement.innerHTML = '';

        for (var i = 1; i <= 5; i++) {
            var imgElement = document.createElement('img');
            imgElement.src = `./img/${itemText}0${i}.png`;
            mainElement.appendChild(imgElement);
        }
    }
});