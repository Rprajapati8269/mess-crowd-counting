// Function to toggle the visibility of the profile section
function toggleProfile() {
    const profileSection = document.getElementById('profile');
    if (profileSection.classList.contains('hidden')) {
        profileSection.classList.remove('hidden');
    } else {
        profileSection.classList.add('hidden');
    }
}

// Simulate crowd counting data
function getRandomCount(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function updateCount() {
    const countDisplay = document.getElementById('countDisplay');
    const randomCount = getRandomCount(50, 200); // Simulated count range
    countDisplay.innerText = randomCount;
}

function startDemo() {
    updateCount();
    alert('Demo started! Scroll down to see the current crowd count.');
}
