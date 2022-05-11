<script lang="ts">
    import Columns from '../../structure/Columns.svelte';
    import Block from '../../structure/Block.svelte';
    export let mode:string = 'normal';
    let clazz:string = '';
    export {clazz as class};
</script>

<header class="--flare --flare-simple-header {clazz}">
    <Columns mode={mode}>
        <Block class="--flare-simple-header__content">
            <slot></slot>
        </Block>
    </Columns>
</header>