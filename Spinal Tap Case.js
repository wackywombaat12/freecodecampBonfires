function spinalCase(str) {
  // "It's such a fine line between stupid, and clever."
  // --David St. Hubbins
   
  var word = str.replace(/([a-z])([A-Z])/g, '$1 $2');
  word = word.replace(/\s/g, "-");
  word = word.replace(/_/g, "-");
  word = word.toLowerCase();
  return word;
}

spinalCase('This Is Spinal Tap');