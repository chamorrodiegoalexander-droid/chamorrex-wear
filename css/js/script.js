// Animación suave al hacer scroll

document.querySelectorAll('a[href^="#"]').forEach(link => {

    link.addEventListener("click", function(e){

        e.preventDefault();

        const destino = document.querySelector(
            this.getAttribute("href")
        );

        if(destino){

            destino.scrollIntoView({
                behavior:"smooth"
            });

        }

    });

});


// Mensaje de bienvenida en consola

console.log(
    "Bienvenido a Chamorrex Wear 🚀"
);


// Animación de aparición de productos

const cards = document.querySelectorAll(".card");


const observer = new IntersectionObserver((entradas)=>{

    entradas.forEach(entrada=>{

        if(entrada.isIntersecting){

            entrada.target.style.opacity="1";
            entrada.target.style.transform="translateY(0)";

        }

    });

},{
    threshold:0.2
});


cards.forEach(card=>{

    card.style.opacity="0";
    card.style.transform="translateY(30px)";
    card.style.transition="0.6s";

    observer.observe(card);

});
