import { matFill } from './helper';

export default class Matrix {
    constructor(arr, defaultFill) {
        this._arr = [];
        if (typeof defaultFill !== 'undefined') {
            // expecting arr is a single dimension Array specifing dimension
            this._arr = matFill(arr, defaultFill);
        }
    }
}