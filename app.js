const inputMain = document.querySelector("#mainInput")

const addInput = (val) => {
    inputMain.value += val;
}

const deleteText = () => {
    input = document.querySelector("#mainInput")
    text = input.value;
    // console.log(text)
    len = text.length;
    // console.log(len)
    text = text.substring(0,text.length - 1);
    // console.log(text)
    inputMain.value = text;
}