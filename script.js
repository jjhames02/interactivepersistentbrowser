const text = document.getElementById("text");
const div = document.getElementById("div");
const buttonAdd = document.getElementById("buttonAdd");
const buttonRemoveLast = document.getElementById("buttonRemoveLast");
const buttonClear = document.getElementById("buttonClear");

function loadLocal() {
    const localLength = localStorage.length;
    for (let i = 1; i <= localLength; i++) {
        const newPara = document.createElement("p");
        newPara.innerText = localStorage.getItem(i);
        newPara.className = "paraClass";
        div.appendChild(newPara);
    }
}

loadLocal();

function addPara() {    
    if (text.value != "") {
        const newPara = document.createElement("p");
        newPara.innerText = text.value;
        newPara.className = "paraClass";
        div.appendChild(newPara);        
        const paragraphs = document.getElementsByClassName("paraClass");
        const keyNum = paragraphs.length;        
        localStorage.setItem(keyNum, newPara.innerText);
    } 
    text.value = "";
}

buttonAdd.addEventListener("click", addPara);

function removeLast() {
    const paragraphs = document.getElementsByClassName("paraClass");
    const keyNum = paragraphs.length;
    localStorage.removeItem(keyNum);    
    if (paragraphs.length > 0) {
        div.removeChild(paragraphs[paragraphs.length-1]);        
    }
}

buttonRemoveLast.addEventListener("click", removeLast);

function clearAll() {
    localStorage.clear();
    const paragraphs = document.getElementsByClassName("paraClass");
    const paraLength = paragraphs.length;
    for (let i = 0; i < paraLength; i++) {
        div.removeChild(paragraphs[0]);        
    }
}

buttonClear.addEventListener("click", clearAll);

