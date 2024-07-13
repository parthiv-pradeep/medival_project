document.addEventListener("DOMContentLoaded", () => {
  const accordians = document.querySelectorAll('.accordian');

  accordians.forEach(accordian => {
    const icon = accordian.querySelector('.icon');
    const answer = accordian.querySelector('.answer');

    // Ensure the initial state is correct
    if (!icon.classList.contains('active')) {
      answer.style.maxHeight = null;
    } else {
      answer.style.maxHeight = answer.scrollHeight + 'px';
    }

    accordian.addEventListener('click', () => {
      // Close all other accordions
      accordians.forEach(item => {
        if (item !== accordian) {
          const itemIcon = item.querySelector('.icon');
          const itemAnswer = item.querySelector('.answer');
          itemIcon.classList.remove('active');
          itemAnswer.style.maxHeight = null;
        }
      });

      // Toggle the clicked accordion
      if (icon.classList.contains('active')) {
        icon.classList.remove('active');
        answer.style.maxHeight = null;
      } else {
        icon.classList.add('active');
        answer.style.maxHeight = answer.scrollHeight + 'px';
      }
    });
  });
});
