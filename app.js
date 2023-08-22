
const body = document.querySelector("body");
// const linkList = document.querySelector(".link-list-ul");
// const buttons = document.querySelectorAll("button");
// const hamburgerMenu=document.querySelector("#hamburger-menu")
// const pathElements = hamburgerMenu.querySelectorAll("path")
// const search=document.querySelector("#search")
// const circleElement = document.getElementById("myCircle");

let mode="light";

const switchMode = () => {
    console.log("moddayız")
    mode = mode === "light" ? "dark" : "light";
    body.classList.toggle("dark", mode === "dark");
    // linkList.classList.toggle("dark", mode === "dark");
    // buttons.forEach(btn => btn.classList.toggle("dark", mode === "dark"));
    // const newColor = mode === "dark" ? "white" : "black";
    // pathElements.forEach(path=>path.setAttribute("stroke", newColor));
    // search.querySelector("path").setAttribute("stroke",newColor);
    // circleElement.setAttribute("stroke",newColor);

    
};