// Replace 'YOUR_API_KEY' with your actual GPT-3 API key
const API_KEY = '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';

async function sendMessage() {
    const userMessageInput = document.getElementById("user-message");
    const userMessage = userMessageInput.value;

    if (userMessage !== "") {
        appendMessage(userMessage, "user");
        userMessageInput.value = "";

        try {
            const response = await axios.post('https://api.openai.com/v1/engines/davinci/completions', {
                prompt: userMessage,
                max_tokens: 50
            }, {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${API_KEY}`
                }
            });

            const botResponse = response.data.choices[0].text;
            appendMessage(botResponse, "bot");
        } catch (error) {
            console.log(error);
        }
    }
}