const cron = require('node-cron');
// Choose ONE for testing at a time:
// const { sendScheduledEmail } = require('../services/emailService');
const { sendTelegramMessage } = require('../services/telegramService');

cron.schedule('* * * * *', async () => {
    try {
        await  sendTelegramMessage(); // or sendScheduledEmail()
    } catch (err) {
        console.error('Cron failed:', err.message);
    }
});

console.log('Cron job loaded');
