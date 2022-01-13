// const inputMain = document.querySelector("#mainInput")
const para = document.querySelector("#para")

const addInput = (val) => {
    // inputMain.value += val;
    para.textContent += val;
}

const deleteText = () => {

    const p = document.querySelector("#para")
    t = p.textContent;
    l = t.length;
    t = t.substring(0,t.length - 1);

    p.textContent = t;
}