export default function () {
  const levenshtein = require('js-levenshtein')

  // const str1 = "A casual stroll through the lunatic asylum shows that faith does not prove anything.";

  // const str2 = "A casual stroll through the lunatic asylum shows that faith does not prove anything.";

  // console.log("String 1: ", str1);
  // console.log("String 2: ", str2);

  var arr = ['What good is a book that does not even transport us beyond all books?',
    'Never to read another book that was born and baptized (with ink) at the same time.',
    'The English are a nation of consummate cant.'
  ]
  var removalCounter = 0

  console.log('App start')

  const printDistance = (str1, str2, distance) => {
    console.log(`Distance of 
            
      ${str1} 
      
      \&
      
      ${str2}
      
      is
      
      ${distance}`)
  }

  for (var i = 0; i < arr.length; i++) {
    for (var j = 0; j < arr.length; j++) {
      if (i !== j) {
        const distance = levenshtein(arr[i], arr[j])
        if (distance <= 5) {
          arr.splice(j, 1)
          removalCounter++
          // printDistance(arr[i], arr[j], distance)
        }
      }
    }
  }

  console.log('removalCounter: ', removalCounter)
  console.log(JSON.stringify(arr))
}
