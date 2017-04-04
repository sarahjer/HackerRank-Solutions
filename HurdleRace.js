function main() {
    var n_temp = readLine().split(' ');
    var n = parseInt(n_temp[0]);
    var k = parseInt(n_temp[1]);
    height = readLine().split(' ');
    height = height.map(Number);
    // your code goes here
    var count = 0;
    var max = k;
   for(var i = 0;i < n;i++){
       if(height[i] > max){
           max = height[i];
       }     
   }
    count = max - k;
    console.log(count);
}