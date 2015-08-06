function drop(arr, func) {
  // Drop them elements.
  var array = [];
  
  for (var i=0;i<arr.length;i++)
    {
      if (func(arr[i]) === true)
        {
          array.push(arr[i]);
        }
    }
  return array;
}

drop([1, 2, 3, 4], function(n) {return n >= 3; });