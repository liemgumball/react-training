import { MemoryRouter } from 'react-router-dom';
import { Meta, StoryObj } from '@storybook/react';
import DashBoardCard from '.';
import react from '@assets/react.svg';

export default {
  title: 'Components/DashBoardCard',
  component: DashBoardCard,
  decorators: [(Story) => <MemoryRouter>{Story()}</MemoryRouter>],
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'radio',
      options: ['primary', 'secondary', 'thirdly', 'fourthly'],
    },
  },
} satisfies Meta<typeof DashBoardCard>;

type Story = StoryObj<typeof DashBoardCard>;

export const Default: Story = {
  args: {
    to: 'default',
    variant: 'primary',
    name: 'Default',
    mainInfo: '243',
    children: <img src={react} alt="react icon" />,
  },
};

export const NoIcon: Story = {
  args: {
    to: 'noIcon',
    variant: 'primary',
    name: 'No Icon',
    mainInfo: '000',
  },
};

export const Secondary: Story = {
  args: {
    to: 'secondary',
    variant: 'secondary',
    name: 'Secondary',
    mainInfo: '000000',
    children: <img src={react} alt="react icon" />,
  },
};

export const Thirdly: Story = {
  args: {
    to: 'thirdly',
    variant: 'thirdly',
    name: 'Thirdly',
    mainInfo: '000000',
    children: <img src={react} alt="react icon" />,
  },
};

export const Fourthly: Story = {
  args: {
    to: 'fourthly',
    variant: 'fourthly',
    name: 'Fourthly',
    mainInfo: '000000',
    children: <img src={react} alt="react icon" />,
  },
};
