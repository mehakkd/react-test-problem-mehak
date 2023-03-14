// Stories for testing `App` go here
// See https://storybook.js.org/docs/react/writing-stories/introduction#how-to-write-stories

import React from 'react';

import { ComponentMeta } from '@storybook/react';

import { App } from './App';

export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'App',
  component: App,
};

//👇 We create a “template” of how args map to rendering
const Template: ComponentStory<typeof App> = (args) => <App {...args} />;

//👇 Each story then reuses that template
export const Primary = Template.bind({});
Primary.args = { backgroundColor: '#ff0', label: 'Primary' };

export const Secondary = Template.bind({});
Secondary.args = { ...Primary.args, label: '😄👍😍💯' };

export const Tertiary = Template.bind({});
Tertiary.args = { ...Primary.args, label: '📚📕📈🤓' };
