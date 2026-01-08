const axios = require('axios');

async function sendTelegramMessage() {
    const token = process.env.TELEGRAM_TOKEN;
    const chatId = process.env.TELEGRAM_CHAT_ID;

    // ✅ Correct endpoint
    const url = `https://api.telegram.org/bot${token}/sendMessage`;

    await axios.post(url, {
        chat_id: chatId,
        text: 'Hello Praise, how are you'
    });

    console.log('Telegram message sent');
}

module.exports = { sendTelegramMessage };
