function fearNotLetter(str) {
  var found = 0;
  for (var i=0;i<str.length-1;i++)
    {
      found = 0;
      if (str.charAt(i).charCodeAt() + 1 !=str.charAt(i+1).charCodeAt())
        {
          found = str.charAt(i).charCodeAt();
          break;
        }
    }
  if (found === 0)
        {
          return undefined;
        } else {
          return String.fromCharCode(found+1);
        }
 
}

fearNotLetter('abce');