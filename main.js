/*============TOGGLE ICON NAVBAR =============*/ 
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
let navLinks = document.querySelectorAll('.navbar a');  // Deklarasi sekali saja

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

// Remove menu navbar when clicking a link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        menuIcon.classList.remove('bx-x');
        navbar.classList.remove('active');
    });
});

/*=============SCROLL SECTION ======================*/
let sections = document.querySelectorAll('section');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id +']').classList.add('active');
            });
        };
    });
/*=================STICKY NAVBAR================*/
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);

/*================REMOVE TOGGLE ICON NAVBAR===============*/ 
// Perbaiki typo 'navbaar' menjadi 'navbar'
// Dan pisahkan class yang memiliki spasi
menuIcon.classList.remove('fa-solid');
menuIcon.classList.remove('fa-x');
navbar.classList.remove('active');
};

/*================SCROLL REVEAL===============*/
ScrollReveal({ 
    distance: '80px',
    duration: 2000,
    delay: 200,
    }); 

    ScrollReveal().reveal('.home-content, heading', { origin: 'top' });
    ScrollReveal().reveal('.home-img, .services-container, portofolio-box, contact form', { origin: 'bottom' });
    ScrollReveal().reveal('.home-contact h1, .about-img', { origin: 'left' });
    ScrollReveal().reveal('.home-contact p, .about-content', { origin: 'right' });

    /*=============typed js=============*/
const typed = new Typed('.multiple-text', {
    strings: ['Frontend Developer', 'Web Developer', 'Youtuber'],
    typeSpeed: 70,
    backSpeed: 70,
    backDelay: 1000,
    loop: true,
});

// Inisialisasi EmailJS
(function(){
    emailjs.init("bkQg3iitgYMlvJvB0"); // Ganti dengan public key EmailJS Anda
})();

// Handle contact form submission
const contactForm = document.getElementById('contact-form');

contactForm.addEventListener('submit', function(e) {
    e.preventDefault();

    // Show loading indicator
    Swal.fire({
        title: 'Sending...',
        text: 'Please wait',
        allowOutsideClick: false,
        showConfirmButton: false,
        willOpen: () => {
            Swal.showLoading();
        },
    });

    // Get form data
    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        phone: document.getElementById('phone').value,
        subject: document.getElementById('subject').value,
        message: document.getElementById('message').value
    };

    // Send email using EmailJS
    emailjs.send('service_cgb3u7a', 'template_hmt529f', formData)
        .then(function(response) {
            Swal.fire({
                icon: 'success',
                title: 'Success!',
                text: 'Your message has been sent successfully!',
                showConfirmButton: false,
                timer: 1500
            });
            contactForm.reset();
        }, function(error) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Failed to send message. Please try again.',
            });
        });
});
