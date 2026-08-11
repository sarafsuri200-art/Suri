let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

window.onscroll = () => {
    menu.classList.remove('bx-x');
    navbar.classList.remove('active');    
}

const typed = new Typed('.multiple-text', { 
      strings: ['Python Developer', 'Frontend Developer', 'Backend Developer', 'Web Designer' ],
      typeSpeed: 80,
      backSpace: 80,
      backDelay: 1200,
      loop: true,
    });

// Home Instagram
document.getElementById("instagram-btn").addEventListener("click", function (e) {
    e.preventDefault();
    window.open("https://www.instagram.com/ns_suri_07_/", "_blank");
});

// Footer Instagram
document.getElementById("instagram-btn-footer").addEventListener("click", function (e) {
    e.preventDefault();
    window.open("https://www.instagram.com/ns_suri_07_/", "_blank");
});   