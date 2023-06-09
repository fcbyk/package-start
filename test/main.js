import { foods, people } from "./data.js"
import { SequentialStack, LinkedStack,selectSort,shellSort,BinaryTree } from '../dist/index'

// selectSort(foods,"price").print().reverse().print();
// shellSort(people,"age").print();

(function main(){
    // sequentialStackTest();
    // linkedStackTest();
    BinaryTreeTest()
})();

// 测试顺序栈
function sequentialStackTest(){
    const stack = new SequentialStack();
    stack.push(1);
    stack.push(2);
    stack.push(3);
    console.log(stack.peek());  // 3
    console.log(stack.pop());   // 3
    console.log(stack.size());  // 2
    console.log(stack.isEmpty());  // false
    stack.clear();
    console.log(stack.isEmpty());  // true
}

// 测试链栈
function linkedStackTest(){
    
    const linkedStack = new LinkedStack();

    linkedStack.push(1);
    linkedStack.push(2);
    linkedStack.push(3);
    linkedStack.push(4);

    console.log("Stack elements:");
    linkedStack.printStack();

    console.log("Pop element:", linkedStack.pop());
    console.log("Peek element:", linkedStack.peek());
}

// 测试二叉树
function BinaryTreeTest(){
    let bt = new BinaryTree((a,b)=>a-b);
    for(let i of [100,50,321,231,32,23]) bt.insert(i);
    for(let i of [
        bt,
        bt.levelOrderTraversal()
    ]) console.log(i);
}