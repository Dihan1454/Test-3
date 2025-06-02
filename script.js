document.addEventListener("DOMContentLoaded", () => {
    const services = document.querySelectorAll('.service');
    const observerOptions = {
        threshold: 0.5 
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active'); 
                document.body.classList.add('dimmed'); 
            } else {
                entry.target.classList.remove('active');
                document.body.classList.remove('dimmed'); 
            }
        });
    }, observerOptions);

    services.forEach(service => observer.observe(service));
});

document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("form");
    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    const messageInput = document.getElementById("message");

    form.addEventListener("submit", (event) => {
        let isValid = true;

      
        if (nameInput.value.trim() === "") {
            alert("Name is required.");
            isValid = false;
        }

      
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(emailInput.value.trim())) {
            alert("Please enter a valid email address.");
            isValid = false;
        }

      
        if (messageInput.value.trim() === "") {
            alert("Message is required.");
            isValid = false;
        }

      
        if (!isValid) {
            event.preventDefault();
        }
    });
});