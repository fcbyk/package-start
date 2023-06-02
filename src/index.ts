// 选择排序
export function selectSort<T>(objectArray: T[], byAttribute: keyof T): T[]{
    
    for (let insertTarget:number = 0; insertTarget < objectArray.length; insertTarget++) {

        // 查找最小元素的数组下标
        let min:number = insertTarget;
        for (let searchTaget:number = insertTarget + 1; searchTaget < objectArray.length; searchTaget++) {
            if (objectArray[min][byAttribute] > objectArray[searchTaget][byAttribute]) min = searchTaget;
        }

        // 找到最小元素，插入指定位置（与指定位置进行交换）
        exchangeArrayElement(objectArray, insertTarget, min);
    }

    return objectArray
}

// 插入排序
export function insertSort<T>(objectArray: T[], byAttribute: keyof T): T[]{

    // 空数组或之有一个元素的数组直接返回
    if(objectArray == null || objectArray.length < 2) return objectArray;

    // 从第二元素开始，依次对每个元素进行排序
    for (let sortItemIndex:number = 1; sortItemIndex < objectArray.length; sortItemIndex++) {

        // 暂存要排序元素的值
        let tempItem:T = objectArray[sortItemIndex];
        
        // 与左边的元素比较，这是需要比较的第一个元素
        let exchangeTargetIndex:number = sortItemIndex - 1;

        // 依次和左边的元素比较大小，如果比左边元素小，则向左移动exchangeTargetIndex指针，直至确定需要插入的位置
        while(exchangeTargetIndex >= 0 && objectArray[exchangeTargetIndex][byAttribute] > tempItem[byAttribute]) 
        exchangeTargetIndex--;

        // 插入位置至排序位置这部分的元素依次往右移，为插入位置腾空间
        for(let sortItemIndexCopy:number = sortItemIndex; sortItemIndexCopy > exchangeTargetIndex+1; sortItemIndexCopy--) 
        objectArray[sortItemIndexCopy] = objectArray[sortItemIndexCopy-1];
        
        // 插入元素
        objectArray[exchangeTargetIndex+1] = tempItem;
    }

    return objectArray;
}

// 冒泡排序
export function bubbleSort<T>(objectArray: T[], byAttribute: keyof T): T[]{

    // 空数组或之有一个元素的数组直接返回
    if(objectArray == null || objectArray.length < 2) return objectArray;

    // 有多少个元素，遍历多少次
    for (let sorted:number = 0; sorted < objectArray.length; sorted++){

        // 判断是否需要排序
        let flag:boolean = true;

        // 从左边开始，两两比较，较大的数交换位置，往后挪。
        for(let start:number = 0; start < objectArray.length - sorted -1; start++){
            if(objectArray[start+1][byAttribute]<objectArray[start][byAttribute]){
                flag = false;
                exchangeArrayElement(objectArray,start,start+1);
            }
        }

        // 一趟下来没发生位置交换，即数组有序，直接返回
        if(flag) break;
    }

    return objectArray;
}

// 希尔排序
export function shellSort<T>(objectArray: T[], byAttribute: keyof T): T[] {
    const length = objectArray.length;
    let gap = Math.floor(length / 2);
  
    while (gap > 0) {
      for (let i = gap; i < length; i++) {
        const temp = objectArray[i];
        let j = i;
  
        while (j >= gap && objectArray[j - gap][byAttribute] > temp[byAttribute]) {
          objectArray[j] = objectArray[j - gap];
          j -= gap;
        }
  
        objectArray[j] = temp;
      }
  
      gap = Math.floor(gap / 2);
    }
    
    return objectArray;
}

// 交换元素
function exchangeArrayElement(arr:any[], first:number, second:number):any[] {
    if (Array.isArray(arr) && first >= 0 && first < arr.length && second >= 0 && second < arr.length) {
        const tempItem:any[] = arr[first];
        arr[first] = arr[second];
        arr[second] = tempItem;
    }
    return arr;
}

