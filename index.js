function searchNonRepetedCharacter(str) {
  let arr = str.split('');
  for(let i = 0; i < arr.length; i++)
  {
    let firstIndex = findFirstOccurenceIndex(str, arr[i]);
    let lastIndex = findLastOccurenceIndex(str, arr[i]);
    if(firstIndex === lastIndex)
    {
      return arr[firstIndex];
    }
  }
}

function findFirstOccurenceIndex(str, singleChar)
{
  let arr  = str.split('');
  for(let i =0; i < arr.length; i++)
  {
    if(arr[i] == singleChar)
    {
      return i;
    }
  }
}

function findLastOccurenceIndex(str, singleChar)
{
  let arr  = str.split('');
  for(let i = arr.length - 1; i >= 0; i--)
  {
    if(arr[i] == singleChar)
    {
      return i;
    }
  }
}

let str = "aabcdgtrabhjgh";

console.log(str.split(''));

let char = searchNonRepetedCharacter(str);

console.log(char);
