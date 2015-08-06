function smallestCommons(arr) {
  var array = [];
  var min = Math.min.apply(null, arr);
  var max = Math.max.apply(null, arr);
  
  for(var k=min;k<=max;k++)
    {
      array.push(k);
    }
  
   var n = array.length, a = Math.abs(array[0]);
    for (var i = 1; i < n; i++)
     { var b = Math.abs(array[i]), c = a;
       while (a && b){
         a > b ? a %= b : b %= a; 
         } 
       a = Math.abs(c*array[i])/(a+b);
     }
    return a;
}


smallestCommons([1,5]);