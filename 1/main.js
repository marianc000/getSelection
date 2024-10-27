// main.js

document.addEventListener("selectionchange", onSelectionChange);

function onSelectionChange() {
  console.log(getSelection().toString());
}