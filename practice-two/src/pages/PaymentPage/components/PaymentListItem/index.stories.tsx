import { Meta, StoryObj } from '@storybook/react';
import PaymentListItem from '.';
import { TPayment } from 'src/types';

export default {
  title: 'PaymentPage/PaymentListItem',
  component: PaymentListItem,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof PaymentListItem>;

type Story = StoryObj<typeof PaymentListItem>;

const data = {
  createdAt: '2023-09-08T02:12:26.455Z',
  studentId: 1,
  billNumber: 832734803,
  paid: 436135112,
  balance: 704937932,
  id: 1,
  student: {
    createdAt: '2023-09-07T23:25:31.357Z',
    name: 'Verna Senger',
    avatar: 'https://loremflickr.com/60/60',
    email: 'Aglae61@yahoo.com',
    phone: '0931009009',
    enrollNumber: 768475388,
    id: 1,
  },
} as TPayment;

export const Default: Story = {
  args: { data: data },
};
