import Matrix from "../matrix";
import constants from "../common/lib";
import max from "../common/maxLin";
import { getCanvasContext, imageToDataArr, parsePixelMatricesFromImageData } from "./helper";

export default class Image {

    constructor(imgObj) {
        this.isLoaded = false;

        if ((typeof HTMLCanvasElement !== "undefined" && imgObj instanceof HTMLCanvasElement) 
            || (typeof OffscreenCanvas !== "undefined" && imgObj instanceof OffscreenCanvas)) {
            
            this._setCanvasParsedData(parsePixelMatricesFromImageData(imgObj));
            this._width = imgObj.width;
            this._height = imgObj.height;
            
        } else if (imgObj instanceof Matrix) {

            if (imgObj.size() !== 2) {
                // throw Exception
            }

            let arr = imgObj.getValues([imgObj.count()]);

            let maxPxValue = max(arr);

            if (maxPxValue === 1) {
                this._imgType = constants.IMG_TYPES.BINARY;
            } else {
                this._imgType = constants.IMG_TYPES.GRAYSCALE;
            }

            this.pixels[0] = imgObj.copy();
            this._height = imgObj.dim[0];
            this._width = imgObj.dim[1];

        } else {
            let img;

            let drawOnCanvasAndParseData = () => {
                let ctx = getCanvasContext(img.height, img.width);
                ctx.drawImage(img, 0, 0);
                this._setCanvasParsedData(parsePixelMatricesFromImageData(ctx.getImageData(0, 0, img.width, img.height)));
                this._width = img.width;
                this._height = img.height;
                this.isLoaded = true;
            }
            
            img = new window.Image();
            if (typeof imgObj === "string") {
                img.src = imgObj;
                img.onload = drawOnCanvasAndParseData;
                img.onerror = () => {
                    // throw exception
                }
            } else if (typeof HTMLImageElement !== "undefined" && imgObj instanceof HTMLImageElement) {
                drawOnCanvasAndParseData();
            }
        }
    }

    _setCanvasParsedData(data) {
        let {r, g, b, a} = data;
        this.r = r;
        this.g = g;
        this.b = b;
        this.a = a;
        this.pixels = [r, g, b];
        this._imgType = constants.IMG_TYPES.RGBA;
        this.isLoaded = true;
    }

    getImageData() {
        switch(this._imgType) {
            case constants.IMG_TYPES.BINARY:
                return imageToDataArr(this._height, this._width, this.pixels[0].getValues([this.pixels[0].count()]).map(px => px * 255));
            case constants.IMG_TYPES.GRAYSCALE:
                let maxPx = max(this.pixels[0].getValues([this.pixels[0].count()]));
                return imageToDataArr(this._height, this._width, maxPx > 255 ? this.pixels[0].getValues([this.pixels[0].count()]).map(px => (px / maxPx) * 255) : this.pixels[0].getValues([this.pixels[0].count()]));
            default:
                return imageToDataArr(this._height, this._width, this.r.getValues([this.r.count()]), this.g.getValues([this.r.count()]), this.b.getValues([this.r.count()]), this.a.getValues([this.r.count()]));
        }
    }
}