# Rollup.js Utilities

## Getting started

To use this package you need to generate a new GitHub [token](https://github.com/settings/tokens) with the `repo` and `read:packages` scopes.

**Make sure you save the token somewhere safe. After being generated you won't be able to see it again.**

The next step is to login to GitHub Registry.

You will be prompted to enter your GitHub username and password. **Use the token you just created as password.**

```bash
npm login --registry=https://npm.pkg.github.com --scope=@dk-books
```

This command tells `npm` to use the GitHub Registry for all `@dk-books` scope packages.

```bash
npm config set @dk-books:registry https://npm.pkg.github.com
```

## Installing

```bash
npm install @dk-books/rollup-utilities --save
```

## Usage

### getAssetsByExtention()

#### Loops through the generated bundle an returns the filename of the files that match the provided extension

@param [bundle](https://rollupjs.org/guide/en/#generatebundle) - The rollup.js bundle containing all assets and chunks from the project

@param ext - File extention to match

@returns An array with the file matching the extension

```js
import { getAssetsByExtention } from '@dk-books/rollup-utilities';

const listOfIcons = getAssetsByExtention(rollupBundle, '.svg');
```

### getEntryFilenames()

#### Loops through the generated bundle an returns the filename of the entry scripts

@param [bundle](https://rollupjs.org/guide/en/#generatebundle) - The rollup.js bundle containing all assets and chunks from the project

@returns An array with the entry filenames

```js
import { getEntryFilenames } from '@dk-books/rollup-utilities';

const listOfentryFiles = getEntryFilenames(rollupBundle);
```
