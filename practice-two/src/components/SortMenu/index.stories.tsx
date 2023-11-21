import { Meta, StoryObj } from '@storybook/react';
import SortMenu from '.';
import SortOption from '@components/SortOption';

export default {
  title: 'Components/SortMenu',
  component: SortMenu,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: { onClick: { action: 'clicked' } },
} satisfies Meta<typeof SortMenu>;

type Story = StoryObj<typeof SortMenu>;

const children = [
  {
    value: 'name',
    children: 'name',
  },
  {
    value: 'email',
    children: 'email',
  },
  {
    value: 'createdAt',
    children: 'date of admission',
  },
];

export const Default: Story = {
  args: {
    children: children.map((child) => (
      <SortOption key={child.value} value={child.value}>
        {child.children}
      </SortOption>
    )),
  },
};
