function main() {
    var time = readLine();
    var hours = time.split(":");
    var str =''+hours[2];
    if(str.includes('AM')){
        if(hours[0] == 12){
          hours[0] = '00'; 
          process.stdout.write(hours[0]+':'+hours[1]+':'+ str.substr(0,2));
        } else {
        process.stdout.write(hours[0]+':'+hours[1]+':'+ str.substr(0,2));
        }
    } else {
        if(hours[0] == 12){
          hours[0] = '12'; 
            //console.log(hours[0]);
            process.stdout.write(hours[0]+':'+hours[1]+':'+ str.substr(0,2));
        } else{
       hours[0] = ((parseInt(hours[0])) + 12);
        process.stdout.write(hours[0]+':'+hours[1]+':'+ str.substr(0,2));
        }
    }
}
