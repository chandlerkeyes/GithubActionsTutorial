export default class Pencil {
  constructor(durability = 50, length = 50, eraserDurability) {
    this.durability = durability;
    this.maxDurability = durability;
    this.length = length;
    this.eraserDurability = eraserDurability
  }

  getPencilDurability() {
    return this.durability;
  }

  getPencilLength() {
    return this.length;
  }

  getEraserDurability() {
    return this.eraserDurability;
  }

  updatePencilDurability(character) {
    if (character !== ' ') {
      character === character.toLowerCase() ? this.durability -= 1 : this.durability -= 2;
    }
  }

  updatePencilLength() {
    this.length -= 1;
  }

  writeOnPaper(paper, textToWrite) {
    for (let i = 0; i < textToWrite.length; i++) {
      this.updatePencilDurability(textToWrite.charAt(i));
      this.durability >= 0 ? paper += textToWrite.charAt(i) : paper += " ";
    }

    return paper;
  }

  sharpen() {
    if (this.length) {
      this.updatePencilLength();
      this.durability = this.maxDurability;
    }
  }

  erase(paper, text) {
    if (paper.lastIndexOf(text) < 0) {
      return;
    }

    const charactersOnPaper = paper.split('');
    const indexOfWord = paper.lastIndexOf(text) + text.length - 1;

    for (let i = 0; i < text.length; i++) {
      if (charactersOnPaper[indexOfWord - i] !== " ") {
        this.eraserDurability -= 1;
      }
      charactersOnPaper[indexOfWord - i] = " ";
    }

    return charactersOnPaper.join('');
  }

  edit(paper, textToAdd) {
    if (paper.lastIndexOf("  ") < 0) {
      return;
    }

    const charactersOnPaper = paper.split('');
    const indexOfBlankSpace = paper.indexOf("  ") + 1;

    for (let i = 0; i < textToAdd.length; i++) {
      if (charactersOnPaper[indexOfBlankSpace + i] === " ") {
        charactersOnPaper[indexOfBlankSpace + i] = textToAdd.charAt(i);
      } else {
        charactersOnPaper[indexOfBlankSpace + i] = "@";
      }
    }

    return charactersOnPaper.join('');
  }
};
