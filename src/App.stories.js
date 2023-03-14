// Stories for testing `App` go here
// See https://storybook.js.org/docs/react/writing-stories/introduction#how-to-write-stories

import { Meta, Story } from '@storybook/addon-docs';

import { App } from './App';
     
//👇 We create a “template” of how args map to rendering
const Template = (args) => <App {...args} />;
Template.args = {
  
}

// 👇 Each story then reuses that template
export const Primary = (args) =>  
Primary.args = { backgroundColor: '#ff0', label: 'App' };

export const Secondary = Template.bind({});
Secondary.args = { ...Primary.args, label: 'Secondary' };

export const Tertiary = Template.bind({});
Tertiary.args = { ...Primary.args, label: 'Tertiary' };

