// main.js

document.addEventListener("selectionchange", onSelectionChange);

const root = document.querySelector('div').shadowRoot;

function onSelectionChange() {
  console.log(getSelection().toString(),root.getSelection().toString(),getSelection() === root.getSelection());
}