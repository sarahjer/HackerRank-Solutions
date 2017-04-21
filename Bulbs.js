// N light bulbs are connected by a wire. Each bulb has a switch associated with it, however due to faulty wiring, a switch also changes the state of all the bulbs to the right of current bulb. Given an initial state of all bulbs, find the minimum number of switches you have to press to turn on all the bulbs. You can press the same switch multiple times.

// Note : 0 represents the bulb is off and 1 represents the bulb is on.

//param A : array of integers
	//return an integer
bulbs : function(A){
    var count = 0;
    var off = false;
    for(var x = 0; x < A.length; x++)  {
        var value = off ? !A[x] : A[x];
        if (!value)  {
            count ++;
            off = !off;
        } 
    }
    return count;
}