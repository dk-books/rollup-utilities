import { getEntryFilenames, getAssetsByExtention } from './index';
import { OutputBundle } from 'rollup';

// Bundle definition: https://rollupjs.org/guide/en/#javascript-api
const bundle: OutputBundle = {
  'not-entry': {
    isEntry: false,
    name: 'not-entry',
    fileName: 'not-entry.js',
    code: '',
    type: 'chunk',
    dynamicImports: [''],
    exports: [''],
    facadeModuleId: null,
    imports: [''],
    isDynamicEntry: false,
    modules: {
      module: {
        originalLength: 1,
        removedExports: [''],
        renderedExports: [''],
        renderedLength: 0
      }
    }
  },
  asset: {
    fileName: 'styles.css',
    type: 'asset',
    source: '',
    isAsset: true
  },
  entry: {
    isEntry: true,
    name: 'entry',
    fileName: 'entry.js',
    code: '',
    type: 'chunk',
    dynamicImports: [''],
    exports: [''],
    facadeModuleId: null,
    imports: [''],
    isDynamicEntry: false,
    modules: {
      module: {
        originalLength: 1,
        removedExports: [''],
        renderedExports: [''],
        renderedLength: 0
      }
    }
  }
};

test('returns the filename of a bundle entry file', () => {
  expect(getEntryFilenames(bundle)).toStrictEqual(['entry.js']);
});

test('returns the filename of a css file', () => {
  expect(getAssetsByExtention(bundle, '.css')).toStrictEqual(['styles.css']);
});
