function main() {
    var n = parseInt(readLine());
    arr = readLine().split(' ');
    arr = arr.map(Number);
    var a = 0;
    var b = 0;
    var c = 0;
    //console.log(arr);
    for(var i = 0; i < arr.length; i++){
        if(arr[i] > 0){
             a++;
        } else if(arr[i] < 0){
            b++;
        } else 
            c++;
    }
   //console.log(n);
    console.log(a/n);
    console.log(b/n);
    console.log(c/n);
}