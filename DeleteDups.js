/*
    You're given the pointer to the head node of a sorted linked list, where the data in the nodes is in ascending order. Delete as few nodes as possible so that the list does not contain any value more than once. The given head pointer may be null indicating that the list is empty.
    
    Remove all duplicate elements from a sorted Linked List
    Node is defined as
    var Node = function(data) {
        this.data = data;
        this.next = null;
    }
*/

// This is a "method-only" submission.
// You only need to complete this method.

function removeDuplicates(head) {
    var current = head;
    while(current.next != null){
        if(current.data == current.next.data){
            current.next = current.next.next;
            continue;
        }
        current = current.next;
    }
    return head;
}