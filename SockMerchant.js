//Print the total number of matching pairs of socks that John can sell.
// IP--10 20 20 10 10 30 50 10 20
// O/P --3


function main() {
    var n = parseInt(readLine());
    c = readLine().split(' ');
    c = c.map(Number);
    var count = 0;
    var x ={};
		for (var i = 0; i < n; i++){
			var d = c[i];
			x[d] = (isNaN(x[d]) ? 1 : x[d] + 1);
            
		}  
    for (var j in x){
        x[j] = Math.floor(x[j]/2);
        count += x[j];
    }
    console.log(count);
} 