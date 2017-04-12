/*
    Reverse a linked list and return the head
    The input list will have at least one element
    Node is defined as
    var Node = function(data) {
        this.data = data;
        this.next = null;
    }
*/

// This is a "method-only" submission.
// You only need to complete this method.

function reverseLinkedList(head) {
     if(head==null) return null; 
    if(head.next == null) return head;
    var node = head;
    var next1 = null;
		while (true) {
            if(node != null){
                var next;
                if(next1 != null){
                    next = next1;
                } else{
                    next = node.next;
                    node.next = null;
                }
                next1 = next.next;
                next.next = node;
                node = next;

                if (next1 === null) {
                    head = node;
                    break;
                }
            }          
		}
    return head;
}
