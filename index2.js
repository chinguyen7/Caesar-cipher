var input = document.getElementById("input");
var output = document.getElementById("output");
var enc = document.getElementById("enc");
var de = document.getElementById("de");
var clear = document.getElementById("clear");
var cwwk = document.getElementById("ewwk");
var dwwk = document.getElementById("dwwk");

//console.log(input)
var words = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","w","v","x","y","z"];
enc.onclick = clicked;
de.onclick = dec;
clear.onclick = cleared;
cwwk.onclick = cwwkk;
dwwk.onclick = dwwk;


//decrytion
function dwwk(){
    var input2 = input.value;
    var shiftWord = document.getElementById("shiftWord").value;
    var wordShiftList = shiftWord.split("");
    console.log(wordShiftList);
    //make list of shift values
    var shiftList = [];
    for(var i = 0; i < shiftWord.length; i++){
        var s = words.indexOf(wordShiftList[i], words);
        //add one so a does not equal 0
        shiftList.push(s + 1);
    }
    console.log(shiftList);
    for(var j = 0; j < input.length; j++){
        //shift value for current letter
        var shift = parseInt(shiftList[j % shiftList.length]);
        //current letter
        var number = input2.charCodeAt(j);
        //converson
        //upper case
        if ((number) >= 97 && (number)  <= 144){
            if ((number - shift) < 97){
                number = ((number - shift) % 122) + 97;
            }else{
                number = number - shift;
            }
        //lower case
        }else if ((number) >= 65 && (number) <= 90){
            if (number - shift < 65){
                number = ((number - shift) % 90) + 65;
            }else{
                number = number - shift;
            }
        }
        var newtext = String.fromCharCode(number);
        console.log(newtext);
        output.innerHTML += newtext;
    }
}







//key with words encription
function cwwkk(){
    //variables
    var input2 = input.value;
    var shiftWord = document.getElementById("shiftWord").value;
    var wordShiftList = shiftWord.split("");
    console.log(wordShiftList);
    //make list of shift values
    var shiftList = [];
    for(var i = 0; i < shiftWord.length; i++){
        var s = words.indexOf(wordShiftList[i], words);
        //add one so a does not equal 0
        shiftList.push(s + 1);
    }
    console.log(shiftList);
    for(var j = 0; j < input.length; j++){
        //shift value for current letter
        var shift = parseInt(shiftList[j % shiftList.length]);
        //current letter
        var number = input2.charCodeAt(j);
        //converson
        //upper case
        if ((number) >= 65 && (number) <= 90) {
            if ((number + shift) < 65){
                    var num = (number+shift);
                    var value = (65 % num);
                    number = 90 - value;
            } else if ((number + shift) > 90){
                var num = (number + shift);
                var value = (90%num);
                number = value + 65;    
            }else{
                number = number + shift;
            }
        //lower case
        } else if ((number) >= 97 && (number) <= 122) {
            if ((number + shift) < 97){
                var num = (number+shift);
                var value = (num % 96);
                number = 122 - value;
            }else if ( (number + shift) > 122 ){
                var num = (number + shift);
                var value = (num % 122);
                number = value + 97;
            
            }else{
                number = number + shift;
            }
        }
        var newtext = String.fromCharCode(number);
        console.log(newtext);
        output.innerHTML += newtext;
    }
}

//clear output
function cleared(){
  output.innerHTML = "output: " ;
}

//encode
function clicked(){
    var text = input.value;
    for(var i=0;i<text.length;i++){
        var number = text.charCodeAt(i);
        var shift = document.getElementById("shiftKey").value;
        shift = parseInt(shift)
        //upper case
        if ((number) >= 65 && (number) <= 90) {
            if ((number + shift) < 65){
                    var num = (number+shift);
                    var value = (65 % num);
                    number = 90 - value;
            } else if ((number + shift) > 90){
                var num = (number + shift);
                var value = (90%num);
                number = value + 65;    
            }else{
                number = number + shift;
            }
        //lower case
        } else if ((number) >= 97 && (number) <= 122) {
            if ((number + shift) < 97){
                var num = (number+shift);
                var value = (num % 96);
                number = 122 - value;
            }else if ( (number + shift) > 122 ){
                var num = (number + shift);
                var value = (num % 122);
                number = value + 97;
            
            }else{
                number = number + shift;
            }
        }
        //print
        var newtext = String.fromCharCode(number);
        console.log(newtext);
        output.innerHTML += newtext;
        
        
    }
}

//decode
function dec(){
    var text = input.value;
    for(var i=0;i<text.length;i++){
        var number = text.charCodeAt(i);
        var shift = document.getElementById("shiftKey").value;
        shift = parseInt(shift);
        //lower case
        if ((number) >= 97 && (number)  <= 122){
            if ((number - shift) < 97){
                var number2 = 122 - ( 97 % (number - shift) );
            }else{
                var number2 = number - shift;
            }
        //upper case
        }else if ((number) >= 65 && (number) <= 90){
            if (number - shift < 65){
                var number2 = 90 - (65 % (number - shift) );
            }else{
                var number2 = number - shift;
            }
        }
        //print
        var newtext = String.fromCharCode(number2);
        console.log(newtext);
        output.innerHTML += newtext;
        
        
    }
}