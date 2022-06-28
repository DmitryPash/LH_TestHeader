
jQuery(document).ready(function($){
// Кастомный селект выподающего меню
    $("select").styler();
// Выпадающие меню
    $('.change-city').on('change', (e) => {
        $('.header-main-contacts-name').text(e.target.value)
    })
// Поиск
    let headerNavSearch = document.querySelector('.header-nav-search'),
    headerNavInput = document.querySelector('.header-nav-input');
    headerNavSearch.addEventListener('click', () => {
        event.preventDefault();
        headerNavInput.classList.toggle('header-nav-input-open')
        headerNavSearch.classList.toggle('header-nav-search-open')
    })
// Мобильное меню
    let headerMobToggle = document.querySelector('.header-mob-toggle'),
        headerMobMenu = document.querySelector('.header-mob-menu');
        headerMobToggle.addEventListener('click', () => {
            event.preventDefault();
            headerMobToggle.classList.toggle('header-mob-toggle-open')
            headerMobMenu.classList.toggle('header-mob-menu-open')
        })
})


