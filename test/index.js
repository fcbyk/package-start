import * as algorithms from '../dist/sort.js'
import { foods,people } from "./data.js"

algorithms.selectSort(foods,"price").print().reverse().print()
algorithms.shellSort(people,"age").print()
