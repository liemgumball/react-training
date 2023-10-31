import { Meta, StoryObj } from '@storybook/react';
import Button from '.';
import react from '@assets/react.svg';

export default {
  title: 'Components/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    onClick: { action: 'clicked' },
    onMouseOver: { action: 'mouseOvered' },
    variant: { control: 'radio', options: ['primary', ''] },
  },
} satisfies Meta<typeof Button>;

type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: {
    variant: 'primary',
    disabled: false,
    children: 'Submit',
  },
};

export const WithIcon: Story = {
  args: {
    disabled: false,
    children: <img src={react} alt="icon" />,
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    children: 'Disabled',
  },
};
