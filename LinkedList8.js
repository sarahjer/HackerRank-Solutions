/*
    Compare two Linked Lists A and B
    Return 1 if they are identical and 0 if they are not.
    Node is defined as
    var Node = function(data) {
        this.data = data;
        this.next = null;
    }
*/

// This is a "method-only" submission.
// You only need to complete this method.

function compareLinkedLists( headA, headB) {
    while(headA != null && headB != null && headA.data == headB.data){
            headA = headA.next;
            headB = headB.next;
    }
    return (headA == headB ? 1 :0);
}