# Contents
---
- [Documentation](#documentation)
- [How to use](#how-to-use)
  - [Scaffold your project](#scaffold-your-project)
  - [Add Flare Svelte dependencie](#add-flare-svelte-dependencie)
  - [Installing dependencies](#installing-dependencies)
  - [Configuring Flare](#configuring-flare)
    - [Importing dependencies](#importing-dependencies)
    - [Running the project](#running-the-project)
    - [Creating a template](#creating-a-template)
- [Build](#build)
- [StoryBook](#storybook)
- [Deployment](#deployment)

# Documentation

Flare Svelte combines the core Flare features with the tooling that are tailored to Svelte developers.

Flare Svelte is built on top of Svelte

# How to use

Prerequisites:

- Node.js version >=12.2.0 

## Scaffold your project

Use [Vite](https://vitejs.dev/guide/#scaffolding-your-first-vite-project) to quickly scaffold your project.

With NPM:

```
npm create vite@latest my-svelte-app -- --template svelte
```

## Add Flare svelte dependencie

Add Flare svelte to dev dependencies

With NPM:
```
npm add @lkmx/flare-svelte
```

## Installing dependencies

With NPM:
```
npm install
```

## Configuring Flare

### Importing dependencies

Import into ```<Component>.svelte``` Flare dependencies

```
<script>
  import { Block, Columns, Page, SimpleHeader, SimpleLayout, SimpleFooter } from '@lkmx/flare-svelte';
</script>


```

### Running the project

With NPM:
```
npm run dev
```

### Creating a template

Assembling a minimal structure with Flare requires the use of their core elements, from there, any page could be styled 

```
<SimpleLayout>
  <Page>
    <Columns>
      <Block>
        <h1>Flare it's easy to use</h1>
        <p>Assembling a minimal structure with Flare requires the use of their core elements, from there, any page could be styled.</p>
      </Block>
    </Columns>
  </Page>
</SimpleLayout>
```

# Build
Use ```npm run build``` to generate static files in a ```/dist``` folder

# Storybook

With NPM:
```
npm run storybook
```


# Deployment
TBD