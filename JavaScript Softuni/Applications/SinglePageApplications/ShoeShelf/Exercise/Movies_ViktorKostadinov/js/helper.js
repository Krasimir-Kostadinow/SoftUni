export default function notificationBox(content, typeBoxEl) {
    typeBoxEl.textContent = content;
    const boxView = typeBoxEl.parentElement;
    boxView.style.display = 'block';
    setTimeout(() => {
        typeBoxEl.textContent = '';
        boxView.style.display = 'none';
    }, 4000)
};