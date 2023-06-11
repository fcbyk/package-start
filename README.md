### npm

- 安装

```shell
npm i @fcbyk/start
```

- 示例

```javascript
import { LinkedStack } from "@fcbyk/start";

let linkedStack = new LinkedStack();
linkedStack.push(10);
linkedStack.push(20);
linkedStack.push(30);
console.log(linkedStack.pop())
console.log(linkedStack);
```

## CDN

```html
<script src="https://cdn.jsdelivr.net/npm/@fcbyk/start/browser/sort.global.js"></script>

<script>
    const { selectSort } = sortAlg;
    selectSort([
      { name: "牛奶", price: 4 },
      { name: "烤肠", price: 2.5 },
      { name: "红糖馒头", price: 1.5 },
      { name: "法棍", price: 7 }
    ],"price").print();
</script>
```

