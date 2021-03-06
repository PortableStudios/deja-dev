# <%= meta.name %>

This is a [Next.js](https://nextjs.org/) and [Chakra UI](https://chakra-ui.com/) project bootstrapped with Portable's [`deja-dev`](https://github.com/PortableStudios/deja-dev) tool.

## Getting Started

First, create an `.env` file with the following contents:

```
SITE_URL=http://localhost:3000
```

Now, run the development server:

```bash
yarn install
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

While developing you may also want to run Storybook:

```bash
yarn storybook
```

Open [http://localhost:6006](http://localhost:6006) with your browser to view your UI library.

## Code Generation

[Plop](https://plopjs.com/) is included in this project to allow us to quickly generate code.

```bash
yarn plop
```

Currently the available options are:

- A React component, with a Storybook story and a Jest test
- A Next.js page, with a Cypress test

The config for this tool can be found in `plopfile.js` and
the templates can be found in the `/templates` folder.

## Included

The following features were included in this project by the [`deja-dev`](https://github.com/PortableStudios/deja-dev) scaffolding tool:

- [Next.js](https://nextjs.org/) framework, with:
  - TypeScript support [(more info)](https://nextjs.org/docs/basic-features/typescript)
  - Custom [`_app.tsx`](./pages/_app.tsx), [`_document.tsx`](./pages/_document.tsx) and [`_error.tsx`](./pages/_error.tsx) components [(more info)](https://nextjs.org/docs/advanced-features/custom-app)
  - Example [`index.tsx`](./pages/index.tsx) and [`404.tsx`](./pages/404.tsx) pages [(more info)](https://nextjs.org/docs/basic-features/pages)
  - Example [`hello.ts`](./pages/api/hello.ts) API route [(more info)](https://nextjs.org/docs/api-routes/introduction)
  - [`next-optimized-images`](https://github.com/cyrilwanner/next-optimized-images) plugin pre-configured
  - Absolute imports (e.g. `import Button from '@/components/Button'`)
- [Chakra UI](https://chakra-ui.com/) library, with:
  - Example custom theme (see [`theme.tsx`](./src/utils/theme.tsx) and [`AppProvider.tsx`](./src/components/AppProvider.tsx))
  - Example custom icons (see [`icons.tsx`](./src/utils/icons.tsx))
- [Storybook](https://storybook.js.org/) tool, with:
  - Pre-installed addons: viewport, a11y, knobs, etc. [(more info)](https://storybook.js.org/addons/)
  - Example stories for pages and components (see `*.stories.tsx` files)
  - [`storycap`](https://github.com/reg-viz/storycap) for generating screenshots of pages with various browser sizes
- [ESLint](https://eslint.org/) tool, with:
  - [Prettier](https://prettier.io/) formatting
  - Customised [Airbnb config](https://github.com/airbnb/javascript) plus recommended rules for React, TypeScript, React Testing Library and Cypress Testing Library
  - Autorun on pre-commit using [`husky`](https://github.com/typicode/husky) and [`lint-staged`](https://github.com/okonet/lint-staged) 
  - VSCode configuration
- [Plop](https://plopjs.com/) tool, with:
  - Templates for generating a React component with a story and a Jest test
  - Templates for generating a Next.js component page a Cypress test
- Testing libraries:
  - [Jest](https://jestjs.io/), with [React Testing Library](https://testing-library.com/docs/react-testing-library/intro)
  - [Cypress](https://www.cypress.io/), with [Cypress Testing Library](https://testing-library.com/docs/cypress-testing-library/intro)
- Third-party integrations (just add your variables to the `.env` file):
  - [Google Analytics](https://analytics.google.com/analytics/web/)
  - [Sentry](https://sentry.io/) (integrated with front-end and API routes)
- Some further examples, including:
  - Example [`Button`](./src/components/ui/Button/Button.tsx) component in the `components/ui` folder
  - Example layout components in the `components/layout` folder
  - Example page components in the `components/page` folder
  - Example social meta tags (see [`meta.tsx`](./src/utils/meta.tsx)) 
  - Usage of `getServerSideProps` on the index page [(more info)](https://nextjs.org/docs/basic-features/data-fetching)
  - CSS reset and global styles (see [`AppProvider.tsx`](./src/components/AppProvider.tsx))
  - An included Google Web Font (see [`_app.tsx`](./pages/_app.tsx) and [`preview-head.html`](./.storybook/preview-head.html))

## Learn More

### Next.js

To learn more about Next.js, take a look at the following resources:

- [Documentation](https://nextjs.org/docs) - learn about Next.js features and API
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial
- [Awesome Next.js](https://github.com/unicodeveloper/awesome-nextjs) - community curated list of resources
- [GitHub](https://github.com/vercel/next.js/)

### Chakra UI

To learn more about Chakra UI, take a look at the following resources:

- [Documentation](https://chakra-ui.com/getting-started) - learn about Chakra UI features and API
- [Storybook](https://chakra-ui.netlify.app/) - preview the 40+ components provided by Chakra UI, with examples
- [GitHub](https://github.com/chakra-ui/chakra-ui/)

## Commands

Run in development mode:

```bash
yarn dev
```

Run in production mode:

```bash
yarn build && yarn start
```

Run linter:

```bash
yarn lint
```

Run typechecker:

```bash
yarn typecheck
```

Run Jest tests:

```bash
yarn test
# generate code coverage
yarn test:coverage
```

Run Cypress tests:

```bash
# start app in production mode
yarn build && yarn start
# run the tests
yarn cypress:run
# alternatively, open the Cypress UI
yarn cypress:open
```

Analyze bundle size (server and client):

```bash
yarn analyze
```

Generate page screenshots from Storybook:

```bash
# start storybook
yarn storybook
# run storycap
yarn screenshots
```

You can find the generated screenshots in the `/__screenshots__` folder.
