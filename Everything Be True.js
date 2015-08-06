function every(collection, pre) {
  // Does everyone have one of these?
  var found = 0;
  for (var i=0; i<collection.length;i++)
    {
      if (pre == Object.keys(collection[i])[0] || pre == Object.keys(collection[i])[1])
        {
          found ++;
        }
    }
  if (found == collection.length)
    {
      return true;
    } else 
      {
        return false;
      }
  
}

every([{'user': 'Tinky-Winky', 'sex': 'male'}, {'user': 'Dipsy', 'sex': 'male'}, {'user': 'Laa-Laa', 'sex': 'female'}, {'user': 'Po', 'sex': 'female'}], 'sex');