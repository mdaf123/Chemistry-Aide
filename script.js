var input;
var text;

const button = document.getElementById('send');
button.addEventListener('click', function() {
  text = document.getElementById('shiggidi').textContent;
  input = String(document.getElementById('userInput').value).trim();
  if (input == 'none') {
    text = 'Good Bye!'
  } else if(input == "12") {
    percent_error();
  } else () {
    text = 'Please enter a valid input.'
  }
  document.getElementById('shiggidi').textContent = text;
  document.getElementByID('userInput').value = '';
});

function percent_error() {
  while (true) {
    try () {
      document.getElementById('shiggidi').textContent = "What is the measured value?<br>";
      var mv = String(document.getElementById('userInput').value).trim();
      document.getElementByID('userInput').value = '';
      document.getElementById('shiggidi').textContent += "What is the accepted value?<br>";
      var av = String(document.getElementById('userInput').value).trim();
      document.getElementByID('userInput').value = '';
      var pv = Math.abs(parseFloat(mv) - parseFloat(av)) / parseFloat(av) * 100;
      document.getElementById('shiggidi').textContent += "The percent error is " + String(pv) + "%<br>";
      break
    } catch(error) {
      document.getElementById('shiggidi').textContent = "Please enter a valid number.";
    }
  }
}
