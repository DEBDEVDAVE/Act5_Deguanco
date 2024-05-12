document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contact-form');
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        const formData = new FormData(form);
        const name = formData.get('name');
        const email = formData.get('email');
        const message = formData.get('message');
        // Here you can add code to send the form data (e.g., using fetch() to a server)
        console.log('Name:', name);
        console.log('Email:', email);
        console.log('Message:', message);
        alert('Message sent successfully!');
        form.reset();
    });
});
