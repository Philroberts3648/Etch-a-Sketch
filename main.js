const container = document.querySelector(".container");
container.setAttribute("style", "display: flex; flex-wrap: wrap; justify-content: center; align-items: center; height:800px; width:800px;");

const main = document.createElement("div");
const button = document.createElement("button");

main.classList.toggle("main");
main.append(button, container);
document.querySelector("body").append(main);

button.textContent = "no of squares";

button.addEventListener("click", () => {
    const numb = Number(prompt("Please enter the number of square"));
    
    container.innerHTML = "";

    const squareNumber = numb * numb;
    const size = 800 / numb;

    for (let i = 0; i < squareNumber; i++) {
        const div = document.createElement("div");
        div.setAttribute("style", "border:1px solid black;");
        div.style.height = `${size}px`;
        div.style.width = `${size}px`;
        
        div.addEventListener("mouseover", () => {
            div.style.backgroundColor = "red";
        });

        div.addEventListener("mouseout", () => {
            div.style.backgroundColor = "";
        });

        container.append(div);
    }
});
