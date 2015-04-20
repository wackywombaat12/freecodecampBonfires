function unite(arr1, arr2, arr3) {
  var array = arr1.concat(arr2,arr3);
 
  for (var i=0; i<array.length;i++)
    {
      for (var k=0; k<array.length;k++)
        {
          if (i!= k)
            {
           if (array[i] == array[k])
              {
               array.splice(k,1);
              }
            }
        }
    }
  return array;
}

unite([1, 2, 3], [5, 2, 1, 4], [2, 1]);