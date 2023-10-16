const counters = document.querySelectorAll('.counter');

counters.forEach((counter) => {
    const updateCount = () => {
        const target = +counter.getAttribute('data-count');
        const count = +counter.innerText;

        const increment = target / 200;

        if (count < target) {
            counter.innerText = Math.ceil(count + increment);
            setTimeout(updateCount, 1);
        } else {
            counter.innerText = target;
        }
    };

    updateCount();
});

const roomMappings = {
    '1': 'room1.html',
    '2': 'room2.html',
};

function searchRoom() {
    // Get the room number entered by the user
    const roomNumber = document.getElementById('roomNumberInput').value;
    const searchResult = document.getElementById('search-result');

    // Check if the room number exists in the mappings
    if (roomMappings[roomNumber]) {
        // Display instructions to the user
        searchResult.innerHTML = `You are looking for Room ${roomNumber}. Go to <a href="${roomMappings[roomNumber]}">Room ${roomNumber}</a>.`;
    } else {
        // Display a message if the room is not found
        searchResult.innerHTML = 'Room not found. Please enter a valid room number.';
    }
}
