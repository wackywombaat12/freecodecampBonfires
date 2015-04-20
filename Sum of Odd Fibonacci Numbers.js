function sumFibs(num) {
var result = 0;
var prevprev, prev = 1, current = 0;

while (current <= num) {
    if (current % 2)
      {
    result += current;
      }
    prevprev = prev;
    prev = current;
    current = prev + prevprev;
      
  }
  return result;
}

sumFibs(4);