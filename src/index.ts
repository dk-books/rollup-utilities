import { OutputBundle, OutputAsset, OutputChunk } from 'rollup';

/**
 * Loops through the generated bundle an returns the filename of the files that match the provided extension
 * @param bundle - The rollup.js bundle containing all assets and chunks from the project
 * @param ext - File extention to match
 * @returns An array with the file matching the extension
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
 * @param bundle - The rollup.js bundle containing all assets and chunks from the project
 * @returns An array with the entry filenames
 */
export function getEntryFilenames(bundle: OutputBundle): string[] {
  return Object.values(bundle)
    .filter((val: OutputChunk) => val.isEntry)
    .map(val => val.fileName);
}
