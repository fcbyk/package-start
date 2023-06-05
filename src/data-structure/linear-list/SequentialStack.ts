export default class SequentialStack<T> {
  private stack: T[];
  private top: number;

  constructor() {
    this.stack = [];
    this.top = -1;
  }

  // 入栈
  push(item: T): void {
    this.top++;
    this.stack[this.top] = item;
  }

  // 出栈
  pop(): T | undefined {
    if (this.isEmpty()) {
      return undefined;
    }
    const item = this.stack[this.top];
    this.top--;
    return item;
  }

  // 获取栈顶元素
  peek(): T | undefined {
    if (this.isEmpty()) {
      return undefined;
    }
    return this.stack[this.top];
  }

  // 判断栈是否为空
  isEmpty(): boolean {
    return this.top === -1;
  }

  // 获取栈的长度
  size(): number {
    return this.top + 1;
  }

  // 清空栈
  clear(): void {
    this.stack = [];
    this.top = -1;
  }
}