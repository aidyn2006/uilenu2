document.addEventListener('DOMContentLoaded', function() {
    const countdownDate = new Date("2024-08-08T23:59:59").getTime();
    const interval = setInterval(function() {
        const now = new Date().getTime();
        const distance = countdownDate - now;

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        document.getElementById("days").innerText = days;
        document.getElementById("hours").innerText = hours;
        document.getElementById("minutes").innerText = minutes;
        document.getElementById("seconds").innerText = seconds;

        if (distance < 0) {
            clearInterval(interval);
            document.getElementById("timer").innerHTML = "EXPIRED";
        }
    }, 1000);

    const playPauseButton = document.getElementById('playPauseButton');
    const audio = document.getElementById('audio');

    playPauseButton.addEventListener('click', function() {
        if (audio.paused) {
            audio.play().catch((error) => {
                console.error('Error playing the audio:', error);
            });
            playPauseButton.classList.remove('paused');
            playPauseButton.classList.add('playing');
        } else {
            audio.pause();
            playPauseButton.classList.remove('playing');
            playPauseButton.classList.add('paused');
        }
    });

    // Ensure audio starts on the first click to comply with autoplay policies
    document.addEventListener('click', function() {
        if (audio.paused) {
            audio.play().catch((error) => {
                console.error('Error playing the audio on click:', error);
            });
        }
    }, { once: true });
});
img