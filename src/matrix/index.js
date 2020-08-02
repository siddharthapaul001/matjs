import { matFill, deepCopy, countBySize, getSizeByArray, getSingleDimArray,
    getMultiDimArray, 
    iterator} from './helper';
import dot from '../common/dot';
import add from '../common/add';
import substract from '../common/substract';
import { SCALER_SUBSTRACT } from '../common/lib';

export default class Matrix {
    constructor(arr, defaultFill) {
        this._arr = []; this._size;
        if (typeof defaultFill === 'number') {
            // expecting arr is a single dimension Array specifing dimension
            this._arr = (new Array(countBySize(arr))).fill(defaultFill);
            this._size = [...arr];
        } else {
            this.setValues(arr);
        }
    }

    size () {
        return this._size;
    }

    dim() {
        return this._size.length;
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
        
    }

    getValue(dimIdx) {
        
    }

    copy () {
        return new Matrix(this._arr);
    }

    forEach(callback) {
        iterator(this._arr, this._size, callback);
    }
}