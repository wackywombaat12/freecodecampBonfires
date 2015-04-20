function convert(str) {
  // &colon;&rpar;
  
  
  var latest = str.replace(/[&]/g, "&amp;");
  //latest = str.replace(/[<]/g, "&lt;");
  //latest = str.replace(/[>]/g, "&gt;");
  //latest = str.replace(/[']/g, "&apos;");
  //latest = str.replace(/[""]/g, "&quot;");
  return latest;
}

convert('Dolce & Gabbana');