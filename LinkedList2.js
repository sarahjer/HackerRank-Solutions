
/*
  Node is defined as
  var Node = function(data) {
      this.data = data;
      this.next = null;
  }
*/

// This is a "method-only" submission.
// You only need to complete this method.

function insert(head, data) {
    if (head == null) {
    return new Node(data);
  } else {
    if(head.next == null) {
      head.next = new Node(data);
    } else {
      insert(head.next, data);
    }
    return head;
  }
}