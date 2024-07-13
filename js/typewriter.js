document.addEventListener("DOMContentLoaded", () => {
    const placeholderTexts = [
      "Tell us what you're looking for",
      "What's on your mind?",
      "How can we assist you today?",
      "Share your thoughts with us",
      "What can we do for you?"
    ];
  
    const textArea = document.getElementById('query');
    let currentIndex = 0;
    let currentText = '';
    let isDeleting = false;
    let charIndex = 0;
  
    function type() {
      if (currentIndex >= placeholderTexts.length) {
        currentIndex = 0;
      }
  
      const fullText = placeholderTexts[currentIndex];
  
      if (isDeleting) {
        currentText = fullText.substring(0, charIndex - 1);
      } else {
        currentText = fullText.substring(0, charIndex + 1);
      }
  
      textArea.setAttribute('placeholder', currentText);
  
      if (!isDeleting && charIndex === fullText.length) {
        setTimeout(() => isDeleting = true, 2000);
      } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        currentIndex++;
      }
  
      charIndex = isDeleting ? charIndex - 1 : charIndex + 1;
  
      const typingSpeed = isDeleting ? 100 : 150;
      const nextTypeSpeed = !isDeleting && charIndex === fullText.length ? 2000 : typingSpeed;
  
      setTimeout(type, nextTypeSpeed);
    }
  
    type();
  });
  