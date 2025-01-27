# Agility CMS SvelteKit Starter

This is a starter project for building a SvelteKit application with Agility CMS.

## Getting Started

To start using the Agility CMS & SvelteKit Starter, follow these steps:

1. Clone this repository.
2. Run `yarn install` to install the dependencies.
3. Rename the `.env.local.example` file to `.env.local`.
4. Retrieve your `GUID`, `API Keys (Preview/Fetch)`, and `Security Key` from Agility CMS by going to [Settings > API Keys](https://manager.agilitycms.com/settings/apikeys).

## Development

To start a development server:

```bash
yarn dev
```

This will launch the site in development mode, using your preview API key to pull in the latest content from Agility CMS.

## Building
To create a production version of your app:
```bash
yarn build
```

## Previewing
To preview the production build:
```bash
yarn preview
```
