import { Meta, StoryObj } from '@storybook/react';
import Button from '.';

export default {
  title: 'Components/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Button>;

type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: {
    primary: true,
    disabled: false,
    children: 'Submit',
    onClick: () => {},
  },
};
