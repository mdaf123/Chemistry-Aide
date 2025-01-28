var input;
var text;

const button = document.getElementByID('send');
button.addEventListener('click', function() {
  input = document.getElementByID('userInput').textContent;
  text = input;
  document.getElementByID('shiggidi').textContent = text;
});
