/*
    Detect a cycle in a Linked List.
    Note that the head may be 'null' if the list is empty.
    Node is defined as
    var Node = function(data) {
        this.data = data;
        this.next = null;
    }
*/

// This is a "method-only" submission.
// You only need to complete this method.

function hasCycle(head) {
    //if(head == null) return false;
    var current = head;
    var next = head;
    while(next != null && next.next != null){
        current = current.next;
        next = next.next.next;
        if(current == next)
            return true;      
    }   
    return false; 
}