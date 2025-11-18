// Menu Hamburguer //

function menuExibir(){
    let menuMobile = document.querySelector('.mobile-menu');
    if (menuMobile.classList.contains('open')){
        menuMobile.classList.remove('open');

    }
    else{
        menuMobile.classList.add('open')
    }
}

// Página FAQ // 

const accordions = document.querySelectorAll(".accordion-header");

accordions.forEach(header => {
    header.addEventListener("click", () => {

        const body = header.nextElementSibling;

        header.classList.toggle("active");

        if (header.classList.contains("active")) {
            body.style.maxHeight = body.scrollHeight + "px";
        } else {
            body.style.maxHeight = "0px";
        }

    });
});
