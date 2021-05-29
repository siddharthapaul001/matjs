import Matrix from "../matrix";
import constants from "../common/lib";
import max from "../common/maxLin";
import { getCanvasContext, imageToDataArr, parsePixelMatricesFromImageData } from "./helper";
import { BaseImage } from "..";

export default class GrayScaleImage extends BaseImage {

    constructor(channel) {
        super(channel);
        this._imgType = constants.IMG_TYPES.GRAYSCALE;
    }

    getImageData() {
        let maxPx = max(this.channels[0].getValues([this.channels[0].count()]));
        return imageToDataArr(this._height, this._width, maxPx > 255 ? this.channels[0].getValues([this.channels[0].count()]).map(px => (px / maxPx) * 255) : this.channels[0].getValues([this.channels[0].count()]));
    }
}