document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Collect the form data
    const formData = {
        to_email: 'sales@medieval.ae', // Client's email
        from_name: event.target.from_name.value,
        from_email: event.target.from_email.value,
        reply_to: event.target.from_email.value,
        phone: event.target.phone.value,
        query: event.target.query.value
    };

    // Send the form data using EmailJS
    emailjs.send("service_tj20qpq", "template_w7dz8og", formData)
        .then(function(response) {
            console.log('SUCCESS!', response.status, response.text);
            alert('Your message has been sent successfully!');
        }, function(error) {
            console.log('FAILED...', error);
            alert('Failed to send your message. Please try again later.');
        });
});