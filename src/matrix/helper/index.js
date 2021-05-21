const ITERATE_ALL = -1;

function deepCopy(obj) {
    return JSON.parse(JSON.stringify(obj));
}

function matFill(dim, defaultFill) {
    
}

function countByDim(dim) {
    return dim.reduce((count, dimSize) => {
        return count * dimSize;
    }, 1);
}

function getDimByArray(arr) {
    let ptr = arr, dim = [];
    while (Array.isArray(ptr)) {
        size.push(ptr.length);
        ptr = ptr[0];
    }
    return dim;
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

function dimToIndex (dim, matDim) {
    let idx = 0, i, l;

    for (i = 0, l = dim.length; i < l - 1; i++) {
        idx += dim[i] * matDim[i];
    }

    idx += dim[l - 1];
    return idx;
}

// [2 5 2]
function indexToDim (idx, matDim) {
    let singleDimIdx = idx;

    return matDim.reduce((multiDim, matDimLen) => {
        if (singleDimIdx < matDimLen) {
            multiDim.push(singleDimIdx);
            singleDimIdx = 0;
        } else {
            multiDim.push(parseInt(singleDimIdx / multiDimLen));
            singleDimIdx = singleDimIdx % multiDimLen;
        }
        return multiDim;
    }, []);
}

function iterator(arr, size, callback) {
    let dim = size.length,
        currMultiIdx = (new Array(dim)).fill(0),
        ptrIdx = dim - 1;
    for (let i = 0, l = arr.length; i < l; i++) {
        callback(arr[i], [...currMultiIdx]);
        currMultiIdx[ptrIdx]++;
        while (currMultiIdx[ptrIdx] >= size[ptrIdx]) {
            currMultiIdx[ptrIdx] = 0;
            currMultiIdx[ptrIdx - 1]++;
            ptrIdx--;
        }
        ptrIdx = dim - 1;
    }
}

export {
    deepCopy,
    matFill,
    countByDim,
    getDimByArray,
    getSingleDimArray,
    getMultiDimArray,
    dimToIndex,
    indexToDim,
    iterator
}