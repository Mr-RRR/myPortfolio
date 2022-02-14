function typewritting() {
  const texts = ["Software Developer", "Full Stack Developer"];
  let count = 0;
  let index = 0;
  let curr = "";
  let letter = "";
  (function type() {
    if (count == texts.length) {
      count = 0;
    }
    curr = texts[count];
    letter = curr.slice(0, ++index);
    document.querySelector(".dynamic-typing").textContent = letter;
    if (letter.length === curr.length) {
      count++;
      index = 0;
    }
    setTimeout(type, 200);
  })();
}
typewritting();
