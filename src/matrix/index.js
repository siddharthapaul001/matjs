import { matFill, deepCopy } from './helper';
import dot from '../common/dot';
import add from '../common/add';
import substract from '../common/substract';
import { SCALER_SUBSTRACT } from '../common/lib';

export default class Matrix {
    constructor(arr, defaultFill) {
        this._arr = []; this._dim;
        if (typeof defaultFill !== 'undefined') {
            // expecting arr is a single dimension Array specifing dimension
            this._dim = [...arr];
        } else {
            this.setValues(arr);
        }
    }

    size () {
        return this._dim;
    }

    dim() {
        return this._dim.length;
    }

    setValues(arr) {

    }

    getValues() {
        return this._arr;
    }

    setValue(dim, value) {
        
    }

    getValue(dimIdx) {
        
    }

    copy () {
        return new Matrix(this._arr);
    }
}