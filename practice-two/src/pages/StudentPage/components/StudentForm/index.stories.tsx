import { Meta, StoryObj } from '@storybook/react';
import StudentForm, { StudentFormProps } from '.';
import { QueryClient, QueryClientProvider } from 'react-query';

export default {
  title: 'StudentPage/StudentForm',
  component: StudentForm,
  parameters: {
    layout: 'centered',
  },
  argTypes: {},
} satisfies Meta<typeof StudentForm>;

type Story = StoryObj<typeof StudentForm>;

// Create a QueryClient instance for stories
const queryClient = new QueryClient();

export const Default: Story = (args: StudentFormProps) => (
  <QueryClientProvider client={queryClient}>
    <StudentForm {...args} />
  </QueryClientProvider>
);

Default.args = {
  title: 'add',
  setFormState: () => {},
};

export const WithDefaultValue: Story = (args: StudentFormProps) => (
  <QueryClientProvider client={queryClient}>
    <StudentForm {...args} />
  </QueryClientProvider>
);

WithDefaultValue.args = {
  title: 'edit',
  setFormState: () => {},
  student: {
    id: 0,
    name: 'student',
    email: 'student@school.com',
    phone: '0905000000',
    enrollNumber: 10000000,
  },
};
