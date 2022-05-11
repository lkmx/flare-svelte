<script lang="ts">
  import { onMount } from "svelte";
  let el:Element; //current component
  let clazz:string = '';
  export {clazz as class};
  export let mode:string = 'normal';
  export let modeXxs:string = null;
  export let modeXs:string = null;
  export let modeS:string = null;
  export let modeM:string = null;
  export let modeL:string = null;
  export let modeXl:string = null;
  export let modeXxl:string = null;
  export let modeXxxl:string = null;
  export let number:string = '1';
  export let numberXxs:string = null;
  export let numberXs:string = null;
  export let numberS:string = null;
  export let numberM:string = null;
  export let numberL:string = null;
  export let numberXl:string = null;
  export let numberXxl:string = null;
  export let numberXxxl:string = null;
  export let weight:string = 'normal';
  export let weightXxs:string = null;
  export let weightXs:string = null;
  export let weightS:string = null;
  export let weightM:string = null;
  export let weightL:string = null;
  export let weightXl:string = null;
  export let weightXxl:string = null;
  export let weightXxxl:string = null;

  $: weights = {
    xxs: weightXxs || weightXs || weightS || weight,
    xs: weightXs || weightS || weight,
    s: weightS || weight,
    m: weightM || weight,
    l: weightL || weight,
    xl: weightXl || weightL || weight,
    xxl: weightXxl || weightXl || weightL || weight,
    xxxl: weightXxxl || weightXxl || weightXl || weightL || weight,
  };
  $: numbers = {
    xxs: numberXxs || numberXs || numberS || number,
    xs: numberXs || numberS || number,
    s: numberS || number,
    m: numberM || number,
    l: numberL || number,
    xl: numberXl || numberL || number,
    xxl: numberXxl || numberXl || numberL || number,
    xxxl: numberXxxl || numberXxl || numberXl || numberL || number,
  };
  $: modes = {
    xxs: modeXxs || modeXs || modeS || mode,
    xs: modeXs || modeS || mode,
    s: modeS || mode,
    m: modeM || mode,
    l: modeL || mode,
    xl: modeXl || modeL || mode,
    xxl: modeXxl || modeXl || modeL || mode,
    xxxl: modeXxxl || modeXxl || modeXl || modeL || mode,
  };
  $: style = Object.keys(numbers).reduce((styles, size) => {
    styles += `--f-columns-number-${size}:${numbers[size]};`;
    return styles;
  }, "");
  $: classes = [
    "--flare-columns--xxs-mode-" + modes["xxs"],
    "--flare-columns--xs-mode-" + modes["xs"],
    "--flare-columns--s-mode-" + modes["s"],
    "--flare-columns--m-mode-" + modes["m"],
    "--flare-columns--l-mode-" + modes["l"],
    "--flare-columns--xl-mode-" + modes["xl"],
    "--flare-columns--xxl-mode-" + modes["xxl"],
    "--flare-columns--xxxl-mode-" + modes["xxxl"],

    "--flare-columns--xxs-" + numbers["xxs"],
    "--flare-columns--xs-" + numbers["xs"],
    "--flare-columns--s-" + numbers["s"],
    "--flare-columns--m-" + numbers["m"],
    "--flare-columns--l-" + numbers["l"],
    "--flare-columns--xl-" + numbers["xl"],
    "--flare-columns--xxl-" + numbers["xxl"],
    "--flare-columns--xxxl-" + numbers["xxxl"],

    "--flare-weight--xxs-" + weights["xxs"],
    "--flare-weight--xs-" + weights["xs"],
    "--flare-weight--s-" + weights["s"],
    "--flare-weight--m-" + weights["m"],
    "--flare-weight--l-" + weights["l"],
    "--flare-weight--xl-" + weights["xl"],
    "--flare-weight--xxl-" + weights["xxl"],
    "--flare-weight--xxxl-" + weights["xxxl"],
  ].join(' ');

  
  onMount(() => {
    calcBreakpoints(el);
  });

  function calcBreakpoints(element:Element) {
    let children = element.children;
    for (let i = 0; i < children.length; i++) {
      const node = children[i];
      for (let breakpoint in numbers) {
        const colNumber = numbers[breakpoint];
        if (i % colNumber < colNumber / 2) {
          node.classList.add(`--flare-block--${breakpoint}-left`);
        }

        if (i % colNumber >= colNumber / 2) {
          node.classList.add(`--flare-block--${breakpoint}-right`);
        }

        if (colNumber % 2 > 0 && i == Math.floor(colNumber / 2)) {
          node.classList.remove(`--flare-block--${breakpoint}-left`);
          node.classList.remove(`--flare-block--${breakpoint}-right`);
          node.classList.add(`--flare-block--${breakpoint}-middle`);
        }

        if (colNumber == 1) {
          node.classList.remove(`--flare-block--${breakpoint}-left`);
          node.classList.remove(`--flare-block--${breakpoint}-right`);
          node.classList.remove(`--flare-block--${breakpoint}-middle`);
          node.classList.add(`--flare-block--${breakpoint}-single`);
        } else {
          node.classList.remove(`--flare-block--${breakpoint}-single`);
        }
      }
    }
  }
</script>

<section
  bind:this={el}
  class="--flare --flare-frame --flare-columns {clazz} {classes}"
  style={style}
>
  <slot />
</section>
