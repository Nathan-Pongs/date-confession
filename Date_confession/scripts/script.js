function loadPage(page) {
    fetch(page)
        .then(response => response.text())
        .then(data => {
            document.getElementById('content').innerHTML = data;
        })
        .catch(err => console.error('Error loading page:', err));
}

function moveButton() {
    const noButton = document.querySelector('.noBtn');
    const container = document.getElementById('page1');

    const containerRect = container.getBoundingClientRect();
    const buttonRect = noButton.getBoundingClientRect();

    const maxX = containerRect.width - buttonRect.width;
    const maxY = containerRect.height - buttonRect.height;

    const randomX = Math.random() * maxX;
    const randomY = Math.random() * maxY;

    noButton.style.left = `${randomX}px`;
    noButton.style.top = `${randomY}px`;
}

function handleButtonClick(action) {
    const layout = document.getElementById('page1');
    if (layout) {
        layout.innerHTML = '';
        const text2 = document.createElement('h1');
        text2.textContent = "Let's go on a date with me baby \u{1F618}";
        layout.appendChild(text2);

        const dateButton = document.createElement('button');
        dateButton.textContent = "Click me \u2728";
        dateButton.classList.add('link-button');
        layout.appendChild(dateButton);

        dateButton.onclick = () => {
            layout.innerHTML = "";
            const text3 = document.createElement('h1');
            text3.textContent = "Pick a date please, baby \u{1F970}";
            layout.appendChild(text3);

            // Call the datePicker function to add date and time inputs
            datePicker(layout);
        };
    }
}

function datePicker(container) {
    const layout = document.getElementById('page1');
    if (container) {
        // Create a label for the date input
        const dateLabel = document.createElement('label');
        dateLabel.textContent = 'Pick a Date:';
        dateLabel.htmlFor = 'dateInput';
        //class date-label
        dateLabel.classList.add('label');
        container.appendChild(dateLabel);

        // Create the date input
        const dateInput = document.createElement('input');
        dateInput.type = 'date';
        dateInput.id = 'dateInput';
        dateInput.classList.add('date-input');
        container.appendChild(dateInput);

        // Create a label for the time input
        const timeLabel = document.createElement('label');
        timeLabel.textContent = 'Pick a Time:';
        timeLabel.htmlFor = 'timeInput';
        timeLabel.classList.add('label');
        container.appendChild(timeLabel);

        // Create the time input
        const timeInput = document.createElement('input');
        timeInput.type = 'time';
        timeInput.id = 'timeInput';
        timeInput.classList.add('time-input');
        container.appendChild(timeInput);

        // Create a label for the time input
        const mapLabel = document.createElement('label');
        mapLabel.textContent = 'Location:';
        mapLabel.classList.add('label');
        container.appendChild(mapLabel);

        // Create map
        const map = document.createElement('iframe');
        map.src = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d391565.99711819965!2d116.06780423565439!3d39.938943581889234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x35f05296e7142cb9%3A0xb9625620af0fa98a!2sBeijing%2C%20China!5e0!3m2!1sen!2sus!4v1731837727968!5m2!1sen!2sus" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade';
        map.classList.add('map');
        container.appendChild(map);

        // Create a submit button
        const submitButton = document.createElement('button');
        submitButton.textContent = 'Submit';
        submitButton.classList.add('date-picker-button');
        submitButton.onclick = () => {
            const selectedDate = dateInput.value;
            const selectedTime = timeInput.value;

            if (selectedDate && selectedTime) {
                // alert(`You selected ${selectedDate} at ${selectedTime}.`);
                handleSubmitClick(layout, selectedDate, selectedTime);

            } else {
                alert('Please select both a date and a time.');
            }
        };
        container.appendChild(submitButton);
    } else {
        console.error('Container for datePicker not found.');
    }
}

function handleSubmitClick(layout, selectedDate, selectedTime) {
    if (layout) {
        layout.innerHTML = ''; // Clear the layout
        const confirmationMessage = document.createElement('h1');
        confirmationMessage.textContent = `See you there on ${selectedDate} at ${selectedTime} in Beijing, China baby \u{1F61A} \u{1F92D}`;
        layout.appendChild(confirmationMessage);
    }
}

function cloneHeart() {
    const container = document.getElementById('page1');
    
    // Create a new heart element
    const heart = document.createElement('span');
    heart.textContent = '❤️'; // Heart emoji
    heart.className = 'heart';

    // Generate random positions and sizes
    const containerRect = container.getBoundingClientRect();
    const randomX = Math.random() * containerRect.width;
    const randomY = Math.random() * containerRect.height;

    heart.style.left = `${randomX}px`;
    heart.style.top = `${randomY}px`;
    heart.style.fontSize = `${Math.random() * 30 + 10}px`; // Random size
    heart.style.color = getRandomColor(); // Random color

    container.appendChild(heart);

    // Remove the heart after 5 seconds
    setTimeout(() => {
        container.removeChild(heart);
    }, 5000);
}

// Function to generate random colors
function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

// Call the cloneHeart function every second
setInterval(cloneHeart, 1000);
