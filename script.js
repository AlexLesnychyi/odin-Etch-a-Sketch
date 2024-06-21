let container = document.querySelector("#container");
const newGridBtn = document.querySelector("#new-grid-btn");
function getRandomColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}
function createGrid(num) {
     container.innerHTML = '';

    const cellSize = Math.floor(960 / num);

    for (let i = 0; i < num; i++) {
        for (let j = 0; j < num; j++) {
        let gridDiv = document.createElement("div");
            gridDiv.className = "grid-item";
            gridDiv.style.height = `${cellSize}px`;
            gridDiv.style.width = `${cellSize}px`;
            gridDiv.dataset.opacity = 1;

            let bgColor = getRandomColor()
            gridDiv.style.backgroundColor = bgColor;

               gridDiv.addEventListener("mouseenter", () => {
                let currentOpacity = parseFloat(gridDiv.dataset.opacity);
                if (currentOpacity > 0) {
                    currentOpacity -= 0.1;
                    gridDiv.dataset.opacity = currentOpacity;
                    gridDiv.style.opacity = currentOpacity;
                }
            });
        container.appendChild(gridDiv);
            console.log("added");
        }
    }

}

newGridBtn.addEventListener("click", () => {
    let num;
    do {
        num = parseInt(prompt("Enter the number of squares per side (maximum 100):"), 10);
    } while (isNaN(num) || num < 1 || num > 100);

    createGrid(num);
});