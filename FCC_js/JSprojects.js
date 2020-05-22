// FCC palindrome
function palindrome(str) {
  if(str.replace(/[\W_]/g, "").toLowerCase() ===
  str.replace(/[\W_]/g, "").toLowerCase().split("").reverse().join("")){
    return true;
  }
  return false;
}

palindrome("A man, a plan, a canal. Panama");
// returns true


// Start of Booklist project
// The global variable
var bookList = ["The Hound of the Baskervilles", "On The Electrodynamics of Moving Bodies", "Philosophiæ Naturalis Principia Mathematica", "Disquisitiones Arithmeticae"];

  // Start of Change
function add (arr, bookName) {
  let newBookList = [...arr];
  newBookList.push(bookName);
  return newBookList;
  }

function remove (arr, bookName) {
  let newBookList = [...arr];
  if (newBookList.indexOf(bookName) >= 0) {
    newBookList.splice(newBookList.indexOf(bookName), 1); 
    return newBookList;

    }
}
  // End of Change

var newBookList = add(bookList, 'A Brief History of Time');
var newerBookList = remove(bookList, 'On The Electrodynamics of Moving Bodies');
var newestBookList = remove(add(bookList, 'A Brief History of Time'), 'On The Electrodynamics of Moving Bodies');

console.log(bookList);
// End of Booklist project

// FCC Roman Numeral Converter
function romanNumeralConverter(num){
  if (num !== isNan()) {

  } else {
    return "Not a number";
  }
}
