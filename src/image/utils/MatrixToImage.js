export default function matrixToImage(matrix) {
    if (matrix.depth() !== 2) {
        // throw Exception
    }

    let arr = matrix.getValues([matrix.count()]);

    let maxPxValue = max(arr);

    if (maxPxValue === 1) {
        this._imgType = constants.IMG_TYPES.BINARY;
    } else {
        this._imgType = constants.IMG_TYPES.GRAYSCALE;
    }

    this.pixels[0] = matrix.copy();
    this._height = matrix.dim()[0];
    this._width = matrix.dim()[1];
}