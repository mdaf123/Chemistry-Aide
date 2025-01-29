var input;
var text;

const button = document.getElementById('send');
button.addEventListener('click', function() {
  input = document.getElementById('userInput').value;
  text = String(input);
  document.getElementById('shiggidi').textContent = text;
});
