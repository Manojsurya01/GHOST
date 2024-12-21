// Select DOM elements
const messagesDiv = document.getElementById('messages');
const userInput = document.getElementById('user-input');
const sendBtn = document.getElementById('send-btn');

// Predefined bot responses for common questions
const botResponses = {
    "hello": "Hi there! I'm Ghost. How can I assist you today?",
    "how are you": "I'm just a bot, but I'm here to help you!",
    "what is your name": "I'm Ghost, your virtual assistant.",
    "tell me a joke": "Why don't skeletons fight each other? They don't have the guts!",
    "help": "Sure! Please let me know what you need help with.",
    "bye": "Goodbye! Have a great day!"
};

// Default response for unrecognized inputs
const defaultResponse = "I'm sorry, I don't understand that. Can you rephrase?";

// Function to add a message to the chat
function addMessage(content, sender) {
    const message = document.createElement('div');
    message.classList.add('message', sender);
    message.innerText = content;
    messagesDiv.appendChild(message);

    // Scroll to the bottom
    messagesDiv.scrollTop = messagesDiv.scrollHeight;
}

// Function to handle bot reply
function getBotResponse(userMessage) {
    const message = userMessage.toLowerCase(); // Convert to lowercase for easy matching
    return botResponses[message] || defaultResponse;
}

// Function to handle user input
function handleUserInput() {
    const userMessage = userInput.value.trim();
    if (userMessage !== "") {
        // Add user's message
        addMessage(userMessage, 'user');
        userInput.value = "";

        // Bot response
        setTimeout(() => {
            const botMessage = getBotResponse(userMessage);
            addMessage(botMessage, 'bot');
        }, 1000); // Simulate response delay
    }
}

// Event listener for send button
sendBtn.addEventListener('click', handleUserInput);

// Event listener for Enter key
userInput.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
        handleUserInput();
    }
});

