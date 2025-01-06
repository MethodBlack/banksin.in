import { A as AstroError, o as MissingSharp } from './astro/server_n-L5gBKS.mjs';
import { b as baseService, p as parseQuality } from './generic_Cv_SXDKZ.mjs';

let sharp;
const qualityTable = {
  low: 25,
  mid: 50,
  high: 80,
  max: 100
};
async function loadSharp() {
  let sharpImport;
  try {
    sharpImport = (await import('sharp')).default;
  } catch {
    throw new AstroError(MissingSharp);
  }
  sharpImport.cache(false);
  return sharpImport;
}
const fitMap = {
  fill: "fill",
  contain: "inside",
  cover: "cover",
  none: "outside",
  "scale-down": "inside",
  outside: "outside",
  inside: "inside"
};
const sharpService = {
  validateOptions: baseService.validateOptions,
  getURL: baseService.getURL,
  parseURL: baseService.parseURL,
  getHTMLAttributes: baseService.getHTMLAttributes,
  getSrcSet: baseService.getSrcSet,
  async transform(inputBuffer, transformOptions, config) {
    if (!sharp) sharp = await loadSharp();
    const transform = transformOptions;
    if (transform.format === "svg") return { data: inputBuffer, format: "svg" };
    const result = sharp(inputBuffer, {
      failOnError: false,
      pages: -1,
      limitInputPixels: config.service.config.limitInputPixels
    });
    result.rotate();
    const withoutEnlargement = Boolean(transform.fit);
    if (transform.width && transform.height && transform.fit) {
      const fit = fitMap[transform.fit] ?? "inside";
      result.resize({
        width: Math.round(transform.width),
        height: Math.round(transform.height),
        fit,
        position: transform.position,
        withoutEnlargement
      });
    } else if (transform.height && !transform.width) {
      result.resize({
        height: Math.round(transform.height),
        withoutEnlargement
      });
    } else if (transform.width) {
      result.resize({
        width: Math.round(transform.width),
        withoutEnlargement
      });
    }
    if (transform.format) {
      let quality = void 0;
      if (transform.quality) {
        const parsedQuality = parseQuality(transform.quality);
        if (typeof parsedQuality === "number") {
          quality = parsedQuality;
        } else {
          quality = transform.quality in qualityTable ? qualityTable[transform.quality] : void 0;
        }
      }
      result.toFormat(transform.format, { quality });
    }
    const { data, info } = await result.toBuffer({ resolveWithObject: true });
    return {
      data,
      format: info.format
    };
  }
};
var sharp_default = sharpService;

export { sharp_default as default };
