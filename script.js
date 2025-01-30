var input;
var text;

const button = document.getElementById('send');
button.addEventListener('click', function() {
  text = document.getElementById('shiggidi').textContent;
  input = String(document.getElementById('userInput').value).trim();
  if (input == 'none') {
    text = 'Good Bye!'
  }
  document.getElementById('shiggidi').textContent = text;
  document.getElementByID('userInput').value = '';
});
