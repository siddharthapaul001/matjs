export default function canvasToRGBA() {
    if ((typeof HTMLCanvasElement !== "undefined" && imgObj instanceof HTMLCanvasElement) 
            || (typeof OffscreenCanvas !== "undefined" && imgObj instanceof OffscreenCanvas)) {
            
        new RGBAImage(parsePixelMatricesFromImageData(imgObj));
    }
}