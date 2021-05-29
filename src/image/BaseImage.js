import Matrix from "../matrix";
import constants from "../common/lib";
import max from "../common/maxLin";
import { imageToDataArr } from "./helper";
import { arrayEquals } from '../matrix/helper';

export default class BaseImage {

    constructor(channels) {

        if (Array.isArray(channels) && channels.every(channel => channel instanceof Matrix && channel.depth() === 2)) {
            this._channels = channels.map(m => m.copy());
        } else if (channels instanceof Matrix) {
            this._channels = [channels.copy()];
        }

        this._height = this._channels[0].dim()[0];
        this._width = this._channels[0].dim()[1];
    }

    getType() {
        return this._imgType;
    }

    // just for abstruct reference
    getImageData() {
    }
}