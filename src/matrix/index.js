import { matFill, deepCopy, countByDim, getDimByArray, getSingleDimArray,
    getMultiDimArray, 
    iterator, dimToIndex} from './helper';
import dot from '../common/dot';
import add from '../common/add';
import substract from '../common/substract';
import { SCALER_SUBSTRACT } from '../common/lib';

export default class Matrix {
    constructor(arr, defaultFill) {
        this._arr = []; this._dim;
        if (typeof defaultFill === 'number') {
            // expecting arr is a single dimension Array specifing dimension
            this._arr = (new Array(countByDim(arr))).fill(defaultFill);
            this._dim = [...arr];
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
            this._dim = newDim;
        } else {
            // throw exception
        }
    }

    setValues(arr) {
        let size = getSizeByArray(arr);
        if (!this._size) {
            // new matrix
            this._size = size;
            this._arr = getSingleDimArray(arr, this.dim());
        } else {
            // check for dim matching
            
        }
    }

    getValues() {
        return getMultiDimArray(this._arr, this._size);
    }

    setValue(dim, value) {
        this._arr[dimToIndex(dim, this._dim)] = value;
    }

    getValue(dim) {
        return this._arr[dimToIndex(dim, this._dim)];
    }

    copy () {
        return new Matrix(this._arr);
    }

    forEach(callback) {
        iterator(this._arr, this._dim, callback);
    }
}