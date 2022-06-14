import Input from './Input.vue';

export default {
  title: 'Atoms/Input',
  component: Input,
  parameters: {
    docs: {
      description: {
        component: 'Some component _markdown_',
      },
    },
  },
};

const Template = (args) => ({
  components: { Input },
  setup() {
    return { args };
  },
  template: '<Input v-bind="args" />',
});

export const Text = Template.bind({});
Text.args = {
  label: 'Text input label',
  type: 'text'
};

export const Number = Template.bind({});
Number.args = {
  label: 'Number input label',
  type: 'number'
};