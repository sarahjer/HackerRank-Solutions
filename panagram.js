//Given a sentence , tell Roy if it is a pangram or not.



function processData(input) {
    //Enter your code here
    var str = input;
    var obj1 ={};
    
   for(var i = 0; i < str.length;i++){
       var ch = str[i].toLowerCase();
         if(obj1[ch]){
            continue;
        } else if(ch == ' '){
            continue;
        } 
       else {
            obj1[ch]= true;
        }
    }
    var size = Object.keys(obj1).length;
    if(size == 26) console.log("pangram");
    else console.log("not pangram");
} 