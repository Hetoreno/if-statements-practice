/* 

var x = 1;

if (x == 1){
    alert('It is 1!');
} else {
    alert('It isn\'t the word! ')
}

*/

//Magic Word
document.getElementById('reveal').onclick = function(){

    var magic = document.getElementById('put').value;
    var magicWord = 'Hello';

    if (magic == magicWord){
        alert('That\'s the word!');
    } else { 
        alert('nope');
    }
}