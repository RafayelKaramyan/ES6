                                                            //ES-6 tasks

//1.Create the function "isValidJSON" which validates if the string is valid JSON or not.
function isJsonString(str) {
    try {
        JSON.parse(str);
    } catch (e) {
        return false;
    }
    return true;
}

//2.Create the function "greeting" which returns a greeting string.

function displayGreeting() {
    greeting({name: 'Bill', surname: 'Jacobson', age: 33});
    console.log(greeting);
  }


  // 3.ES6 Unique Numbers


function onlyUnique(value, index, self) {
  return self.indexOf(value) === index;
}
var a = [1, 1, 2, 3, 5, 4, 5];
var unique = a.filter(onlyUnique);
console.log(unique);
