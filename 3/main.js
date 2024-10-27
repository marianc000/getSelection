// main.js

document.addEventListener("selectionchange", onSelectionChange);

const root = document.querySelector('div').shadowRoot;

function onSelectionChange() {
  [ window,root].forEach(o => console.log(data(o.getSelection()), o.constructor.name));
}

function data(s) {
  const { startContainer, startOffset,endContainer, endOffset  } = s.rangeCount?s.getRangeAt(0):{};

  return [s.toString(), startContainer, startOffset,endContainer, endOffset];
}
