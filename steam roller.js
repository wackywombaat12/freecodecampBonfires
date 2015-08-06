function steamroller(arr) {
  // I'm a steamroller, baby
  
  var flat_arr = [].concat.apply([],arr);
  var nested = 1;
  while (nested >=1)
    {
  for (var i=0;i<flat_arr.length;i++)
    {
      nested = 0;
      if (Array.isArray(flat_arr[i]))
        {
          flat_arr = [].concat.apply([],flat_arr);
          nested ++;
        }
    }
    }
  return flat_arr;
}

steamroller([1, [2], [3, [[4]]]]);