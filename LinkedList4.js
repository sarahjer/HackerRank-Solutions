/*
    Delete Node at a given position in a linked list
    head pointer input could be NULL as well for empty list
    Node is defined as
    var Node = function(data) {
        this.data = data;
        this.next = null;
    }
*/

function deleteNode(head, position) {
    var count = 0;
    var prev ;
    var current = head;
    while(true){
        if(count != position){
            prev = current;
            current = current.next;
            count++;
        } else {
            if(count == 0){
                return current.next;
            } else {
                prev.next = current.next;
                break;
            }          
    }
        if(head == null){
            break;
        }
    }
    return head;
}