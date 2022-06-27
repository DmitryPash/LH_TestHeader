
jQuery(document).ready(function($){
    $("select").styler();
// Выпадающие меню
    $('.change-city').on('change', (e) => {
        $('.header-main-contacts-name').text(e.target.value)
    })
// Открытие поиска
    $('.header-nav-search').on('click', () => {
        $('.header-nav-search').toggleClass('header-nav-search-open')
        $('.header-nav-input').animate({
            width: "toggle"
        });
    })
// Мобильное меню
    $('.header-mob-toggle').on('click',() => {
        $('.header-mob-menu').toggleClass('header-mob-menu-open')
        $('.header-mob-toggle').toggleClass('header-mob-toggle-open')
    })
})


