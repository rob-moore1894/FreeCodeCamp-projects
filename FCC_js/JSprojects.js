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

// FCC Roman Numeral Converter
function romanNumeralConverter(num){
  if (num !== isNan()) {
    
  } else {
    return "Not a number";
  }
}
