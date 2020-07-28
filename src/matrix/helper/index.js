function deepCopy(obj) {
    return JSON.parse(JSON.stringify(obj));
}

function matFill(dim, defaultFill) {
    
}

function countBySize(size) {
    return size.reduce((count, sub) => {
        return count * sub;
    }, 1);
}

function getSizeByArray(arr) {
    let ptr = arr, size = [];
    while (Array.isArray(ptr)) {
        size.push(ptr.length);
        ptr = ptr[0];
    }
    return size;
}

function getSingleDimArray (multiDimArr, dim) {
    let singleDimArr = multiDimArr;
    if (!dim) {
        dim = getSizeByArray(multiDimArr).length;
    }
    for (let i = 0; i < dim; i++) {
        singleDimArr = singleDimArr.flat();
    }
    return singleDimArr;
}

function getMultiDimArray (singleDimArr, size) {
    let tempSize = [...size], n = tempSize.pop(),
        remDim = tempSize.length,
        multiDimArr = singleDimArr;
    while (remDim) {
        let tempArr = [];
        for (let i = 0, l = multiDimArr.length; i < l; i += n) {
            tempArr.push(multiDimArr.slice(i, i + n));
        }
        multiDimArr = tempArr;
        n = tempSize.pop();
        remDim--;
    }
    return multiDimArr;
}

function sizeToIndex () {

}

function indexToSize () {

}

export {
    deepCopy,
    matFill,
    countBySize,
    getSizeByArray,
    getSingleDimArray,
    getMultiDimArray,
    sizeToIndex,
    indexToSize
}