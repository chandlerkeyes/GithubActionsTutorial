import { expect } from "chai"
import Pencil from "../src/";

describe("Pencil Durability Kata Tests", () => {
  describe("Writing", () => {
    it("Writes Hello World! on a blank piece of paper", () => {
      const pencil = new Pencil();
      const result = pencil.writeOnPaper("", "Hello World!");

      expect(result).to.equal("Hello World!");
    });

    it("Writes Goodbye! on a blank piece of paper", () => {
      const pencil = new Pencil();
      const result = pencil.writeOnPaper("", "Goodbye!");

      expect(result).to.equal("Goodbye!");
    });

    it("Writes text to paper that already has text written on it", () => {
      const pencil = new Pencil();
      const paper = "Hi, my name is Chandler ";
      const result = pencil.writeOnPaper(paper, "and I love to code!");

      expect(result).to.equal("Hi, my name is Chandler and I love to code!");
    });

    it("Decreases pencil durability by 5 after writing 'hello' with a durability of 50", () => {
      const pencil = new Pencil(50);
      const paper = '';

      pencil.writeOnPaper(paper, "hello")

      const result = pencil.getPencilDurability();

      expect(result).to.equal(45);
    });

    it("Decreases pencil durability by 10 after writing 'hello world' with a durability of 50", () => {
      const pencil = new Pencil(50);
      const paper = '';

      pencil.writeOnPaper(paper, "hello world");

      const result = pencil.getPencilDurability();

      expect(result).to.equal(40);
    });

    it("Decreases pencil durability by 9 after writing 'Chandler' with a durability of 50", () => {
      const pencil = new Pencil(50);
      const paper = '';

      pencil.writeOnPaper(paper, "Chandler");

      const result = pencil.getPencilDurability();

      expect(result).to.equal(41);
    });

    it("Writes CHANDLER with a durability of 10 and returns 'CHAND   '", () => {
      const pencil = new Pencil(10);
      const paper = '';

      const result = pencil.writeOnPaper(paper, "CHANDLER");

      expect(result).to.equal("CHAND   ");
    });
  })

  describe("Sharpening", () => {
    it("Resets the durability of the pencil to 10 after sharpening pencil", () => {
      const pencil = new Pencil(10);
      const paper = '';

      pencil.writeOnPaper(paper, "Hi!");
      pencil.sharpen();

      const result = pencil.getPencilDurability();

      expect(result).to.equal(10);
    });

    it("Resets the durability of the pencil to 20 after sharpening pencil", () => {
      const pencil = new Pencil(20);
      const paper = '';

      pencil.writeOnPaper(paper, "Hello again!");
      pencil.sharpen();

      const result = pencil.getPencilDurability();

      expect(result).to.equal(20);
    });

    it("Decreases length of pencil by 1 after being sharpened with an initial length of 50", () => {
      const pencil = new Pencil(50, 50);

      pencil.sharpen();

      const result = pencil.getPencilLength();

      expect(result).to.equal(49);
    });

    it("Decreases length by 5 after being sharpened 5 times with an initial length of 50", () => {
      const pencil = new Pencil(50, 50);

      pencil.sharpen();
      pencil.sharpen();
      pencil.sharpen();
      pencil.sharpen();
      pencil.sharpen();

      const result = pencil.getPencilLength();

      expect(result).to.equal(45);
    });

    it("Disallows pencil to be sharpened after length reaches 0", () => {
      const pencil = new Pencil(50, 2);

      pencil.sharpen();
      pencil.sharpen();
      pencil.sharpen();

      const result = pencil.getPencilLength();

      expect(result).to.equal(0);
    });
  })

  describe("Erasing", () => {
    it("Erases the last instance of 'sea' off the paper with text", () => {
      const pencil = new Pencil();
      const paper = "She sells sea shells by the sea shore";

      const result = pencil.erase(paper, "sea");

      expect(result).to.equal("She sells sea shells by the     shore");
    });

    it("Erases the last instance of 'sells' off the paper with text", () => {
      const pencil = new Pencil(20);
      const paper = "She sells sea shells by the sea shore";

      const result = pencil.erase(paper, "sells");

      expect(result).to.equal("She       sea shells by the sea shore");
    });

    it("Erases nothing if the text provided is not found", () => {
      const pencil = new Pencil(20);
      const paper = "She sells sea shells by the sea shore";

      const result = pencil.erase(paper, "apples");

      expect(result).to.equal(undefined);
    });

    it("Decreases eraser durability by 5 after erasing 'shore'", () => {
      const pencil = new Pencil(50, 50, 20);
      const paper = "She sells sea shells by the sea shore";

      pencil.erase(paper, "shore");

      const result = pencil.getEraserDurability();

      expect(result).to.equal(15);
    });

    it("Decreases eraser durability by 10 after erasing 'he sea shore'", () => {
      const pencil = new Pencil(50, 50, 20);
      const paper = "She sells sea shells by the sea shore";

      pencil.erase(paper, "he sea shore");

      const result = pencil.getEraserDurability();

      expect(result).to.equal(10);
    });
  })

  describe("Editing", () => {
    it("Replaces the blank space with apple", () => {
      const pencil = new Pencil();
      const paper = "An       a day keeps the doctor away";

      const result = pencil.edit(paper, "apple");

      expect(result).to.equal("An apple a day keeps the doctor away");
    });

    it("Replaces the blank space with avocado, overriding text gets replaced with @", () => {
      const pencil = new Pencil();
      const paper = "An       a day keeps the doctor away";

      const result = pencil.edit(paper, "avocado");

      expect(result).to.equal("An avocad@ day keeps the doctor away");
    });

    it("Edits nothing if blank space is not found", () => {
      const pencil = new Pencil();
      const paper = "An apple a day keeps the doctor away";

      const result = pencil.edit(paper, "avocado");

      expect(result).to.equal(undefined);
    });
  })
});
