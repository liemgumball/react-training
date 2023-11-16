import { MemoryRouter } from 'react-router-dom';
import { Meta, StoryObj } from '@storybook/react';
import DashBoardCard, { DashBoardCardProps } from '.';
import react from '@assets/react.svg';

export default {
  title: 'Components/DashBoardCard',
  component: DashBoardCard,
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

export const Default: Story = (args: DashBoardCardProps) => (
  <MemoryRouter>
    <DashBoardCard {...args} style={{ width: 300 }} />
  </MemoryRouter>
);

Default.args = {
  to: 'default',
  variant: 'primary',
  name: 'Default',
  mainInfo: '243',
  children: <img src={react} alt="react icon" />,
};

export const NoIcon: Story = (args: DashBoardCardProps) => (
  <MemoryRouter>
    <DashBoardCard {...args} style={{ width: 300 }} />
  </MemoryRouter>
);

NoIcon.args = {
  to: 'noIcon',
  variant: 'primary',
  name: 'No Icon',
  mainInfo: '000',
};

export const Secondary: Story = (args: DashBoardCardProps) => (
  <MemoryRouter>
    <DashBoardCard {...args} style={{ width: 300 }} />
  </MemoryRouter>
);

Secondary.args = {
  to: 'secondary',
  variant: 'secondary',
  name: 'Secondary',
  mainInfo: '000',
  children: <img src={react} alt="react icon" />,
};

export const Thirdly: Story = (args: DashBoardCardProps) => (
  <MemoryRouter>
    <DashBoardCard {...args} style={{ width: 300 }} />
  </MemoryRouter>
);

Thirdly.args = {
  to: 'thirdly',
  variant: 'thirdly',
  name: 'Thirdly',
  mainInfo: '000',
  children: <img src={react} alt="react icon" />,
};

export const Fourthly: Story = (args: DashBoardCardProps) => (
  <MemoryRouter>
    <DashBoardCard {...args} style={{ width: 300 }} />
  </MemoryRouter>
);

Fourthly.args = {
  to: 'fourthly',
  variant: 'fourthly',
  name: 'Fourthly',
  mainInfo: '000',
  children: <img src={react} alt="react icon" />,
};
