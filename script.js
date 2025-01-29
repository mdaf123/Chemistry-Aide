var input;
var text;

const button = document.getElementById('send');
button.addEventListener('click', function() {
  text = document.getElementById('shiggidi').textContent;
  input = String(document.getElementById('userInput').value);
  if (input == 'none' && text == '1. Acid & Base Determiner\n2. Combined Gas Law Formula\n3. Arheinnius Acid or Base Determiner\n4. Significant Figures\n5. Organic Groups\n6. Finding if a Compound is covalant or not\n7. Finding Alkenes, Alkynes and Alkanes\n8. Percent Composition\n9. Grand Formula Mass/Molar Mass\n10. Organic Reactions\n11. Mole Calculations\n12. Percent Error\n13. Concentration(ppm or molarity)\n14. Heat Gain/Loss\n\nWhich type of question would you like to ask? Choose a number from 1-14(Say none if you don't want to ask a question)') {
    text = 'Good Bye!'
  }
  document.getElementById('shiggidi').textContent = text;
});
