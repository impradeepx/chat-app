let currentUser = 'User 1';

function sendMessage() {
    const userInput = document.getElementById('user-input');
    const message = userInput.value.trim();

    if (message !== '') {
        const chatBox = document.getElementById('chat-box');
        const newMessage = document.createElement('div');
        newMessage.textContent = `${currentUser}: ${message}`;
        newMessage.classList.add('message', `${currentUser.toLowerCase()}-message`);
        chatBox.appendChild(newMessage);

        // Scroll to bottom
        chatBox.scrollTop = chatBox.scrollHeight;

        // Clear input
        userInput.value = '';
    }
}

function switchUser() {
    currentUser = currentUser === 'User 1' ? 'User 2' : 'User 1';
}

// Simulate bot reply
setTimeout(sendBotReply, 1000);

function sendBotReply() {
    const chatBox = document.getElementById('chat-box');
    const newMessage = document.createElement('div');
    newMessage.textContent = 'This is a bot reply.';
    newMessage.classList.add('message', 'bot-message');
    chatBox.appendChild(newMessage);

    // Scroll to bottom
    chatBox.scrollTop = chatBox.scrollHeight;
}
