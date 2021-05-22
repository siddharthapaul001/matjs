export default function max(arr) {
    return arr.reduce((maxVal, val) => {
        return maxVal < val ? val : maxVal;
    }, arr[0]);
}