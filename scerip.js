// script.js
document.getElementById('send-btn').addEventListener('click', function() {
    const userInput = document.getElementById('chat-input').value;
    if (userInput.trim() === "") return;

    const chatOutput = document.getElementById('chat-output');
    const userMessage = document.createElement('div');
    userMessage.className = 'user-message';
    userMessage.textContent = userInput;
    chatOutput.appendChild(userMessage);

    fetch('http://127.0.0.1:5000/chat', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ message: userInput })
    })
    .then(response => response.json())
    .then(data => {
        const botMessage = document.createElement('div');
        botMessage.className = 'bot-message';
        botMessage.textContent = data.reply;
        chatOutput.appendChild(botMessage);
    })
    .catch(error => console.error('Error:', error));

    document.getElementById('chat-input').value = '';
});
