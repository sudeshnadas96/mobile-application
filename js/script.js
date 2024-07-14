document.addEventListener('DOMContentLoaded', () => {
    const photoInput = document.getElementById('photo-input');
    const photo = document.getElementById('photo');
    const frameOverlay = document.getElementById('frame-overlay');
    const frames = document.querySelectorAll('.frame');

    // Handle photo input
    photoInput.addEventListener('change', (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                photo.src = e.target.result;
                frameOverlay.classList.remove('hidden'); // Show the frame overlay when a photo is loaded
            };
            reader.readAsDataURL(file);
        }
    });

    // Handle frame selection
    frames.forEach(frame => {
        frame.addEventListener('click', () => {
            frames.forEach(f => f.style.borderColor = '#333'); // Reset frame borders
            frame.style.borderColor = 'red'; // Highlight selected frame
            
            // Apply selected frame overlay
            if (frame.id === 'frame1') {
                frameOverlay.src = 'frames/user_image_frame_1.png';
            } else if (frame.id === 'frame2') {
                frameOverlay.src = 'frames/user_image_frame_2.png';
            } else if (frame.id === 'frame3') {
                frameOverlay.src = 'frames/user_image_frame_3.png';
            } else if (frame.id === 'frame4') {
                frameOverlay.src = 'frames/user_image_frame_4.png'
            }
        });
    });
});
