function convertText() {
  // Step 1: Get the input text from the HTML textarea
  var inputText = document.getElementById("input-text").value;

  // Step 2: Process the input text and convert it
  var convertedText = processText(inputText);

  // Step 4: Display the converted text
  displayConvertedText(convertedText);
}

function processText(text) {
  // Step 2: Split text into individual words
  var words = text.split(/\s+/);
  var convertedWords = [];

  for (var i = 0; i < words.length; i++) {
    var word = words[i];

    // Step 5: Customize this function to retrieve the desired number of bold letters
    var boldLetters = getBoldLetters(word);

    if (boldLetters > 0) {
      // Step 3: Format the first few letters as bold
      var formattedWord = "<b>" + word.substr(0, boldLetters) + "</b>" + word.substr(boldLetters);
      convertedWords.push(formattedWord);
    } else {
      convertedWords.push(word);
    }
  }

  // Step 4: Join the modified words back into a string
  return convertedWords.join(" ");
}

function getBoldLetters(word) {
  // Step 5: Customize this function to retrieve the desired number of bold letters based on user selection
  // Example: return 3; to bold the first 3 letters of each word
  var length = word.length;
  
  if (length === 1) {
    return 1;
  }
    if (length === 2) {
    return 1; // Default to bolding the first 1 letter
  } if (length === 3) {
    return 2;
  } if (length >= 4) {
    return 3;
  }
}

function displayConvertedText(text) {
  // Step 4: Display the converted text in the HTML output element
  var outputDiv = document.getElementById("output-text");
  outputDiv.innerHTML = text;
}
