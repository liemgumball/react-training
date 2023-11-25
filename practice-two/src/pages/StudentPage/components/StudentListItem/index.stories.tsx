import { Meta, StoryObj } from '@storybook/react';
import StudentListItem from '.';
import { TStudent } from 'src/types';
import { QueryClient, QueryClientProvider } from 'react-query';

const data = {
  createdAt: '2023-09-07T23:25:31.357Z',
  name: 'Verna Senger',
  avatar: 'https://loremflickr.com/60/60',
  email: 'Aglae61@yahoo.com',
  phone: '0931009009',
  enrollNumber: 768475388,
  id: 1,
} as TStudent;

const queryClient = new QueryClient();

export default {
  title: 'StudentPage/StudentListItem',
  component: StudentListItem,
  decorators: [
    (Story) => (
      <QueryClientProvider client={queryClient}>{Story()}</QueryClientProvider>
    ),
  ],
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof StudentListItem>;

type Story = StoryObj<typeof StudentListItem>;

export const Default: Story = {
  args: {
    student: data,
  },
};
