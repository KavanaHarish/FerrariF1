const hero = document.getElementById("hero");
const car = document.getElementById("car");
const text = document.getElementById("ferrariText");

hero.addEventListener("mousemove", (e) => {

  const x = (window.innerWidth / 2 - e.pageX) / 40;
  const y = (window.innerHeight / 2 - e.pageY) / 40;

  car.style.transform = `translate(${x}px, ${y}px) rotateY(${x}deg)`;

  text.style.transform = `translate(${x/2}px, ${y/2}px)`;

});