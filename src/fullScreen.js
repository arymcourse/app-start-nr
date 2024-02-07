function toggleFullscreen(){
    const container = document.querySelector('#fullScreenElement');
    if( window.innerHeight === screen.height) {
        // browser is fullscreen
        document.exitFullscreen();
        container.style.background = 'white';
        container.style.color = 'black';
    } else {
        container.requestFullscreen().catch((err) => {
            console.error('Error atempting to enable fullscreen:', err);
        });
        container.style.background = 'black';
        container.style.color = 'white';
    }
}

const button = document.querySelector('#toggleFullScreen');
button.addEventListener('click', toggleFullscreen);


//  * Якщо ні, викличте element.requestFullscreen(), щоб ввести контейнер в повноекранний режим.
//  * Обробіть помилки, якщо є такі.
//  * Змініть стилі контейнера при вході та виході з повноекранного режиму (змініть фон та кольори тексту - element.style.background = 'black'; element.style.color = 'white';)