import GrayScaleImage from "../GrayScaleImage";

export default function matrixToImage(matrix) {
    if (matrix.depth() !== 2) {
        // throw Exception
    }

    let arr = matrix.getValues([matrix.count()]),
        maxPxValue = max(arr);

    if (maxPxValue === 1) {
        return new BinaryImage(matrix);
    }

    return new GrayScaleImage(matrix);
}