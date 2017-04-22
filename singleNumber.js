// Given an array of integers, every element appears twice except for one. Find that single one.

// Note: Your algorithm should have a linear runtime complexity. Could you implement it without using extra memory?

// Example :

// Input : [1 2 2 3 1]
// Output : 3
singleNumber : function(A){
	    var result = A[0];
	    for(var i = 1;i< A.length;i++){
	        result = result ^ A[i];
	    }
        return result;
	}