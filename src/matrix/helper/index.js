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
        dim.push(ptr.length);
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

function getMultiDimArray (singleDimArr, dim) {
    let tempDim = [...dim], n = tempDim.pop(),
        remSize = tempDim.length,
        multiDimArr = singleDimArr;
    while (remSize) {
        let tempArr = [];
        for (let i = 0, l = multiDimArr.length; i < l; i += n) {
            tempArr.push(multiDimArr.slice(i, i + n));
        }
        multiDimArr = tempArr;
        n = tempDim.pop();
        remSize--;
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

    return [...matDim].reverse().reduce((multiDim, matDimLen) => {
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

function getValuesInWindow (arr, start, matWindow, matDim) {
    let windowLength = matWindow && countByDim(matWindow), windowLastDim = matWindow[matWindow.length - 1],
        incrWindow = matWindow && (windowLength / windowLastDim), values = [],
        startIdx = dimToIndex(start, matDim), lastMatDim = matDim[matDim.length - 1];

    for (let j = 0; j < incrWindow; j++) {
        values.push(...arr.slice(startIdx + (j * lastMatDim), startIdx + (j * lastMatDim) + windowLastDim));
    }

    return values;
}

function isMultiArrIterationCompatible(arr) {
    let initLength = Array.isArray(arr[0]) && arr[0].length,
        isCompatible = true;
    
    arr.forEach(innerArr => {
        if (innerArr.length !== initLength) {
            isCompatible = false;
            return false;
        }
    });

    return initLength && isCompatible;
}

function iterator(arr, dim, startIdx, incrementBy, iterWindow,callback) {
    let size = dim.length,
        currMultiIdx = (new Array(size)).fill(0),
        ptrIdx = size - 1,
        isMultiArr = isMultiArrIterationCompatible(arr);
    
    let windowLength = iterWindow && countByDim(iterWindow), windowLastDim = iterWindow && iterWindow[windowLength - 1],
        incrWindow = iterWindow && (windowLength / windowLastDim);

    for (let i = startIdx, l = isMultiArr ? arr[0].length : arr.length; i < l; i += incrementBy) {
        
        if (iterWindow && !isMultiArr) {
            let val = new Array(windowLength);

            for (let j = 0; j < incrWindow; j++) {
                val.push(...arr.slice(i + (j * incrWindow), i + (j * incrWindow) + windowLastDim));
            }

            callback(val, [...currMultiIdx]);
        } else if (isMultiArr) {
            callback(arr.map(subArr => subArr[i]), [...currMultiIdx]);
        } else {
            callback(arr[i], [...currMultiIdx]);
        }
        
        currMultiIdx[ptrIdx]++;
        while (currMultiIdx[ptrIdx] >= dim[ptrIdx]) {
            currMultiIdx[ptrIdx] = 0;
            currMultiIdx[ptrIdx - 1]++;
            ptrIdx--;
        }
        ptrIdx = size - 1;
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
    iterator,
    getValuesInWindow
}