import { Meta, StoryObj } from '@storybook/react';
import Input from '.';

export default {
  title: 'Components/Input',
  component: Input,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Input>;

type Story = StoryObj<typeof Input>;

export const Default: Story = {
  args: {
    inValid: true,
    defaultValue: 'OK',
    placeholder: 'Please enter',
  },
};
