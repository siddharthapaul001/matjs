import Matrix from "../matrix";
import constants from "../common/lib";
import max from "../common/maxLin";
import { getCanvasContext, imageToDataArr, parsePixelMatricesFromImageData } from "./helper";
import { BaseImage } from "..";

export default class RGBAImage extends BaseImage {

    constructor(r, g, b, a) {
        super(Array.isArray(r) ? r : [r, g, b, a]);
        this._imgType = constants.IMG_TYPES.RGBA;
    }

    getImageData() {
        return imageToDataArr(this._height, this._width, this.r.getValues([this.r.count()]), this.g.getValues([this.r.count()]), this.b.getValues([this.r.count()]), this.a.getValues([this.r.count()]));
    }

    toGrayScaleImage() {
        
    }
}