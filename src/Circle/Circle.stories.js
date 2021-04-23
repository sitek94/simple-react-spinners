import React from 'react';

import { Circle } from '.';

export default {
  title: 'Circle',
  component: Circle,
};

const Template = args => <Circle {...args} />;

export const FirstStory = Template.bind({});

FirstStory.args = {};
