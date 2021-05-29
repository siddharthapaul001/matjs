import Matrix from "../../matrix";

function parsePixelMatricesFromImageData (imgData) {
    let r = [], g = [], b = [], a = [], 
        height = imgData.height,
        width = imgData.width,
        imgDataArr = imgData.data;

    for (let i = 0, l = imgDataArr.length; i < l; i += 4) {
        r.push(imgDataArr[i]);
        g.push(imgDataArr[i + 1]);
        b.push(imgDataArr[i + 2]);
        a.push(imgDataArr[i + 3]);
    }

    return [
        new Matrix(r, [height, width]),
        new Matrix(g, [height, width]),
        new Matrix(b, [height, width]),
        new Matrix(a, [height, width])
    ];
}

function getCanvas(height = 150, width = 300) {
    if (typeof OffscreenCanvas !== undefined) {
        return new OffscreenCanvas(width, height);
    } else {
        let canvas = document.createElement("canvas");
        canvas.height = height;
        canvas.width = width;
        return canvas;
    }
}

function getCanvasContext(height = 150, width = 300) {
    return getCanvas(height, width).getContext("2d");
}

function imageToDataArr (height, width, r, g, b, a) {
    let ctx = getCanvasContext(height, width),
        imgData = ctx.createImageData(width, height),
        imgDataArr = imgData.data;
    
    r.forEach((rPx, idx) => {
        imgDataArr[idx * 4] = rPx;
        imgDataArr[idx * 4 + 1] = g ? g[idx] : rPx;
        imgDataArr[idx * 4 + 2] = b ? b[idx] : rPx;
        imgDataArr[idx * 4 + 3] = (a && a[idx]) || 255;
    });

    return imgData;
}

export {
    parsePixelMatricesFromImageData,
    imageToDataArr,
    getCanvas,
    getCanvasContext
}