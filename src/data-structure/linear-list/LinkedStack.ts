class StackNode<T> {
    value: T;
    next: StackNode<T> | null;

    constructor(value: T) {
        this.value = value;
        this.next = null;
    }
}

export class LinkedStack<T> {
    private top: StackNode<T> | null;

    constructor() {
        this.top = null;
    }

    push(value: T): void {
        const newNode = new StackNode(value);
        if (!this.top) {
            this.top = newNode;
        } else {
            newNode.next = this.top;
            this.top = newNode;
        }
    }

    pop(): T | null {
        if (!this.top) {
            return null;
        }
        const poppedValue = this.top.value;
        this.top = this.top.next;
        return poppedValue;
    }

    peek(): T | null {
        return this.top ? this.top.value : null;
    }

    isEmpty(): boolean {
        return this.top === null;
    }

    printStack(): void {
        let current = this.top;
        while (current) {
            console.log(current.value);
            current = current.next;
        }
    }
}
