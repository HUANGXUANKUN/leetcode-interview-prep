/**
 * // This is the interface that allows for creating nested lists.
 * // You should not implement it, or speculate about its implementation
 * function NestedInteger() {
 *
 *     Return true if this NestedInteger holds a single integer, rather than a nested list.
 *     @return {boolean}
 *     this.isInteger = function() {
 *         ...
 *     };
 *
 *     Return the single integer that this NestedInteger holds, if it holds a single integer
 *     Return null if this NestedInteger holds a nested list
 *     @return {integer}
 *     this.getInteger = function() {
 *         ...
 *     };
 *
 *     Set this NestedInteger to hold a single integer equal to value.
 *     @return {void}
 *     this.setInteger = function(value) {
 *         ...
 *     };
 *
 *     Set this NestedInteger to hold a nested list and adds a nested integer elem to it.
 *     @return {void}
 *     this.add = function(elem) {
 *         ...
 *     };
 *
 *     Return the nested list that this NestedInteger holds, if it holds a nested list
 *     Return null if this NestedInteger holds a single integer
 *     @return {NestedInteger[]}
 *     this.getList = function() {
 *         ...
 *     };
 * };
 */
/**
 * @param {string} s
 * @return {NestedInteger}
 */
var deserialize = function(s) {
    // if not array
    if (s[0] !== '['){
        return new NestedInteger(+s);
    }
    let res = new NestedInteger();
    let stack = [res];
    let start = 1;
    for(let i = 1; i < s.length; i++){
        const curr = s[i];
        if(curr == '['){
            // new stack
            let newInteger = new NestedInteger();
            stack[stack.length-1].add(newInteger);
            stack.push(newInteger);
            start = i+1;
        }else if (curr == ',' || curr == ']'){
            // if there is value
            if(i > start){
                const value = +s.slice(start, i);
                let newInteger = new NestedInteger(value);
                stack[stack.length-1].add(newInteger);
            }
            start = i+1; //update start
            if(curr == ']') stack.pop();
        }
        // else it is digit, ignore
    }
    return res;

};