import { Meta, StoryObj } from '@storybook/react';
import SortOption from '.';
import { MemoryRouter } from 'react-router-dom';

export default {
  title: 'Components/SortOption',
  component: SortOption,
  decorators: [(Story) => <MemoryRouter>{Story()}</MemoryRouter>],
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
    active: true,
  },
};
