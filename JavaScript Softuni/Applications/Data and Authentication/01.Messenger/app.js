import * as api from './data.js';
window.addEventListener('load', () => {

    const messages = document.querySelector('#messages');
    const control = document.querySelector('#controls');
    const [author, content, btnSend, btnRefresh] = control.querySelectorAll('input');

    async function sendMessage() {
        try {
            let data = await api.requests('POST', { author: author.value, content: content.value });
            author.value = '';
            content.value = '';
            refreshMessages();
        } catch (error) {
            console.error(error);
            alert(error.message);
        }

    }

    async function refreshMessages() {
        try {
            let data = await api.requests('GET');
            let arrayMessages = Object.values(data)
            let contentMessages = arrayMessages.reduce((acc, message) => {
                let { author, content } = message;
                acc.push(`${author}: ${content}`);
                return acc;
            }, []);
            messages.value = contentMessages.join('\n');
        } catch (error) {
            console.error(error);
            alert(error.message);
        }

    }

    btnSend.addEventListener('click', sendMessage);
    btnRefresh.addEventListener('click', refreshMessages)










});