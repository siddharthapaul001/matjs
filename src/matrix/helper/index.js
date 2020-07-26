function deepCopy(obj) {
    return JSON.parse(JSON.stringify(obj));
}

function matFill(dim, defaultFill) {
    let mat, dimArr = [...dim], n = dimArr.pop(), newMat;
    while (n) {
        if (mat) {
            newMat = Array(n);
            newMat[0] = mat;
            for (let i = 1, l = n; i < l; i++) {
                newMat[i] = deepCopy(mat);
            }
            mat = newMat;
        } else {
            mat = Array(n).fill(defaultFill);
        }
        n = dimArr.pop();
    }
    return mat;
}

export {
    deepCopy,
    matFill
}