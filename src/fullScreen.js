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
