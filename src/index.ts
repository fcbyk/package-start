// 选择排序
export function selectSort<T>(objectArray: T[], byAttribute: keyof T): T[]{
    
    for (let insertTarget = 0; insertTarget < objectArray.length; insertTarget++) {

        // 查找最小元素的数组下标
        let min:number = insertTarget;
        for (let searchTaget:number = insertTarget + 1; searchTaget < objectArray.length; searchTaget++) {
            if (objectArray[min][byAttribute] > objectArray[searchTaget][byAttribute]) min = searchTaget;
        }

        // 找到最小元素，插入指定位置（与指定位置进行交换）
        exchangeArrayElement(objectArray, insertTarget, min)
    }

    return objectArray
}

// 交换元素
function exchangeArrayElement(arr:any[], first:number, second:number):any[] {
    if (Array.isArray(arr) && first >= 0 && first < arr.length && second >= 0 && second < arr.length) {
        const temp:any[] = arr[first];
        arr[first] = arr[second];
        arr[second] = temp;
    }
    return arr;
}