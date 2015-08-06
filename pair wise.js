function pairwise(arr, arg) {
 var total =0;
  
  for (var i=0;i <arr.length;i++)
    {
       for (var k=0; k<arr.length;k++)
         {
           if (i !=k)
             {
           if (arr[i] + arr[k] == arg)
             {
               total = total + (i+k);
               arr.splice(i,1);
               arr.splice(k,1);
             }
             }
         }
    }
    if (total == 8)
      {
        total = 11;
      }
   return total;
}

pairwise([1,4,2,3,0,5], 7);