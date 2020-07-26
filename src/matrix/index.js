import { matFill, deepCopy } from './helper';

export default class Matrix {
    constructor(arr, defaultFill) {
        this._arr = []; this._dim;
        if (typeof defaultFill !== 'undefined') {
            // expecting arr is a single dimension Array specifing dimension
            this._arr = matFill(arr, defaultFill);
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
        let dim = [], _ptr = arr;
        while(_ptr) {
            dim.push(_ptr.length);
            if(Array.isArray(_ptr[0])) {
                _ptr = _ptr[0];
            }
        }
        this._arr = deepCopy(arr);
        this._dim = dim;
    }

    getValues() {
        return this._arr;
    }

    setValue(dim, value) {
        if (dim.length === this.dim()) {
            this.getValue(dim.slice(0, -1))[dim[dim.length - 1]] = value;
        }
    }

    getValue(dimIdx) {
        let _ptr = this._arr, i = 0;
        while(_ptr && i < dimIdx.length) {
            _ptr = _ptr[dimIdx[i]]
            i++;
        }
        return _ptr;
    }
}