<script  >
  import Block from '@/components/structure/Block.svelte';
  import Column from '@/components/structure/Columns.svelte';
  import Page from '@/components/structure/Page.svelte';
  import SimpleHeader from '@/components/ui/basic/SimpleHeader.svelte';
</script>

<Page>
  <SimpleHeader>
    <Column number="13">
      <Block>
        Menu 1
      </Block>
      <Block>
        Menu 2
      </Block>
      <Block>
        Menu 3
      </Block>
      <Block>
        Menu 4
      </Block>
    </Column>
  </SimpleHeader>
  <Column number="4" numberS="1" numberM="2">
      <Block>
        <p>
          Visit <a href="https://svelte.dev">svelte.dev</a> to learn how to build Svelte
          apps.
        </p>
      </Block>
      <Block>
        <p>
          Check out <a href="https://github.com/sveltejs/kit#readme">SvelteKit</a> for
          the officially supported framework, also powered by Vite!
        </p>
      </Block>
      <Block>
        <p>
          Check out <a href="https://github.com/sveltejs/kit#readme">SvelteKit</a> for
          the officially supported framework, also powered by Vite!
        </p>
      </Block>
      <Block>
        <p>
          Check out <a href="https://github.com/sveltejs/kit#readme">SvelteKit</a> for
          the officially supported framework, also powered by Vite!
        </p>
      </Block>
  </Column>
</Page>
<style>
  :root {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
      Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }

  p {
    max-width: 14rem;
    margin: 1rem auto;
    line-height: 1.35;
  }

  @media (min-width: 480px) {

    p {
      max-width: none;
    }
  }
</style>
