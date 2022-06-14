import Card from "./Card.vue";

export default {
    title: 'Molecules/Card',
    component: Card,
    // Add story decorator
    // decorators: [() => ({ template: '<div style="padding: 3em; background-color: blue;"><story/></div>' })],
};

const Template = (args) => ({
  components: { Card },
  setup() {
    return { args };
  },
  template: '<Card v-bind="args" />',
});

export const Default = Template.bind({});
Default.args = {
    title: 'Card label',
}; 

export const Decorated = Template.bind({});
Decorated.args = {
    title: 'Some title',
    border: true
};
// Decorated.decorators = [() => ({ template: '<div style"=padding: 3rem; background-color: yellow;"><story /></div>' })];