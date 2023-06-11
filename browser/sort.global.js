const sortAlg = (function(){

    class SortedResult {
        array;
        constructor(array) {
            this.array = array;
        }
        print() {
            let a = [...this.array];
            console.log(a);
            return this;
        }
        getArray() {
            return this.array;
        }
        reverse() {
            this.array.reverse();
            return this;
        }
    }

    function exchangeArrayElement(arr, first, second) {
        if (Array.isArray(arr) && first >= 0 && first < arr.length && second >= 0 && second < arr.length) {
            const tempItem = arr[first];
            arr[first] = arr[second];
            arr[second] = tempItem;
        }
        return arr;
    }

    function selectSort(objectArray, byAttribute) {
        for (let insertTarget = 0; insertTarget < objectArray.length; insertTarget++) {
            let min = insertTarget;
            for (let searchTaget = insertTarget + 1; searchTaget < objectArray.length; searchTaget++) {
                if (objectArray[min][byAttribute] > objectArray[searchTaget][byAttribute])
                    min = searchTaget;
            }
            exchangeArrayElement(objectArray, insertTarget, min);
        }
        return new SortedResult(objectArray);
    }

    function insertSort(objectArray, byAttribute) {
        if (objectArray == null || objectArray.length < 2)
            return new SortedResult(objectArray);
        for (let sortItemIndex = 1; sortItemIndex < objectArray.length; sortItemIndex++) {
            let tempItem = objectArray[sortItemIndex];
            let exchangeTargetIndex = sortItemIndex - 1;
            while (exchangeTargetIndex >= 0 && objectArray[exchangeTargetIndex][byAttribute] > tempItem[byAttribute])
                exchangeTargetIndex--;
            for (let sortItemIndexCopy = sortItemIndex; sortItemIndexCopy > exchangeTargetIndex + 1; sortItemIndexCopy--)
                objectArray[sortItemIndexCopy] = objectArray[sortItemIndexCopy - 1];
            objectArray[exchangeTargetIndex + 1] = tempItem;
        }
        return new SortedResult(objectArray);
    }

    function bubbleSort(objectArray, byAttribute) {
        if (objectArray == null || objectArray.length < 2)
            return new SortedResult(objectArray);
        for (let sorted = 0; sorted < objectArray.length; sorted++) {
            let flag = true;
            for (let start = 0; start < objectArray.length - sorted - 1; start++) {
                if (objectArray[start + 1][byAttribute] < objectArray[start][byAttribute]) {
                    flag = false;
                    exchangeArrayElement(objectArray, start, start + 1);
                }
            }
            if (flag)
                break;
        }
        return new SortedResult(objectArray);
    }

    function shellSort(objectArray, byAttribute) {
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
        return new SortedResult(objectArray);
    }
    
    return { selectSort,insertSort,bubbleSort,shellSort }
})()