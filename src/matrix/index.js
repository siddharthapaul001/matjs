import { matFill, deepCopy, countByDim, getDimByArray, getSingleDimArray,
    getMultiDimArray, 
    iterator, dimToIndex, getValuesInWindow} from './helper';

export default class Matrix {
    constructor(arr, defaultFill) {
        this._arr = []; this._dim;
        this._startIdx = 0; this._incrementBy = 1;

        if (typeof defaultFill === 'number') {
            // expecting arr is a single dimension Array specifing dimension
            this._arr = (new Array(countByDim(arr))).fill(defaultFill);
            this._dim = [...arr];
        } else if (Array.isArray(defaultFill) && countByDim(defaultFill) === arr.length) {
            this._dim = [...defaultFill];
            this._arr = [...arr];
        } else {
            this.setValues(arr);
        }

    }

    dim () {
        return this._dim;
    }

    depth() {
        return this._dim.length;
    }

    count() {
        return countByDim(this._dim);
    }

    reshape(newDim) {
        if (countByDim(newDim) === countByDim(this._dim)) {
            this._dim = [...newDim];
        } else {
            // throw exception
        }
    }

    slice(start, end) {
        let matWindow = [], slicedArr;
        
        if (start.length === end.length) {
            for (let i = 0, l = start.length; i < l; i++) {
                matWindow.push(end[i] - start[i]);
            }
        }
        
        slicedArr = getValuesInWindow(this._arr, start, matWindow, this._dim);
        return new Matrix(slicedArr, matWindow);
    }

    subMatrix(start, matWindow) {
        let subArr = getValuesInWindow(this._arr, start, matWindow, this._dim);
        return new Matrix(subArr, matWindow);
    }

    setValues(arr) {
        let dim = getDimByArray(arr);
        
        if (!this._dim) {
            // new matrix
            this._dim = dim;
            this._arr = getSingleDimArray(arr, this.dim());
        } else {
            // check for dim matching
            
        }
    }

    getValues(dim) {
        return getMultiDimArray(this._arr, dim || this._dim);
    }

    setValue(dim, value) {
        this._arr[dimToIndex(dim, this._dim)] = value;
    }

    getValue(dim) {
        return this._arr[dimToIndex(dim, this._dim)];
    }

    copy () {
        return new Matrix(this._arr, this._dim);
    }

    forEach(callback) {
        iterator(this._arr, this._dim, this._startIdx, this._incrementBy, null, callback);
    }

    forWindow(matWindow, callback) {
        iterator(this._arr, this._dim, this._startIdx, this._incrementBy, window, (arr, idx) => {
            let mat = new Matrix(arr);
            mat.reshape(matWindow);
            callback(mat, idx);
        });
    }
}