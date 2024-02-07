
const mainElement = document.querySelector('main#main');

if (mainElement) {
    mainElement.remove();
}

let newHeader = document.createElement("H1");
newHeader.id = ("victory");
newHeader.innerHTML = ("Kai is the champion");
