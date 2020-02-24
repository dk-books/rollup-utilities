import { OutputBundle, OutputAsset, OutputChunk } from 'rollup';

/**
 * Loops through the generated bundle an returns the filename of css files
 * @param {OutputBundle} bundle
 * @param {string} ext
 */
export function getAssetsByExtention(
  bundle: OutputBundle,
  ext: string
): string[] {
  return Object.values(bundle)
    .filter(val => val.fileName.includes(ext))
    .map((val: OutputAsset) => val.fileName);
}

/**
 * Loops through the generated bundle an returns the filename of the entry scripts
 * @param {*} bundle
 */
export function getEntryFilenames(bundle: OutputBundle): string[] {
  const files = Object.values(bundle);
  return files
    .filter((val: OutputChunk) => val.isEntry)
    .map(val => val.fileName);
}
