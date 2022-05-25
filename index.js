
const card = document.querySelector(".card");
const container = document.querySelector(".container");
const sneaker = document.querySelector(".sneaker img");
const title = document.querySelector(".details h2");
const desc = document.querySelector(".desc");
const sizes = document.querySelector(".sizes");
const buy = document.querySelector(".buy");

container.addEventListener("mousemove", (e) => {
    const x = (window.innerWidth / 2 - e.pageX)/10 ;
    const y = (window.innerHeight / 2 - e.pageY)/10 ;
    console.log(card.style);
    card.style.transform = `rotateX(${y}deg) rotateY(${x}deg)`;
});

container.addEventListener("mouseenter", (e) =>{
    card.style.transition = "none";
    sneaker.style.transform = "translateZ(70px) scale(0.8)";
    sneaker.style.filter = "drop-shadow(30px 30px 20px black)";
    title.style.transform = "translateZ(70px) scale(0.8)"
    title.style.filter = "drop-shadow(5px 5px 10px black)"
    desc.style.transform = "translateZ(70px) scale(0.8)"
    desc.style.filter = "drop-shadow(5px 5px 10px black)"
    sizes.style.transform = "translateZ(70px) scale(0.8)"
    buy.style.transform = "translateZ(70px) scale(0.8)"
});

container.addEventListener("mouseleave", (e) => {
    card.style.transition = "all 1s";
    card.style.transform = "rotateX(0) rotateY(0)";
    sneaker.style.transform = "translateZ(0) rotateZ(0)";
    sneaker.style.filter = "drop-shadow(30px 30px 20px rgb(67, 62, 62))";
    title.style.transform = "translateZ(0)";
    title.style.filter = "none";
    desc.style.transform = "translateZ(0)";
    desc.style.filter = "none";
    sizes.style.transform = "translateZ(0)";
    buy.style.transform = "translateZ(0)";
});