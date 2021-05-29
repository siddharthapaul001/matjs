function drawOnCanvasAndParseData(img) {
    let ctx = getCanvasContext(img.height, img.width);
    ctx.drawImage(img, 0, 0);
    this._setCanvasParsedData(parsePixelMatricesFromImageData(ctx.getImageData(0, 0, img.width, img.height)));
    this._width = img.width;
    this._height = img.height;
    this.isLoaded = true;
}

export default function imageToRGBA(imgObj) {
    let img;
    if (typeof globalThis.Image !== "undefined") {
        
        img = new globalThis.Image();
        
        if (typeof imgObj === "string") {
            img.src = imgObj;
            
            img.onload = ()=> {
                drawOnCanvasAndParseData(img);
            };

            img.onerror = () => {
                // throw exception
            }
        } else if (imgObj instanceof globalThis.Image) {
            drawOnCanvasAndParseData();
        }
    }
}