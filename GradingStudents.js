function main() {
    var n = parseInt(readLine());
    for(var a0 = 0; a0 < n; a0++){
        var grade = parseInt(readLine());
        // your code goes here
        if(grade > 37){
           var diff = Math.ceil(grade/5)*5;;
            if((diff - grade) < 3){
                grade = diff;
                console.log(grade);
            } else {
                console.log(grade);
            }
        } else {
            console.log(grade);
        }
    }
   
}