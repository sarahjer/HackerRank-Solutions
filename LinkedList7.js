/*
    Merge two sorted lists A and B as one Linked List and return the head of merged list
    Node is defined as
    var Node = function(data) {
        this.data = data;
        this.next = null;
    }
*/

// This is a "method-only" submission.
// You only need to complete this method.

function mergeLinkedLists( headA, headB) {
    var mergedHead = new Node();
    var merged = mergedHead;
    if(headA == null){
        return headB;
    } else if(headB == null){
        return headA;
    } else {
        while(headA != null || headB!= null){
            if(headA == null){
                merged.next = headB;
                headB = headB.next;
            } else if(headB == null){
                merged.next = headA;
                headA = headA.next;
            } else if(headA != null && headB != null){
                if(headA.data < headB.data){
                    merged.next = headA;
                    //console.log(headA.data);
                    headA = headA.next;    
                } else {
                    merged.next = headB;
                    //console.log(headB.data);
                    headB = headB.next;    
                } 
            }
            
            merged = merged.next;
        }
        return mergedHead.next;   
}
    
}
