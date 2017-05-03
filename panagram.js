//Given a sentence , tell Roy if it is a pangram or not.



function processData(input) {
    //Enter your code here
    var str = input;
    var arr =['a', 'b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
    var obj ={};
    
    for(var i = 0; i < arr.length;i++){
       var ch = arr[i];
        if(obj[ch]){
            return false;
        } else {
            obj[ch]= true;
        }
    }
    
    console.log(obj.length);
} 