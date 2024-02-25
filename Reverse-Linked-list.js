//206. Reverse Linked List
/**
 * Definition for singly-linked list.
 * struct ListNode {
 *     int val;
 *     struct ListNode *next;
 * };

*/

struct ListNode* reverseList(struct ListNode* head) {
    struct ListNode *l = head;
    struct ListNode *prev = NULL;
    
    while (l != NULL) {
        struct ListNode *nextNode = l->next;
        l->next = prev;
        prev = l;
        l = nextNode;
    }
    
    return prev;
}
