import { ComponentMeta, ComponentStory } from '@storybook/react';
import ServiceCard, { IServiceCard } from './ServiceCard';
import { mockServiceCardProps } from './ServiceCard.mocks';

export default {
  title: 'cards/ServiceCard',
  component: ServiceCard,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof ServiceCard>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof ServiceCard> = (args) => (
  <ServiceCard {...args} />
);

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  ...mockServiceCardProps.base,
} as IServiceCard;
