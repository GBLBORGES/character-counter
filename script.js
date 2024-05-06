const textArea = document.getElementById('text-area')
let [showCaracteres] = document.getElementsByTagName("h2")

let textCaracteres = showCaracteres.innerText

textArea.addEventListener("input", () =>     {
    let value = (textArea.value);
    showCaracteres.innerText = textCaracteres + " " + value.length;
})