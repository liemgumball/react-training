import { Meta, StoryObj } from '@storybook/react';
import LoginForm from '.';
import AuthProvider from '@contexts/Authentication';

export default {
  title: 'LoginPage/LoginForm',
  component: LoginForm,
  parameters: {
    layout: 'centered',
  },
  argTypes: {},
} satisfies Meta<typeof LoginForm>;

type Story = StoryObj<typeof LoginForm>;

export const Default: Story = () => (
  <AuthProvider>
    <LoginForm />
  </AuthProvider>
);

Default.args = {};
