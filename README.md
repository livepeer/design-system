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

### Testing changes in consumer apps

The design system is consumed by apps such as the [Livepeer Explorer](https://github.com/livepeer/explorer). Use [yalc](https://github.com/wclr/yalc) to test local changes against one or more consumers before publishing — it copies files into each consumer's `node_modules` rather than symlinking, which avoids the duplicate React instance / "Invalid hook call" errors you get from `pnpm link` or `yarn link`.

```bash
# one-time install
npm i -g yalc

# one-time, in each consumer app
yalc add @livepeer/design-system
pnpm install    # or yarn install

# in design-system, after each change
yarn ds:build && yalc push
```

`yalc push` propagates the new build to every consumer that ran `yalc add`. To unlink: run `yalc remove @livepeer/design-system` in each consumer and restore the original dependency version.

> [!TIP]
> Run `rollup -c -w` in a separate terminal to rebuild on save, then `yalc push` after each rebuild.
