// Progression #1: Greatest of the two numbers
function greatestOfTwoNumbers(num1,num2){
  if(n1>2)
    return n1
  else
    return n2
}

// Progression #2: The lengthy word
const words = ['mystery', 'brother', 'aviator', 'crocodile', 'pearl', 'orchard', 'crackpot'];
function findScaryWord(words)
{
  if(words.length==0){
    return null
  }
  else if(words.length==1){
    return words[0]
  }
  else if(words.length==2){
    if(words[0].length==words[1].length){
      return words[0]
    }
  }
  else if(words.length>2)
  {
    for(i=0;i<words.length;i++){
      if(words[0].length<words[i].length)
        words[0]=words[i]
    }
    return words[0];
  }
}

// Progression #3: Net Price
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];
function netPrice(numbers){
  if(numbers.length==0){
    return 0 
  }
  else if(numbers=[]){
    return 0
  }
  else if(numbers.length>1){
    let sum = 0; 
    for (let i = 0; i < numbers.length; i++) { 
      sum += numbers[i]; 
    }
    return sum;

  }
}
arr=input()
function add(){
  if(arr=[])
    return 0
}

// Progression #4: Calculate the average
function sumOfArray(arr){
  const sum = arr.reduce((acc, cur) => acc + cur);
  const average = sum/arr.length;
  return average;
}
// Progression 4.1: Array of numbers
const numbersAvg = [2, 6, 9, 10, 7, 4, 1, 9];
function midPointOfLevels(numbersAvg){
  if(numbersAvg.length==0){
    return null
  }
  else{
    var total = 0; 
    for(var i = 0; i < numbersAvg.length; i++) { 
      total += numbersAvg[i]; 
    } 
    var avg = total / numbersAvg.length
    return avg
  }
}

// Progression 4.2: Array of strings
const wordsArr = ['seat', 'correspond', 'linen', 'motif', 'hole', 'smell', 'smart', 'chaos', 'fuel', 'palace'];
function averageWordLength(wordsArr){
  if(wordsArr.length==0){
    return null
  }
  else{
    avg = wordsArr.join('').length / wordsArr.length
    return avg
  }
}
//Progression :bonus2
const mixedArr = [63, 122, 'audi', 61, true, 'volvo', '20', 'lamborghini', 38, 156];
function avg(mixedArr){
  if(mixedArr.length==0){
    return null
  }
  else{
    for(let i=0;i<mixedArr.length;i++){
      if(typeof(mixedArr[i])=='string'){
        sum=sum+mixedArr[i].length
      }
      else if(mixedArr[i]==true){
        sum=sum+1
      }
      else if(mixedArr[i]==false){
        sum=sum+0
      }
      else
        sum=sum+mixedArr[i];
    }
  }
  var avg1=parseFloat((sum/mixedArr.length).toFixed(2))
  return avg1;
}
// Progression #5: Unique arrays
const wordsUnique = [
  'bread',
  'jam',
  'milk',
  'egg',
  'flour',
  'oil',
  'rice',
  'coffee powder',
  'sugar',
  'salt',
  'egg',
  'flour'
];
function uniqueArray(wordsUnique){
  if(wordsUnique.length==0)
    return null
  else
    var arr1=[...new Set(wordsUnique)]
    return arr1
}

// Progression #6: Find elements
const wordsFind = ['machine', 'subset', 'trouble', 'starting', 'matter', 'eating', 'truth', 'disobedience'];
function searchElement(wordsFind,element)
{
  if(wordsFind.length==0)
  {
    return null
  }
  else
  {
    for (i=0;i<wordsFind.length;i++)
    {
      if (wordsFind[i] ==element )
      {
        return true
      }
    }
  }
}
// Progression #7: Count repetition
const wordsCount = [
  'machine',
  'matter',
  'subset',
  'trouble',
  'starting',
  'matter',
  'eating',
  'matter',
  'truth',
  'disobedience',
  'matter'
];
function howManyTimesElementRepeated(wordsCount, element) {
  var counter = 0;
  if (wordsCount.length == 0) 
  {
    return 0;
  }
  for (var i = 0; i < wordsCount.length; i++)
  {
    if (wordsCount[i] == element) 
    {
      counter++;
    }
  }
    
  return counter;
}


// Progression #8: Bonus

const matrix = [
  [08, 02, 22, 97, 38, 15, 00, 40, 00, 75],
  [49, 49, 99, 40, 17, 81, 18, 57, 60, 87],
  [81, 49, 31, 73, 55, 79, 14, 29, 93, 71],
  [52, 70, 95, 23, 04, 60, 11, 42, 69, 24],
  [22, 31, 16, 71, 51, 67, 63, 89, 41, 92],
  [24, 47, 32, 60, 99, 03, 45, 02, 44, 75],
  [32, 98, 81, 28, 64, 23, 67, 10, 26, 38],
  [67, 26, 20, 68, 02, 62, 12, 20, 95, 63],
  [24, 55, 58, 05, 66, 73, 99, 26, 97, 17],
  [21, 36, 23, 09, 75, 00, 76, 44, 20, 45]
];
