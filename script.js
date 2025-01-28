var input;
var text;

onEvent ("send", "click", function() {
  input = getText("userInput");
  text = input
  setText("shiggidi", text);
});
