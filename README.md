# Livepeer Design System

Design system for [Livepeer](https://livepeer.org/) products.

## Documentation

Visit [https://livepeer-design-system.vercel.app/](https://livepeer-design-system.vercel.app/) to view the design system reference components.

## Usage

```bash
yarn add @livepeer/design-system
```

## Local development

### Running the docs site

```bash
yarn install
yarn dev        # docs site at http://localhost:3000
```

### Testing changes in the Livepeer Explorer

The design system is consumed by the [Livepeer Explorer](https://github.com/livepeer/explorer) app. To validate changes locally before publishing:

1. Build the package in this repo:

   ```bash
   yarn ds:build
   ```

2. Point Explorer at your local checkout by editing its `package.json`:

   ```json
   "@livepeer/design-system": "file:../path/to/design-system"
   ```

3. Reinstall in Explorer to copy the local build:

   ```bash
   pnpm install    # or yarn install
   ```

4. After each change in the design system, re-run `yarn ds:build` here, then `pnpm install` in Explorer to pick up the new build.

**Why `file:` and not `pnpm link` / `yarn link`?** Symlinks cause duplicate React instances (the linked package resolves React from its own `node_modules` instead of Explorer's), which breaks hooks with "Invalid hook call" errors. The `file:` protocol copies files into Explorer's `node_modules`, so peer dependencies resolve correctly.

**Tip:** run `rollup -c -w` in a separate terminal to rebuild on save.

### Reverting

When you're done, restore the original version in Explorer's `package.json` and reinstall.

## License

Licensed under the [MIT](./LICENSE) license.
