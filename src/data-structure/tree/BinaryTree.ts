// 节点
class TreeNode<T> {
    value: T;
    left: TreeNode<T> | null;
    right: TreeNode<T> | null;

    constructor(value: T) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

// 二叉树
export class BinaryTree<T> {

    // 根节点
    root: TreeNode<T> | null;
    private compareFn: (a: T, b: T) => number;

    // 构造方法
    constructor(compareFn: (a: T, b: T) => number) {
        this.root = null;
        this.compareFn = compareFn;
    }

    // 插入元素
    insert(value: T): BinaryTree<T> {
        const newNode = new TreeNode(value);

        if (!this.root) {
            this.root = newNode;
        } else {
            this.insertNode(this.root, newNode);
        }
        return this
    }

    // （递归）以构建二叉排序树的方式，自动选择位置进行插入
    private insertNode(node: TreeNode<T>, newNode: TreeNode<T>): void {
        if (this.compareFn(newNode.value, node.value) < 0) {
            if (!node.left) {
                node.left = newNode;
            } else {
                this.insertNode(node.left, newNode);
            }
        } else {
            if (!node.right) {
                node.right = newNode;
            } else {
                this.insertNode(node.right, newNode);
            }
        }
    }

    // 二叉树的层次遍历
    levelOrderTraversal(): T[] {
        const result: T[] = [];
        if (!this.root) {
            return result;
        }

        const queue: TreeNode<T>[] = [];
        queue.push(this.root);

        while (queue.length > 0) {
            const node = queue.shift()!;
            result.push(node.value);

            if (node.left) {
                queue.push(node.left);
            }

            if (node.right) {
                queue.push(node.right);
            }
        }

        return result;
    }
}