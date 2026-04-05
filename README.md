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

The design system is consumed by apps such as the [Livepeer Explorer](https://github.com/livepeer/explorer). Pick the workflow that matches how many consumers you need to test against.

#### Single consumer — `file:` protocol

Simplest for testing against one app:

1. Build the package:

   ```bash
   yarn ds:build
   ```

2. Point the consumer at your local checkout (edit its `package.json`):

   ```json
   "@livepeer/design-system": "file:../path/to/design-system"
   ```

3. Reinstall in the consumer to copy the local build:

   ```bash
   pnpm install    # or yarn install
   ```

4. After each change, re-run `yarn ds:build` here and `pnpm install` in the consumer.

When done, restore the original version in the consumer's `package.json` and reinstall.

#### Multiple consumers — `yalc`

Use [yalc](https://github.com/wclr/yalc) when testing against 2+ consumer apps. One push updates them all.

```bash
# one-time install
npm i -g yalc

# one-time, in each consumer
yalc add @livepeer/design-system
pnpm install

# in design-system, after each change
yarn ds:build && yalc push
```

`yalc push` propagates the new build to every consumer that ran `yalc add`. To unlink: run `yalc remove @livepeer/design-system` in each consumer and restore the original dependency version.

#### Why not `pnpm link` / `yarn link`?

Symlinks cause duplicate React instances — the linked package resolves React from its own `node_modules` instead of the consumer's, which breaks hooks with "Invalid hook call" errors. Both `file:` and `yalc` copy files instead, so peer dependencies resolve correctly from the consumer.

**Tip:** run `rollup -c -w` in a separate terminal to rebuild on save.
