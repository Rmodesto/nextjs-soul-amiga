import { ComponentMeta, ComponentStory } from '@storybook/react';
import Social_Icons, { ISocial_Icons } from './Social_Icons';
import { mockSocial_IconsProps } from './Social_Icons.mocks';

export default {
  title: 'socials/Social_Icons',
  component: Social_Icons,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof Social_Icons>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Social_Icons> = (args) => (
  <Social_Icons {...args} />
);

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  ...mockSocial_IconsProps.base,
} as ISocial_Icons;
