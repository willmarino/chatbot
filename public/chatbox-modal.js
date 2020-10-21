const chatButton = document.getElementById('chat-button');
const wrapper = document.getElementById('message-window-wrapper');

chatButton.addEventListener('click', () => {
    wrapper.classList.toggle("toggle-display");
})
