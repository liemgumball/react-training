import { Meta, StoryObj } from '@storybook/react';
import SortOption from '.';

export default {
  title: 'Components/SortOption',
  component: SortOption,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    value: { control: 'text' },
    active: { control: 'boolean' },
  },
} satisfies Meta<typeof SortOption>;

type Story = StoryObj<typeof SortOption>;

export const Default: Story = {
  args: {
    value: 'name',
    children: 'Name',
  },
};
