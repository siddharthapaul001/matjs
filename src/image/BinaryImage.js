import Matrix from "../matrix";
import constants from "../common/lib";
import max from "../common/maxLin";
import { getCanvasContext, imageToDataArr, parsePixelMatricesFromImageData } from "./helper";
import { BaseImage } from "..";

export default class RGBAImage extends BaseImage {

    constructor(channel) {
        super(channel);
        this._imgType = constants.IMG_TYPES.BINARY;
    }

    getImageData() {
        return imageToDataArr(this._height, this._width, this.channels[0].getValues([this.channels[0].count()]).map(px => px * 255));
    }
}