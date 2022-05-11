<script lang="ts">
    import Columns from '../../structure/Columns.svelte';
    import Block from '../../structure/Block.svelte';
    export let mode:string = 'normal';
    let clazz:string = '';
    export {clazz as class};
</script>

<footer class="--flare --flare-simple-footer {clazz}">
    <Columns mode={mode}>
        <Block>
            <slot></slot>
        </Block>
    </Columns>
</footer>