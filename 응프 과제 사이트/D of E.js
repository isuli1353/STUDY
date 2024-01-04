/*스크린 자동으로 넘기기*/
document.addEventListener("DOMContentLoaded", function() {
    const sliders = document.querySelectorAll('.slider');
    let currentSlide = 0;
    const slideInterval = 7000;

    function showSlide(index) {
        sliders.forEach((slide, i) => {
            if (i === index) {
                slide.style.display = 'block';
            } else {
                slide.style.display = 'none';
            }
        });
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % sliders.length;
        showSlide(currentSlide);
    }

    setInterval(nextSlide, slideInterval);
});

/*==================================================================*/

/*화살표 코드*/
document.addEventListener("DOMContentLoaded", function() {
    
    const sliders = document.querySelectorAll('.slider');
    const screens = document.querySelectorAll('.screen-container');
    const sliderLeftArrow = document.querySelector('.left-arrow');
    const sliderRightArrow = document.querySelector('.right-arrow');
    const screenLeftArrow = document.querySelector('.screen-left-arrow');
    const screenRightArrow = document.querySelector('.screen-right-arrow');

    let currentSlide = 0;
    let currentScreen = 0;

    /*슬라이드 페이지 넘기기*/
    function showSlide(index) {
        sliders.forEach((slide, i) => {
            if (i === index) {
                slide.style.display = 'block';
            } else {
                slide.style.display = 'none';
            }
        });
    }


    /*스크린 페이지 넘기기*/
    function showScreen(index) {
        screens.forEach((screen, i) => {
            if (i === index) {
                screen.style.display = 'block';
            } else {
                screen.style.display = 'none';
            }
        });
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % sliders.length;
        showSlide(currentSlide);
    }

    function prevSlide() {
        currentSlide = (currentSlide - 1 + sliders.length) % sliders.length;
        showSlide(currentSlide);
    }

    /*슬라이드 루프*/
    function showNextScreen() {
        if (currentScreen < screens.length - 1) {
            currentScreen++;
            showScreen(currentScreen);
        }
    }

    function showPrevScreen() {
        if (currentScreen > 0) {
            currentScreen--;
            showScreen(currentScreen);
        }
    }

    /*스크린 루프*/
    function showNextScreen() {
        currentScreen = (currentScreen + 1) % screens.length;
        showScreen(currentScreen);
    }
    
    function showPrevScreen() {
        currentScreen = (currentScreen - 1 + screens.length) % screens.length;
        showScreen(currentScreen);
    }
    

    sliderLeftArrow.addEventListener('click', prevSlide);
    sliderRightArrow.addEventListener('click', nextSlide);
    screenLeftArrow.addEventListener('click', showPrevScreen);
    screenRightArrow.addEventListener('click', showNextScreen);

    showSlide(currentSlide); // 페이지 로드 시 첫 번째 슬라이드 보이기
    showScreen(currentScreen); // 페이지 로드 시 첫 번째 스크린 보이기
});