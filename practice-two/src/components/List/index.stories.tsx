import { Meta, StoryObj } from '@storybook/react';
import List from '.';
import { TStudent } from 'src/types';
import StudentListItem from '@pages/StudentPage/components/StudentListItem';
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient();

export default {
  title: 'Components/List',
  component: List,
  decorators: [
    (Story) => (
      <QueryClientProvider client={queryClient}>{Story()}</QueryClientProvider>
    ),
  ],
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

const data = [
  {
    createdAt: '2023-09-07T23:25:31.357Z',
    name: 'Verna Senger',
    avatar: 'https://loremflickr.com/60/60',
    email: 'Aglae61@yahoo.com',
    phone: '0931009009',
    enrollNumber: 768475388,
    id: 1,
  },
  {
    createdAt: '2023-09-07T19:49:09.602Z',
    name: 'Andres Rath',
    avatar: 'https://loremflickr.com/60/60',
    email: 'Florida63@yahoo.com',
    phone: '0931009009',
    enrollNumber: 507549695,
    id: 2,
  },
  {
    createdAt: '2023-09-07T05:45:23.661Z',
    name: 'Charlotte Walker',
    avatar: 'https://loremflickr.com/60/60',
    email: 'Timmy_Cummerata@yahoo.com',
    phone: '0931009009',
    enrollNumber: 413719441,
    id: 3,
  },
  {
    createdAt: '2023-09-08T02:15:27.377Z',
    name: 'Otis Strosin',
    avatar: 'https://loremflickr.com/60/60',
    email: 'Ryleigh_Barton@hotmail.com',
    phone: '0931009009',
    enrollNumber: 271711717,
    id: 4,
  },
];

export const Default: Story = {
  args: {
    children: (data as TStudent[]).map((item, index) => (
      <StudentListItem
        student={item}
        key={index}
        setStudentFormState={() => {}}
      />
    )),
    error: new Error('Testing error message'),
  },
};

export const IsError: Story = {
  args: {
    isError: true,
    error: new Error('Testing error message'),
    children: (data as TStudent[]).map((item, index) => (
      <StudentListItem
        student={item}
        key={index}
        setStudentFormState={() => {}}
      />
    )),
  },
};

export const IsLoading: Story = {
  args: {
    isLoading: true,
    children: (data as TStudent[]).map((item, index) => (
      <StudentListItem
        student={item}
        key={index}
        setStudentFormState={() => {}}
      />
    )),
  },
};
