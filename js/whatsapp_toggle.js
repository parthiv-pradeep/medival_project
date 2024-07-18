const whatsappIcon = document.getElementById('whatsapp-icon');
const chatBox = document.getElementById('chat-box');
whatsappIcon.addEventListener('click', function() {
    if (chatBox.style.display === 'block'){
        chatBox.style.display = 'none';
        whatsappIcon.innerHTML = '<i class="fa-brands fa-whatsapp"></i>';
    }
    else{
        chatBox.style.display = 'block';
        whatsappIcon.innerHTML = '<i class="fa-solid fa-xmark"></i>';
    }
});
