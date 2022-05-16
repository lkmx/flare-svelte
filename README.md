# Flare-Svelte 
- [Flare-Svelte](#flare-svelte)
- [Documentation](#documentation)
  - [Prerequisites](#prerequisites)
  - [Create project](#create-project)
  - [Install Flare](#install-flare)
  - [Create Page Component](#create-page-component)
- [Development](#development)


# Documentation

Flare-Svelte combines the core Flare features with the tooling that are tailored to Svelte developers.

Flare-Svelte is built on top of Svelte

### Prerequisites

- Vite >= 8.1.0
- Node.js version >= 12.2.0 

### Create project

Init project

```
yarn create vite my-svelte-app --template svelte
```

### Install Flare

Install dependency
```
yarn add @lkmx/flare-svelte
yarn install
```

Import Flare components

```
<script>
  import { Block, Columns, Page, SimpleHeader, SimpleLayout, SimpleFooter } from '@lkmx/flare-svelte';
</script>
```

### Create page component

Create component
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

# Development
TBD