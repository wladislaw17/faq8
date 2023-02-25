const dropDownButton = document.querySelector('.header__dropdown-button');
const dropDownMenu = document.querySelector('.header__dropdown-menu');

const showDropDown = () => dropDownMenu.classList.toggle('header__dropdown-menu_active');

dropDownButton.addEventListener('click', showDropDown);
