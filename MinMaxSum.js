function main() {
    var a_temp = readLine().split(' ');
    var a = parseInt(a_temp[0]);
    var b = parseInt(a_temp[1]);
    var c = parseInt(a_temp[2]);
    var d = parseInt(a_temp[3]);
    var e = parseInt(a_temp[4]);
    var sum = (a + b + c+ d + e);
    var arr = [];
    for(var i = 0;i < a_temp.length; i++){
       var max = sum - (parseInt(a_temp[i]));
        arr.push(max);
        
    }
    arr.sort();
    //console.log(arr);
    process.stdout.write(arr[0] + " " + arr[arr.length -1])
}