import { Meta, StoryObj } from '@storybook/react';
import List from '.';
import api from '@services/apiRequest';
import { TStudent } from '@utils/types';
import StudentListItem from '@pages/StudentPage/StudentListItem';

export default {
  title: 'Components/List',
  component: List,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    onClick: { action: 'clicked' },
    isError: { control: 'boolean' },
    isLoading: { control: 'boolean' },
    error: {
      control: 'radio',
      options: [new Error('Error message'), new Error('Uncaught exception')],
    },
  },
} satisfies Meta<typeof List>;

type Story = StoryObj<typeof List>;

const data = await api.get(`${process.env.API_GATEWAY}/students?_limit=5`);

export const Default: Story = {
  args: {
    children: (data as TStudent[]).map((item, index) => (
      <StudentListItem data={item} key={index} />
    )),
    error: new Error('Testing error message'),
  },
};

export const IsError: Story = {
  args: {
    isError: true,
    error: new Error('Testing error message'),
    children: (data as TStudent[]).map((item, index) => (
      <StudentListItem data={item} key={index} />
    )),
  },
};

export const IsLoading: Story = {
  args: {
    isLoading: true,
    children: (data as TStudent[]).map((item, index) => (
      <StudentListItem data={item} key={index} />
    )),
  },
};
