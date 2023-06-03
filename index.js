// Define possible bot responses
const botResponses = [
    "Hello!",
    "How can I assist you today?",
    "I'm sorry, I don't have the answer to that.",
    "Please provide more information.",
    "Thank you!",
];

function getRandomBotResponse() {
    const randomIndex = Math.floor(Math.random() * botResponses.length);
    return botResponses[randomIndex];
}

function sendMessage() {
    const userMessageInput = document.getElementById("user-message");
    const userMessage = userMessageInput.value;

    if (userMessage !== "") {
        appendMessage(userMessage, "user");
        userMessageInput.value = "";

        setTimeout(() => {
            const botResponse = getRandomBotResponse();
            appendMessage(botResponse, "bot");
        }, 500);
    }
}

function appendMessage(message, sender) {
    const chatLog = document.getElementById("chat-log");
    const messageElement = document.createElement("div");
    messageElement.classList.add("message", sender);
    messageElement.textContent = message;
    chatLog.appendChild(messageElement);
    chatLog.scrollTop = chatLog.scrollHeight;
}