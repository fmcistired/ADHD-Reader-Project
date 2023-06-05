function convertText() {
  const inputText = document.getElementById("input-text").value;
  const convertedText = processText(inputText);
  displayConvertedText(convertedText);
}

function processText(text) {
  const words = text.split(/\s+/);
  const convertedWords = words.map(word => {
    const boldLetters = getBoldLetters(word);
    if (boldLetters > 0) {
      return `<b>${word.substr(0, boldLetters)}</b>${word.substr(boldLetters)}`;
    } else {
      return word;
    }
  });
  return convertedWords.join(" ");
}

function getBoldLetters(word) {
  const length = word.length;
  if (length === 1 || length === 2) {
    return 1;
  } else if (length === 3) {
    return 2;
  } else if (length >= 4) {
    return 3;
  }
}

function displayConvertedText(text) {
  const outputDiv = document.getElementById("output-text");
  outputDiv.innerHTML = text;
}

const wordsTextarea = document.querySelector(".converter-box .wo")