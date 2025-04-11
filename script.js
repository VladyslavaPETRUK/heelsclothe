// Мобильное меню
document.addEventListener('DOMContentLoaded', function() {
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.querySelector('.nav_menu');
    const navMenuContent = document.getElementById('nav_menu_content');

    // Обработчик клика по бургер-кнопке
    navToggle.addEventListener('click', function() {
        this.classList.toggle('active');
        navMenuContent.classList.toggle('active');
        document.body.classList.toggle('no-scroll'); // Блокируем скролл при открытом меню
    });

    // Закрытие меню при клике на ссылку
    document.querySelectorAll('.nav_link').forEach(link => {
        link.addEventListener('click', () => {
            navToggle.classList.remove('active');
            navMenuContent.classList.remove('active');
            document.body.classList.remove('no-scroll');
        });
    });

    // Анимация элементов при прокрутке
    const animateOnScroll = () => {
        const elements = document.querySelectorAll('.animate-on-scroll');
        const windowHeight = window.innerHeight;
        const elementVisible = 150;

        elements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;

            if (elementTop < windowHeight - elementVisible) {
                element.classList.add('visible');
            } else {
                element.classList.remove('visible');
            }
        });
    };

    // Инициализация при загрузке
    animateOnScroll();
    window.addEventListener('scroll', animateOnScroll);
});