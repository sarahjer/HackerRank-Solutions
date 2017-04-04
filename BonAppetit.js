function main(input) {
    //Enter your code here
    var n_temp = readLine().split(' ');
    var n = parseInt(n_temp[0]);
    var m = parseInt(n_temp[1]);
    order = readLine().split(' ');
    order = order.map(Number);
    var k = parseInt(readLine());
    //console.log(m);
    var sum = 0;
    for(var i = 0;i < n;i++){
       sum += order[i];        
    }
    sum = sum - order[m];
    //console.log(sum);
    if(k == (sum/2)){
        console.log("Bon Appetit");
    } else {
        console.log(k - (sum/2));
    }
} 