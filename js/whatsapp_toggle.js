const whatsappIcon = document.getElementById('whatsapp-icon');
const chatBox = document.getElementById('chat-box');

const emailIcon = document.getElementById('email-icon');
const inbox = document.getElementById('email-inbox');


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


emailIcon.addEventListener('click', function(){
    if(inbox.style.display === 'block'){
        inbox.style.display = 'none';
        emailIcon.innerHTML = '<i class="fa-regular fa-envelope"></i>';
    }
    else{
        inbox.style.display = 'block';
        emailIcon.innerHTML = '<i class="fa-solid fa-xmark"></i>';
    }
})

