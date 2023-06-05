function convertText() {
  var inputText = document.getElementById("input-text").value;
  var words = inputText.split(" ");
  var outputText = "";

  var wordCount = words.length;

  for (var i = 0; i < words.length; i++) {
    var word = words[i];
    var boldWord = "";

    if (word.length <= 3) {
      boldWord = "<b>" + word + "</b>";
    } else {
      var boldLength = 3;
      boldWord = "<b>" + word.substring(0, boldLength) + "</b>" + word.substring(boldLength);
    }

    outputText += boldWord + " ";
  }

  document.getElementById("output-text").innerHTML = outputText;
  document.querySelector(".word-count span").textContent = wordCount;
}

let fish = document.getElementById('fish');

window.addEventListener('scroll', () => {
  let value = -1 * window.scrollY/10;
  fish.style.transform = `rotate(${value}deg)`;
});
