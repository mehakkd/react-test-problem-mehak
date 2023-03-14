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

export const Primary: ComponentStory<typeof App> = () => <App primary>App</App>;
