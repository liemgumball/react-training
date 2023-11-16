import { Meta, StoryObj } from '@storybook/react';
import StudentListItem from '.';
import { TStudent } from '@utils/types';

const data = {
  createdAt: '2023-09-07T23:25:31.357Z',
  name: 'Verna Senger',
  avatar: 'https://loremflickr.com/60/60',
  email: 'Aglae61@yahoo.com',
  phone: '0931009009',
  enrollNumber: 768475388,
  id: 1,
} as TStudent;

export default {
  title: 'Components/StudentListItem',
  component: StudentListItem,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: { isFetching: { control: 'boolean' } },
} satisfies Meta<typeof StudentListItem>;

type Story = StoryObj<typeof StudentListItem>;

export const Default: Story = {
  args: {
    data: data,
    isFetching: false,
  },
};

export const IsFetching: Story = {
  args: {
    data: data,
    isFetching: true,
  },
};
