import { selectSort,insertSort,bubbleSort,shellSort} from '../dist/index.js'
import { objarr1 } from "./data.js"

const people = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 30 },
    { name: "Charlie", age: 20 },
    { name: "David", age: 35 },
];

const sortedPeople = shellSort(people,"age");
console.log(sortedPeople);