// Given a positive integer which fits in a 32 bit signed integer, find if it can be expressed as A^P where P > 1 and A > 0. A and P both should be integers.





isPower : function(A){
	    if(A == 1) return 1;
        for(var base = 0; base <= (A/2); base++){
            for(var power = 2; power <= 31; power++){
                // console.log(Math.pow(base,power));
                if(Math.pow(base,power) == A){
                    return 1;
                }
            }
        }
        return 0;
	}