function generate(length = prompt("How long do you want your password?")){
    if (length > 128){
        alert ("You Password cannot be longer than 128 Characters")
        return;
        }
        
    if (length < 8){
        alert ("Your Password cannot be shorter than 8 Characters")
        return;
        }
    if (isNaN(length)){
        alert ("Your Length needs to be a valid number")
        return;
    }
    var uppercase 
    var lowercase
    var numbers
    var symbols
    var upperconfirm = confirm("Do you want Uppercase Letters?");
    var lowercongirm = confirm("Do you want Lowercase Letters?");
    var numbersconfirm = confirm("Do you want numbers?");
    var symbolscongirm = confirm("Do you want Symbols?")
    
    
    if (upperconfirm) {
    var uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    }

    else {
    var uppercase = '';
    }

    if (lowercongirm) {
    var lowercase = 'abcdefghijklmnopqrstuvwxyz';
    }

    else {
    var lowercase = '';
    }

    if (numbersconfirm) {
    var numbers = '0123456789';
    }

    else {
    var numbers = '';
    }

    if (symbolscongirm) {
    var symbols = '!"#$%&\'()*+,-./:;<=>?@^[\\]^_`{|}~';
  }

  else {
    var symbols = '';
  }


    var all = uppercase + lowercase + numbers + symbols;

    var password = '';

    for (var index = 0; index < length; index++) {
        var character = Math.floor(Math.random() * all.length);
        password += all.substring(character, character + 1);
    }

    return password;
}