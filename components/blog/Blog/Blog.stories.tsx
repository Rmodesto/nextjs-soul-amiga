import { ComponentMeta, ComponentStory } from '@storybook/react';
import Blog, { IBlog } from './Blog';
import { mockBlogProps } from './Blog.mocks';

export default {
  title: 'blog/Blog',
  component: Blog,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof Blog>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Blog> = (args) => <Blog {...args} />;

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  ...mockBlogProps.base,
} as IBlog;
