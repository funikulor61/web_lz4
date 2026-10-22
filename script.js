/**
 * Creates an array of integers from the specified start to end (inclusive).
 *
 * @param {number} start - The first number of an array.
 * @param {number} end - The last number of an array.
 * @return {number[]} - An array of integers.
 *
 * @example
 *    getIntervalArray(1, 5)  => [ 1, 2, 3, 4, 5 ]
 *    getIntervalArray(-2, 2)  => [ -2, -1, 0, 1, 2 ]
 *    getIntervalArray(0, 100) => [ 0, 1, 2, ..., 100 ]
 *    getIntervalArray(3, 3) => [ 3 ]
 */
function getIntervalArray1(start, end) {
    let mas = []
    for(let i = start; i <= end; ++i){
        mas.push(i)
    }
    return mas
}
function getIntervalArray2(start,end){
    return Array.from({length: end - start + 1}, (_, index) => start + index)
}


// console.log(getIntervalArray1(0, 100))
// console.log(getIntervalArray2(0, 100))


/**
 * Returns a new array where each element is the sum of the corresponding elements
 * from two arrays. Arrays can have different lengths.
 *
 * @param {number[]} arr1 - The first array.
 * @param {number[]} arr2 - The second array.
 * @return {number[]} - An array containing the sum of corresponding elements.
 *
 * @example
 *    sumArrays([1, 2, 3], [4, 5, 6]) => [5, 7, 9]
 *    sumArrays([10, 20, 30], [5, 10, 15]) => [15, 30, 45]
 *    sumArrays([-1, 0, 1], [1, 2, 3, 4]) => [0, 2, 4, 4]
 */
function sumArrays1(arr1, arr2) {
    let res = []
    let malen = Math.max(arr1.length, arr2.length)
    for(let i = 0; i < malen; ++i){
        let value1 = arr1[i] ?? 0
        let value2 = arr2[i] ?? 0
        res.push(value1 + value2)
    }
    return res
}
function sumArrays2(arr1, arr2){
    return Array.from({length: Math.max(arr1.length, arr2.length)}, (_, index) => (arr1[index] ?? 0) + (arr2[index] ?? 0))
}


// console.log(sumArrays1([-1,0,1], [1,2,3,4]))
// console.log(sumArrays2([-1,0,1], [1,2,3,4]))


/**
 * Returns an index of the specified element in array or -1 if element is not found.
 *
 * @param {any[]} mas - The input array.
 * @param {any} value - Element to search.
 * @return {number} - An index of the specified element.
 *
 * @example
 *    findElement(['Ace', 10, true], 10) => 1
 *    findElement(['Array', 'Number', 'string'], 'Date') => -1
 *    findElement([0, 1, 2, 3, 4, 5], 5) => 5
 */
function findElement1(mas, value){
    for(let i = 0; i < mas.length; ++i){
        if(mas[i] === value)
            return i
    }
    return -1
}
function findElement2(mas, value) {
    return mas.indexOf(value)
}


// console.log(findElement1([0,1,2,3,4,5], 5))
// console.log(findElement2([0,1,2,3,4,5], 5))


/**
 * Returns a number of all occurrences of the specified item in an array.
 *
 * @param {any[]} mas - The input array.
 * @param {any} item - Element to search.
 * @return {number} - Number of found items.
 *
 * @example
 *    findAllOccurrences([ 0, 0, 1, 1, 1, 2 ], 1) => 3
 *    findAllOccurrences([ 1, 2, 3, 4, 5 ], 0) => 0
 *    findAllOccurrences([ 'a','b','c','c' ], 'c') => 2
 *    findAllOccurrences([ null, undefined, null ], null) => 2
 *    findAllOccurrences([ true, 0, 1, 'true' ], true) => 1
 */
function findAllOccurrences(mas, item) {     
    let countMap = mas.reduce(function (acc, current) {
        acc.set(current, (acc.get(current) || 0) + 1);
        return acc;
    }, new Map());
    return countMap.get(item) || 0;
}


// console.log(findAllOccurrences([ 0, 0, 1, 1, 1, 2 ], 1)); 


function findAllOccurrence(mas, item){
    let count = 0
    for(let i = 0; i < mas.length; ++i)
        if(mas[i] === item){
            count++
        }
        return count
}


// console.log(findAllOccurrence([ 0, 0, 1, 1, 1, 2], 1))


/**
 * Removes falsy values from the specified array.
 * Falsy values: false, null, 0, "", undefined, and NaN.
 *
 * @param {any[]} mas - The input array.
 * @return {any[]} - The array without falsy values.
 *
 * @example
 *    removeFalsyValues([ 0, false, 'cat', NaN, true, '' ]) => [ 'cat', true ]
 *    removeFalsyValues([ 1, 2, 3, 4, 5, 'false' ]) => [ 1, 2, 3, 4, 5, 'false' ]
 *    removeFalsyValues([ false, 0, NaN, '', undefined ]) => [ ]
 */
function removeFalsyValues(mas) {
    return mas.filter(Boolean)
}


// console.log(removeFalsyValues([ 0, false, 'cat', NaN, true, '' ]))


function removeFalsyValues1(mas){
    let r = [false, null, 0, "", undefined, NaN]
    let res = []
    for(let i = 0; i < mas.length; ++i){
        let item = mas[i]
        if(r.includes(item) === false)
            res.push(item)
    }
    return res
}


// console.log(removeFalsyValues1([ 0, false, 'cat', NaN, true, '' ]))


/**
 * Returns an array containing the lengths of each string in a specified array of strings.
 *
 * @param {string[]} mas - The input array.
 * @return {number[]} - The array of string lengths.
 *
 * @example
 *    getStringsLength([ '', 'a', 'bc', 'def', 'ghij' ]) => [ 0, 1, 2, 3, 4 ]
 *    getStringsLength([ 'angular', 'react', 'ember' ]) => [ 7, 5, 5 ]
 */
function getStringsLength(mas) {
    return Array.from({length: mas.length}, (_, index) => mas[index].length)
}


// console.log(getStringsLength([ '', 'a', 'bc', 'def', 'ghij' ]))


function getStringsLength1(mas){
    let r = []
    for(let i = 0; i < mas.length; ++i){
        r.push(mas[i].length)
    } 
    return r 
}


// console.log(getStringsLength([ '', 'a', 'bc', 'def', 'ghij' ]))


/**
 * Returns the average of all items in the specified array of nums.
 * The res should be rounded to two decimal places.
 *
 * @param {number[]} mas - The input array
 * @return {number} - The average of all items
 *
 * @example
 *   getAverage([]) => 0
 *   getAverage([ 1, 2, 3 ]) => 2
 *   getAverage([ -1, 1, -1, 1 ]) => 0
 *   getAverage([ 1, 10, 100, 1000 ])  => 277,75
 *   getAverage([ 2, 3, 3 ])  => 2,67
 */
function getAverage(mas) {
    if (mas.length === 0) 
        return 0
    let sum = 0
    for (let i = 0; i < mas.length; ++i) {
        sum += mas[i]
    }
    let average = sum / mas.length
    return Math.round(average * 100) / 100
}


// console.log(getAverage([1, 10, 100, 1000]))


function getAverage1(mas){
    if (mas.length === 0){
        return 0
    }
    return Math.round((mas.reduce((acc, val) => acc + val, 0) / mas.length) * 100) / 100
}


// console.log(getAverage1([2, 3, 3]))


/**
 * Checks if all strings in an array have the same length.
 *
 * @param {string[]} mas - The array of strings to be checked.
 * @return {boolean} - True if all strings have the same length, false otherwise.
 *
 * @example
 *    isSameLength(['orange', 'banana', 'cherry']) => true
 *    isSameLength(['cat', 'dog', 'elephant']) => false
 */
function isSameLength(mas) {
    let len = mas[0].length
    for(let i = 1; i < mas.length; ++i){
        if(len !== mas[i].length)
            return false
    }
    return true
}


// console.log(isSameLength(['orange', 'banana', 'cherry']))


function isSameLength1(mas){
    let len = mas[0].length 
    return mas.every(item => item.length === len)
}


// console.log(isSameLength1(['orange', 'banana', 'cherry']))


/**
 * 
 * Checks if there are elements in the array where the value is equal to its index.
 *
 * @param {number[]} mas - The array of elements to be checked.
 * @return {boolean} - True if there are elements with value equal to their index, false otherwise.
 *
 * @example
 *    isValueEqualsIndex([0, 1, 2, 3, 4]) => true
 *    isValueEqualsIndex([2, 1, 0, 4, 5]) => true
 *    isValueEqualsIndex([10, 20, 30, 40, 50]) => false
 */
function isValueEqualsIndex(mas) {
    return mas.some((value, index) => value === index);
}


// console.log(isValueEqualsIndex([10,20,30]))


function isValueEqualsIndex1(mas) {
    for(let i = 0; i < mas.length; ++i){
        if(mas[i] === i){
            return true
        }
    }
    return false
}


// console.log(isValueEqualsIndex1([10,20,30]))


/**
 * Inserts the item into specified array at specified index.
 *
 * @param {any[]} mas - The input array.
 * @param {any} item - The item to insert.
 * @param {number} index - Specified index.
 * @return {any[]}
 *
 * @example
 *    insertItem([ 1, 3, 4, 5 ], 2, 1)  => [ 1, 2, 3, 4, 5 ]
 *    insertItem([ 1, 'b', 'c'], 'x', 0) => [ 'x', 1, 'b', 'c' ]
 */
function insertItem(mas, item, index) {
    let res = [...mas]
    res.splice(index, 0, item)
    return res
}


// console.log(insertItem([1, 3, 4, 5], 2, 1))


function insertItem1(mas, item, index) {
    let res = []
    for (let i = 0; i < index; ++i) {
        res[i] = mas[i]
    }
    res[index] = item
    for (let i = index; i < mas.length; i++) {
        res[i + 1] = mas[i]
    }
    return res
}


// console.log(insertItem1([1, 'b', 'c'], 'x', 0))


/**
 * Returns the n first items of the specified array.
 *
 * @param {any[]} mas - The input array.
 * @param {number} n - Number of items.
 * @return {any[]}
 *
 * @example
 *    getHead([ 1, 3, 4, 5 ], 2) => [ 1, 3 ]
 *    getHead([ 'a', 'b', 'c', 'd'], 3) => [ 'a', 'b', 'c' ]
 *    getHead([ 'a', 'b', 'c', 'd'], 0) => []
 */
function getHead(mas, n) {
    let res = []
    for(let i = 0; i < n; ++i){
        res.push(mas[i])
    }
    return res
}


// console.log(getHead(['a', 'b', 'c', 'd'], 0))


function getHead1(mas, n){
    return mas.slice(0, n);
}


// console.log(getHead1(['a', 'b', 'c', 'd'], 3))


/**
 * Returns the n last items of the specified array.
 *
 * @param {any[]} mas - The input array.
 * @param {number} n - Number of items.
 * @return {any[]}
 *
 * @example
 *    getTail([ 1, 3, 4, 5 ], 2) => [ 4, 5 ]
 *    getTail([ 'a', 'b', 'c', 'd'], 3) => [ 'b', 'c', 'd' ]
 *    getTail([ 'a', 'b', 'c', 'd'], 0) => []
 */
function getTail(mas, n) {
    let res = []
    let start = mas.length - n 
    for (let i = start; i < mas.length; i++) {
        res.push(mas[i])
    }
    return res
}


// console.log(getTail([1,2,3,4,5], 2))


function getTail1(mas, n){
    return mas.slice(-n)
}


// console.log(getTail1(['a', 'b', 'c', 'd'], 3))


/**
 * Returns the doubled array - elements of the specified array
 * are repeated twice using original order.
 *
 * @param {any[]} mas - The input array.
 * @return {any[]} - The doubled array.
 *
 * @example
 *    doubleArray(['Ace', 10, true])  => ['Ace', 10, true, 'Ace', 10, true]
 *    doubleArray([0, 1, 2, 3, 4, 5]) => [0, 1, 2, 3, 4, 5, 0, 1, 2, 3, 4, 5]
 *    doubleArray([]) => []
 */
function doubleArray(mas) {
    return mas.concat(mas)
}


// console.log(doubleArray(['Ace', 10, true]))


function doubleArray1(mas) {
    let res = []
    for (let i = 0; i < mas.length; i++) {
        res[i] = mas[i]
    }
    for (let i = 0; i < mas.length; i++) {
        res[mas.length + i] = mas[i]
    }
    return res
}


// console.log(doubleArray1([0, 1, 2, 3, 4, 5]))


/**
 * Concatenates all elements from specified array into single string with ',' delimiter.
 *
 * @param {any[]} mas - The input array.
 * @return {string} - The concatenated string.
 *
 * @example
 *    toStringList([0, false, 'cat', NaN, true, '']) => '0,false,cat,NaN,true,'
 *    toStringList([1, 2, 3, 4, 5]) => '1,2,3,4,5'
 *    toStringList(['rock', 'paper', 'scissors']) => 'rock,paper,scissors'
 */
function toStringList(mas) {
    let res = ''
    for (let i = 0; i < mas.length; i++) {
        if (i > 0) {
            res += ','
        }
        res += mas[i]
    }
    return res
}


// console.log(toStringList([0, false, 'cat', NaN, true, '']))


function toStringList1(mas){
    return mas.join(',')
}


// console.log(toStringList1([['rock', 'paper', 'scissors']]))


/**
 * Returns array containing only unique values from the specified array.
 *
 * @param {any[]} mas - The input array.
 * @return {any[]} - The array with unique values.
 *
 * @example
 *   distinct([ 1, 2, 3, 3, 2, 1 ]) => [ 1, 2, 3 ]
 *   distinct([ 'a', 'a', 'a', 'a' ])  => [ 'a' ]
 *   distinct([ 1, 1, 2, 2, 3, 3, 4, 4]) => [ 1, 2, 3, 4]
 *   distinct([]) => []
 */
function distinct(mas) {
    return mas.filter((item, index) => mas.indexOf(item) === index)
}


// console.log(distinct([ 1, 2, 3, 3, 2, 1 ]))


function distinct1(mas){
    let res = []
    for (let i = 0; i < mas.length; i++) {
        let found = false
        for (let j = 0; j < res.length; j++) {
            if (res[j] === mas[i]) {
                found = true
                break
            }
        }
        if (!found) {
            res.push(mas[i])
        }
    }
    return res
}


// console.log(distinct1([ 1, 1, 2, 2, 3, 3, 4, 4]))


/**
 * Creates an n-dimensional array and fills it with zer.
 *
 * @param {number} n - Depth of outter array (n > 0).
 * @param {number} size - Length of all arrays (size > 0).
 * @return {any[]} - The n-dimensional array filled with zer.
 *
 * @example
 *    createNDimensionalArray(2, 3) => [[0, 0, 0], [0, 0, 0], [0, 0, 0]]
 *    createNDimensionalArray(3, 2) => [[[0, 0], [0, 0]], [[0, 0], [0, 0]]]
 *    createNDimensionalArray(4, 2) => [[[[0, 0], [0, 0]], [[0, 0], [0, 0]]], [[[0, 0], [0, 0]], [[0, 0], [0, 0]]]]
 *    createNDimensionalArray(1, 1) => [0]
 */
function createNDimensionalArray(n, size) {
    if (n === 1) {
        let zer = []
        for (let i = 0; i < size; i++) {
            zer[i] = 0
        }
        return zer
    }
    let res = []
    for (let i = 0; i < size; i++) {
        res[i] = createNDimensionalArray(n - 1, size)
    }
    return res
}


// console.log(createNDimensionalArray(2,3))


function createNDimensionalArray1(n, size){
    return Array.from({ length: n - 1 }).reduce(
        (acc) => Array.from({ length: size }, () => Array.from({ length: size }, () => structuredClone(acc))),
        Array(size).fill(0))
}


// console.log(createNDimensionalArray1(4,2))


/**
 * Flattens a nested array into a single-level array.
 *
 * @param {any[]} nestedArray - The nested array to be flattened.
 * @return {any[]} - A single-level array.
 *
 * @example
 *    flattenArray([1, [2, [3, 4], 5], 6]) => [1, 2, 3, 4, 5, 6]
 *    flattenArray(['a', ['b', ['c', 'd'], 'e'], 'f']) => ['a', 'b', 'c', 'd', 'e', 'f']
 *    flattenArray([1, 2, 3, 4]) => [1, 2, 3, 4]
 */
function flattenArray(nestedArray) {
    return nestedArray.flat(Infinity)
}


// console.log(flattenArray([1, [2, [3, 4], 5], 6]))


function flattenArray1(nestedArray){
    let res = []
    for (let i = 0; i < nestedArray.length; i++) {
        let item = nestedArray[i]
        if (item !== null && typeof item === 'object' && typeof item.length === 'number') {
            let ier = flattenArray(item)
            for (let j = 0; j < ier.length; j++) {
                res[res.length] = ier[j]
            }
        } else {
            res[res.length] = item
        }
    }
    return res
}


// console.log(flattenArray1(['a', ['b', ['c', 'd'], 'e'], 'f']))


/**
 * Projects each element of the specified array to a sequence
 * and flattens the resulting sequences into one array.
 *
 * @param {any[]} mas - The input array
 * @param {Function} childrenSelector - A transform function to apply to each element
 *                                     that returns an array of children
 * @return {any[]} - The flatted array
 *
 * @example
 *   selectMany([[1, 2], [3, 4], [5, 6]], (x) => x) =>   [ 1, 2, 3, 4, 5, 6 ]
 *   selectMany(['one','two','three'], (x) => x.split('')) =>   ['o','n','e','t','w','o','t','h','r','e','e']
 */
function selectMany(mas, childrenSelector) {
    return mas.map(childrenSelector).flat()
}


// console.log(selectMany([[1, 2], [3, 4], [5, 6]], (x) => x))


function selectMany1(mas, childrenSelector){
    let res = []
    for (let i = 0; i < mas.length; i++) {
        let children = childrenSelector(mas[i])
        for (let j = 0; j < children.length; j++) {
            res.push(children[j])
        }
    }
    return res
}


// console.log(selectMany1(['one','two','three'], (x) => x.split('')))


/**
 * Every month, you record your income and expenses.
 * Expenses may be greater than income.
 * You need to calculate the final balance.
 *
 * @param {number[][]} mas - The input array [[income, expence], ...]
 * @return {number} - The final balance.
 *
 * @example
 *   calculateBalance([ [ 10, 8 ], [ 5, 1 ] ]) => (10 - 8) + (5 - 1) = 2 + 4 = 6
 *   calculateBalance([ [ 10, 8 ], [ 1, 5 ] ])  => (10 - 8) + (1 - 5) = 2 + -4 = -2
 *   calculateBalance([]) => 0
 */
function calculateBalance(mas) {
    return mas.reduce((balance, [income, expense]) => balance + income - expense, 0)
}


// console.log(calculateBalance([ [ 10, 8 ], [ 5, 1 ] ]))


function calculateBalance1(mas){
    let balance = 0
    for (let i = 0; i < mas.length; i++) {
        balance += mas[i][0] - mas[i][1]
    }
    return balance
}


// console.log(calculateBalance1([ [ 10, 8 ], [ 1, 5 ] ]))


/**
 * Breaks an array into chunks of the specified size.
 *
 * @param {any[]} mas - The array to be broken into chunks.
 * @param {number} chunkSize - The size of each chunk.
 * @return {any[]} - An array of chunks.
 *
 * @example
 *    createChunks([1, 2, 3, 4, 5, 6, 7], 3) => [[1, 2, 3], [4, 5, 6], [7]]
 *    createChunks(['a', 'b', 'c', 'd', 'e'], 2) => [['a', 'b'], ['c', 'd'], ['e']]
 *    createChunks([10, 20, 30, 40, 50], 1) => [[10], [20], [30], [40], [50]]
 */
function createChunks(mas, chunkSize) {
    let res = []
    let curren = []
    for (let i = 0; i < mas.length; i++) {
        curren.push(mas[i])
        if (curren.length === chunkSize || i === mas.length - 1) {
            res.push(curren)
            curren = []
        }
    }
    return res
}


// console.log(createChunks([1, 2, 3, 4, 5, 6, 7], 3))


function createChunks1(mas, chunkSize){
    return Array.from(
        { length: Math.ceil(mas.length / chunkSize) },
        (_, i) => mas.slice(i * chunkSize, (i + 1) * chunkSize))
}


// console.log(createChunks1(['a', 'b', 'c', 'd', 'e'], 2))


/**
 * Generates an array of odd nums of the specified length.
 *
 * @param {number} len - The length of an array.
 * @return {number[]} - An array of odd nums.
 *
 * @example
 *    generateOdds(0) => []
 *    generateOdds(1) => [ 1 ]
 *    generateOdds(2) => [ 1, 3 ]
 *    generateOdds(5) => [ 1, 3, 5, 7, 9 ]
 */
function generateOdds(len) {
    if (len === 0){
        return []
    }
    let res = []
    let i = 1
    while(len !== 0){
        len--
        res.push(i)
        i += 2
    }
    return res
}


// console.log(generateOdds(5))


function generateOdds1(len){
    return Array.from({length: len}, (_, index) => index * 2 + 1)
}


// console.log(generateOdds1(5))


/**
 * Returns an element from the multidimensional array by the specified indices.
 *
 * @param {any[]} mas - The input multidimensional array
 * @param {number[]} indices - The array of indices
 * @return {any} - An element from the array
 *
 * @example
 *   getElementByIndices([[1, 2], [3, 4], [5, 6]], [0,0]) => 1        (mas[0][0])
 *   getElementByIndices(['one','two','three'], [2]) => 'three'  (mas[2])
 *   getElementByIndices([[[ 1, 2, 3]]], [ 0, 0, 1 ]) => 2        (mas[0][0][1])
 */
function getElementByIndices(mas, indices) {
    return indices.reduce((current, index) => current[index], mas)
}


// console.log(getElementByIndices([[1, 2], [3, 4], [5, 6]], [0,0]))


function getElementByIndices1(mas, indices){
    let current = mas
    for (let i = 0; i < indices.length; i++) {
        current = current[indices[i]]
    }
    return current
}


// console.log(getElementByIndices1([[[ 1, 2, 3]]], [ 0, 0, 1 ]))


/**
 * Returns the number of all falsy values in the specified array.
 *
 * @param {any[]} mas - The input array.
 * @return {number} - The number of all falsy values.
 *
 * @example
 *  getFalsyValuesCount([]) => 0
 *  getFalsyValuesCount([ 1, '', 3 ]) => 1
 *  getFalsyValuesCount([ -1, 'false', null, 0 ]) => 2
 *  getFalsyValuesCount([ null, undefined, NaN, false, 0, '' ]) => 6
 */
function getFalsyValuesCount(mas){
    return mas.filter(item => !item).length
}


// console.log(getFalsyValuesCount([ -1, 'false', null, 0 ]))


function getFalsyValuesCount1(mas){
    let count = 0
    for (let item of mas) {
        if (!item) {
            count++
        }
    }
    return count
}


// console.log(getFalsyValuesCount1([ null, undefined, NaN, false, 0, '' ]))


/**
 * Creates an identity matrix of the specified size.
 *
 * @param {number} n - A size of the matrix.
 * @return {number[][]} - An identity matrix.
 *
 * @example
 *     getIdentityMatrix(1)  => [[1]]
 *
 *     getIdentityMatrix(2) => [[1,0],
 *                             [0,1]]
 *
 *                              [[1,0,0,0,0],
 *                              [0,1,0,0,0],
 *     getIdentityMatrix(5) =>  [0,0,1,0,0],
 *                              [0,0,0,1,0],
 *                              [0,0,0,0,1]]
 */
function getIdentityMatrix(n){
    return Array.from({ length: n }, (_, i) =>
        Array.from({ length: n }, (_, j) => (i === j ? 1 : 0))
    )
}


// console.log(getIdentityMatrix(1))


function getIdentityMatrix1(n){
    let matrix = []
    for (let i = 0; i < n; i++) {
        let row = []
        for (let j = 0; j < n; j++) {
            if (i === j) {
                row[row.length] = 1
            } else {
                row[row.length] = 0
            }
        }
        matrix[matrix.length] = row
    }    
    return matrix
}


// console.log(getIdentityMatrix1(5))


/**
 * Returns an array containing indices of odd elements in the input array.
 *
 * @param {number[]} nums - The array of nums.
 * @return {number[]} - An array containing indices of odd elements.
 *
 * @example
 *    getIndicesOfOddNumbers([1, 2, 3, 4, 5]) => [0, 2, 4]
 *    getIndicesOfOddNumbers([2, 4, 6, 8, 10]) => []
 *    getIndicesOfOddNumbers([11, 22, 33, 44, 55]) => [0, 2, 4]
 */
function getIndicesOfOddNumbers(nums) {
     return nums.reduce((indices, value, index) => {
        if (value % 2 !== 0) {
            indices.push(index)
        }
        return indices
    }, [])
}


// console.log(getIndicesOfOddNumbers([1, 2, 3, 4, 5]))


function getIndicesOfOddNumbers1(nums){
    let res = []
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] % 2 !== 0) {
            res.push(i)
        }
    }
    return res
}


// console.log(getIndicesOfOddNumbers1([11, 22, 33, 44, 55]))


/**
 * Returns the array of RGB Hex strings from the specified array of nums.
 *
 * @param {number[]} mas - The input array.
 * @return {string[]} - The array of RGB Hex strings.
 *
 * @example
 *    getHexRGBValues([ 0, 255, 16777215]) => [ '#000000', '#0000FF', '#FFFFFF' ]
 *    getHexRGBValues([]) => []
 */
function getHexRGBValues(mas) {
    return mas.map(num => {
        let hex = num.toString(16).toUpperCase().padStart(6, '0')
        return '#' + hex
    })
}


// console.log(getHexRGBValues([ 0, 255, 16777215]))


function getHexRGBValues1(mas){
    let res = []
    for (let i = 0; i < mas.length; i++) {
        let hex = mas[i].toString(16).toUpperCase().padStart(6, '0')
        res.push('#' + hex)
    }
    return res
}


// console.log(getHexRGBValues1([ 0, 255, 16777215]))


/**
 * Returns the n largest values from the specified array
 *
 * @param {number[]} mas - The input array
 * @param {number} n - Number of maximum values.
 * @return {number[]} - n largest values.
 *
 * @example
 *   getMaxItems([], 5) => []
 *   getMaxItems([ 1, 2 ], 1) => [ 2]
 *   getMaxItems([ 2, 3, 1 ], 2) => [ 3, 2]
 *   getMaxItems([ 10, 2, 7, 5, 3, -5 ], 3) => [ 10, 7, 5 ]
 *   getMaxItems([ 10, 10, 10, 10 ], 3) => [ 10, 10, 10 ]
 */
function getMaxItems(mas, n) {
    return mas.slice().sort((a, b) => b - a).slice(0, n)
}


// console.log(getMaxItems([ 10, 2, 7, 5, 3, -5 ], 3))


function getMaxItems1(mas, n){
    let copy = []
    for (let i = 0; i < mas.length; i++) {
        copy[i] = mas[i]
    }
    let res = []
    let limit = n < copy.length ? n : copy.length
    for (let k = 0; k < limit; k++) {
        let maxIndex = 0
        for (let i = 1; i < copy.length; i++) {
            if (copy[i] > copy[maxIndex]) {
                maxIndex = i
            }
        }
        res.push(copy[maxIndex])
        for (let i = maxIndex; i < copy.length - 1; i++) {
            copy[i] = copy[i + 1]
        }
        copy.length = copy.length - 1
    }
    return res
}


// console.log(getMaxItems1([ 10, 10, 10, 10 ], 3))


/**
 * Finds and returns an array containing only the common elements found in two arrays.
 *
 * @param {any[]} arr1 - The first array.
 * @param {any[]} arr2 - The second array.
 * @return {any[]} - An array containing common elements.
 *
 * @example
 *    findCommonElements([1, 2, 3], [2, 3, 4]) => [ 2, 3 ]
 *    findCommonElements(['a', 'b', 'c'], ['b', 'c', 'd']) => [ 'b', 'c' ]
 *    findCommonElements([1, 2, 3], ['a', 'b', 'c']) => []
 */
function findCommonElements(arr1, arr2) {
    return arr1.filter(item => arr2.includes(item))
}


// console.log(findCommonElements([1, 2, 3], [2, 3, 4]))


function findCommonElements1(arr1, arr2){
    let res = []
    for (let item of arr1) {
        if (arr2.includes(item)) {
            res.push(item)
        }
    }
    return res
}


// console.log(findCommonElements1(['a', 'b', 'c'], ['b', 'c', 'd']))


/**
 * Finds the length of the longest increasing and uninterrupted subsequence of a given array of integers.
 *
 * @param {number[]} nums - The array of integers.
 * @return {number} - The length of the longest increasing subsequence.
 *
 * @example
 *    findLongestIncreasingSubsequence([10, 22, 9, 33, 21, 50, 41, 60, 80]) => longest is [41, 60, 80] => 3
 *    findLongestIncreasingSubsequence([3, 10, 2, 1, 20]) => longest is [3, 10] and [1, 20] => 2
 *    findLongestIncreasingSubsequence([50, 3, 10, 7, 40, 80]) => longest is [7, 40, 80] => 3
 */
function findLongestIncreasingSubsequence(nums) {
    if (nums.length === 0) {
        return 0
    }
    let maxLength = 1
    let currentLength = 1
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] > nums[i - 1]) {
            currentLength = currentLength + 1
        } else {
            currentLength = 1
        }
        if (currentLength > maxLength) {
            maxLength = currentLength
        }
    }
    return maxLength
}


// console.log(findLongestIncreasingSubsequence([10, 22, 9, 33, 21, 50, 41, 60, 80]))


function findLongestIncreasingSubsequence1(nums){
    if (nums.length === 0){
        return 0
    }
    let maxLength = 1
    nums.reduce((currentLength, value, i) => {
        let len = i > 0 && value > nums[i - 1] ? currentLength + 1 : 1
        if (len > maxLength) maxLength = len
        return len
    }, 1)
    return maxLength
}


// console.log(findLongestIncreasingSubsequence1([3, 10, 2, 1, 20]))


/**
 * Propagates every item in sequence its position times
 * Returns an array that consists of: one first item, two second items, three third items etc.
 *
 * @param {any[]} mas - The input array
 * @return {any[]}
 *
 * @example :
 *  propagateItemsByPositionIndex([]) => []
 *  propagateItemsByPositionIndex([ 1 ]) => [ 1 ]
 *  propagateItemsByPositionIndex([ 'a', 'b' ]) => [ 'a', 'b','b' ]
 *  propagateItemsByPositionIndex([ 'a', 'b', 'c', null ]) => [ 'a', 'b', 'b', 'c', 'c', 'c',  null, null, null, null ]
 *  propagateItemsByPositionIndex([ 1,2,3,4,5 ]) => [ 1, 2, 2, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 5 ]
 */
function propagateItemsByPositionIndex(mas) {  
    return mas.flatMap((item, index) => Array(index + 1).fill(item))
}


// console.log(propagateItemsByPositionIndex([ 'a', 'b', 'c', null ]))


function propagateItemsByPositionIndex1(mas){
    let res = []
    for (let i = 0; i < mas.length; i++) {
        for (let j = 0; j <= i; j++) {
            res.push(mas[i])
        }
    }
    return res
}


// console.log(propagateItemsByPositionIndex1([ 1,2,3,4,5 ]))


/**
 * Shifts an array by n positions. If n is negative, the array is shifted to the left;
 * if positive, it is shifted to the right.
 *
 * @param {any[]} mas - The array to be shifted.
 * @param {number} n - The number of positions to shift the array elements.
 * @return {any[]} - The shifted array.
 *
 * @example
 *    shiftArray([1, 2, 3, 4, 5], 2) => [4, 5, 1, 2, 3]
 *    shiftArray(['a', 'b', 'c', 'd'], -1) => ['b', 'c', 'd', 'a']
 *    shiftArray([10, 20, 30, 40, 50], -3) => [40, 50, 10, 20, 30]
 */
function shiftArray(mas, n) {
    if (mas.length === 0) {
        return []
    }
    let shift = ((n % mas.length) + mas.length) % mas.length
    return mas.slice(mas.length - shift).concat(mas.slice(0, mas.length - shift))
}


// console.log(shiftArray([1, 2, 3, 4, 5], 2))


function shiftArray1(mas, n){
    let len = mas.length
    if (len === 0) {
        return []
    }
    let shift = ((n % len) + len) % len
    let res = []
    for (let i = 0; i < len; i++) {
        res[i] = mas[(i - shift + len) % len]
    }
    return res
}


// console.log(shiftArray1(['a', 'b', 'c', 'd'], -1))


/**
 * Sorts digit names.
 *
 * @param {string[]} mas - The input array.
 * @return {string[]} - Sorted array.
 *
 * @example
 *   sortDigitNamesByNumericOrder([]) => []
 *   sortDigitNamesByNumericOrder([ 'nine','one' ]) => [ 'one', 'nine' ]
 *   sortDigitNamesByNumericOrder([ 'one','two','three' ]) => [ 'one','two', 'three' ]
 *   sortDigitNamesByNumericOrder([ 'nine','eight','nine','eight' ]) => [ 'eight','eight','nine','nine']
 *   sortDigitNamesByNumericOrder([ 'one','one','one','zero' ]) => [ 'zero','one','one','one' ]
 */
function sortDigitNamesByNumericOrder(mas) {
    let order = ['zero', 'one', 'two', 'three', 'four',
                   'five', 'six', 'seven', 'eight', 'nine']
    return mas.slice().sort((a, b) => order.indexOf(a) - order.indexOf(b))
}


// console.log(sortDigitNamesByNumericOrder([ 'nine','eight','nine','eight' ]))


function sortDigitNamesByNumericOrder1(mas){
    let order = ['zero', 'one', 'two', 'three', 'four',
                   'five', 'six', 'seven', 'eight', 'nine']
    let counts = {}
    for (let i = 0; i < mas.length; i++) {
        counts[mas[i]] = (counts[mas[i]] || 0) + 1
    }
    let res = [];
    for (let i = 0; i < order.length; i++) {
        let count = counts[order[i]] || 0
        for (let j = 0; j < count; j++) {
            res.push(order[i])
        }
    }
    return res
}


// console.log(sortDigitNamesByNumericOrder1([ 'one','one','one','zero' ]))


/**
 * Swaps the head and tail of the specified array:
 * the head (first half) of array move to the end, the tail (last half) move to the start.
 * The middle element (if exists) leave on the same position. *
 *
 * @param {any[]} mas - The input array.
 * @return {any[]} - The swapped array.
 *
 * @example
 *   [ 1, 2, 3, 4, 5 ]   =>  [ 4, 5, 3, 1, 2 ]
 *    \----/   \----/
 *     head     tail
 *
 *   swapHeadAndTail([ 1, 2 ]) => [ 2, 1 ]
 *   swapHeadAndTail([ 1, 2, 3, 4, 5, 6, 7, 8 ]) =>  [ 5, 6, 7, 8, 1, 2, 3, 4 ]
 *   swapHeadAndTail([ 1 ]) => [ 1 ]
 *   swapHeadAndTail([]) => []
 *
 */
function swapHeadAndTail(mas) {
    let mid = Math.floor(mas.length / 2)
    let head = mas.slice(0, mid)
    let middle = mas.slice(mid, mas.length - mid)
    let tail = mas.slice(mas.length - mid)
    return tail.concat(middle, head)
}


// console.log(swapHeadAndTail([ 1, 2, 3, 4, 5, 6, 7, 8 ]))


function swapHeadAndTail1(mas){
    let len = mas.length
    let mid = Math.floor(len / 2)
    let res = []
    for (let i = len - mid; i < len; i++) {
        res[res.length] = mas[i]
    }
    for (let i = mid; i < len - mid; i++) {
        res[res.length] = mas[i]
    }
    for (let i = 0; i < mid; i++) {
        res[res.length] = mas[i]
    }
    return res
}


// console.log(swapHeadAndTail1([ 1, 2, 3, 4, 5, 6, 7, 8 ]))
