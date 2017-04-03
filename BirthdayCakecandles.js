function main() {
    var n = parseInt(readLine());
    height = readLine().split(' ');
    height = height.map(Number);
    var max = 0;
    var count = 0;
    for(var i = 0;i < height.length;i++){
        if(height[i]> max){
            max = height[i];
        }
    }
    for(var i = 0;i < height.length;i++){
        if(height[i] == max){
            count++
        }    
    }
    console.log(count);
}