<script>
import '@lkmx/flare';
import { Meta, Template, Story } from "@storybook/addon-svelte-csf";
import Block from '@/components/structure/Block.svelte';
import Columns from '@/components/structure/Columns.svelte';
let sizes = ['', 'Xxs', 'Xs', 'S', 'M', 'L',, 'Xl', 'Xxl', 'Xxxl'];

let modeArgTypes = initilizeArgType('mode', 'text', 'normal');
let numberArgTypes = initilizeArgType('number', 'number', 1);
let weightArgTypes = initilizeArgType('weight', 'text', 'normal');
let argumentTypes = Object.assign({}, modeArgTypes, numberArgTypes,weightArgTypes);

function initilizeArgType(argName, argType, defaultValue) {
    return sizes.reduce((argTypes, size) => {
        let sizeName = `${argName}${size}`;
        argTypes[sizeName] = {
            name: sizeName,
            type: { name: argType, required: false},
            defaultValue: defaultValue,
            description: `Set ${sizeName} type`,
            table: {
                type: {summary: argType},
                defaultValue: {summary: defaultValue}
            },
            control: {
                type: argType
            }
        };
        if (size != '') {
            delete argTypes[sizeName].defaultValue;
            argTypes[sizeName].table.defaultValue.summary = `Equals to ${argName}`;
        }
        return argTypes;
    }, {});
}

</script>

<Meta
    title="Flare/Colums"
    component={Columns}
    argTypes={argumentTypes}>
</Meta>    
<Template let:args>
    <Columns {...args}>
        {#each Array(args.blocks).fill().map((v, i) => i+1) as block }
            <Block class="bordered">Block {block}</Block>
        {/each}
    </Columns>
</Template>

<Story
    name="Columns"
    args={{
        blocks: 6,
        number: 3
    }}
>
</Story>