let asideButton = document.querySelector(".aside-button");
let sidebar = document.getElementById("sidebar");
let closeSidebar = document.getElementById("closeSidebar");


let educationButton = document.getElementById("education-tab")
let trainingButton = document.getElementById("training-tab")
let certificationButton = document.getElementById("certification-tab")
let worksButton = document.getElementById("works-tab")

let educationTab = document.getElementById("education");
let trainingTab = document.getElementById("training");
let certificationTab = document.getElementById("certification");
let worksTab = document.getElementById("works");

let toggleMenuItem = document.querySelector(".list-menu");
let exitButton = document.querySelector(".exit-button");
let openMenu = document.querySelector(".open-menu");
let closeMenu = document.querySelector(".exit-menu");

let toggleMenu = () => {
    toggleMenuItem.style.display = "flex";
    exitButton.style.display = "flex";
    openMenu.style.display = "none";
}
let exitMenu = () => {
    toggleMenuItem.style.display = null;
    exitButton.style.display = null;
    openMenu.style.display = null;
}
asideButton.addEventListener("click", () => {
    sidebar.classList.remove("hidden");
});
closeSidebar.addEventListener("click", () => {
    sidebar.classList.add("hidden");
});

let tabExp = (exp) => {
    let content = ['education', 'training', 'certification', 'works'];
    for (let i = 0; i < content.length; i++) {
        if (exp === content[i]) {
            eval(`${content[i]}Button`).classList.add("tab-active");
            eval(`${content[i]}Tab`).classList.remove("content", "hidden");
        }
        else {
            eval(`${content[i]}Button`).classList.remove("tab-active");
            eval(`${content[i]}Tab`).classList.add("content", "hidden");
        }
        
    }
    
}