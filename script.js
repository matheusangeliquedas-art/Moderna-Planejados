const menuButton = document.getElementById("menuMobile");

const menu = document.querySelector(".menu");


menuButton.addEventListener("click", () => {

    menu.classList.toggle("active");

});


const menuLinks = document.querySelectorAll(".menu a");


menuLinks.forEach(link => {

    link.addEventListener("click", () => {

        menu.classList.remove("active");

    });

});


const header = document.querySelector(".header");


window.addEventListener("scroll", () => {

    if (window.scrollY > 80) {

        header.style.background = "rgba(25, 21, 17, 0.95)";

        header.style.backdropFilter = "blur(10px)";

    } else {

        header.style.background = "transparent";

        header.style.backdropFilter = "none";

    }

});