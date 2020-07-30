# Déjà Dev ⌛

> We&#39;ve been here before, let&#39;s save some time shall we? An opinionated generator for web projects.

## What ☝

Based on Lee Briggs' original [`deja-dev`](https://github.com/theleebriggs/deja-dev) tool,
the purpose of this scaffolding tool is to enable us to painlessly skip the boilerplate
and start working on the real meat of our projects as fast as possible.

Built using the [SAO](https://github.com/saojs/sao) framework.

## Usage 🚀

```bash
npx sao PortableStudios/deja-dev -u my-project
```

## Stacks ⚡

### Frontend

- Next.js, with Theme UI
- Next.js, with Chakra UI

### API

- NestJS (coming soon)

## Included

### Common

- .gitignore
- .gitattributes
- .editorconfig
- .nvmrc

### Next.js, with Theme UI

- Next.js framework
- TypeScript support
- ESLint
- Prettier
- TODO: Theme UI

(See [`README.md`](./template/next-ts-theme-ui/README.md) for more info)

### Next.js, with Chakra UI

- Next.js framework
- TypeScript support
- Chakra UI
- Storybook
- Plop
- ESLint
- Prettier
- Jest, with React Testing Library
- Cypress, with Cypress Testing Library
- Third-party integrations
  - Sentry
  - Google Analytics
- Various additional features and code examples

(See [`README.md`](./template/next-ts-chakra-ui/README.md) for more info)
