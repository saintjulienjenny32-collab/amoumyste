
function createFlower() {
    const flower = document.createElement("div");
    flower.classList.add("flower");
    flower.style.left = Math.random() * 100 + "vw";
    flower.style.animationDuration = 3 + Math.random() * 5 + "s";
    flower.style.opacity = Math.random();
    flower.style.fontSize = Math.random() * 10 + 15 + "px";
    flower.innerText = "🌸";
    document.body.appendChild(flower);

    setTimeout(() => {
        flower.remove();
    }, 8000);
}
setInterval(createFlower, 500);
