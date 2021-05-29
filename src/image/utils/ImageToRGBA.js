import { getCanvasContext, parsePixelMatricesFromImageData } from "../helper";
import RGBAImage from "../RGBAImage";

function drawOnCanvasAndParseData(img) {
    let ctx = getCanvasContext(img.height, img.width);
    ctx.drawImage(img, 0, 0);
    return new RGBAImage(parsePixelMatricesFromImageData(ctx.getImageData(0, 0, img.width, img.height)));
}

export default function imageToRGBA(imgObj) {
    return new Promise((resolve, reject) => {
        let img;
        if (typeof globalThis.Image !== "undefined") {
            
            img = new globalThis.Image();
            
            if (typeof imgObj === "string") {
                
                img.onload = ()=> {
                    resolve(drawOnCanvasAndParseData(img));
                };
    
                img.onerror = (err) => {
                    // throw exception
                    reject(err);
                }

                img.src = imgObj;
            } else if (imgObj instanceof globalThis.Image) {
                resolve(drawOnCanvasAndParseData());
            }
        }
    });
}