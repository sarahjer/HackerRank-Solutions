function main(input) {
    //Enter your code here
    var arr = readLine().split('');
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] === arr[i + 1]) {
            arr.splice(i, 2);
            i = -1;
        }
    }
    if (arr.length === 0) {
        console.log('Empty String');
    } else {
    console.log(arr.join(''));
    }      
}