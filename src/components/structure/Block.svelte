<script lang="ts">
    let clazz:string = '';
    export {clazz as class};
</script>

<div class="--flare --flare-block {clazz}">
    <div class="content">
        <div class="box">
            <slot></slot>
        </div>
    </div>
</div>