export type AuthType = {
  accessToken: string;
  name: string;
} | null;

export type TStudent = {
  createdAt: string;
  name: string;
  avatar: string;
  email: string;
  phone: string;
  enrollNumber: number;
  id: number;
};

export type TPayment = {
  createdAt: string;
  billNumber: number;
  paid: number;
  balance: number;
  studentId: number;
  id: number;
  student?: TStudent;
};

export type FormActionType = {
  type: 'add' | 'edit' | 'close';
  data?: TStudent;
};

export type StudentFormDataType = Pick<
  TStudent,
  'name' | 'email' | 'phone' | 'enrollNumber'
> & { id?: number };

export type StudentFormStates = {
  show: boolean;
  title?: string;
  data?: StudentFormDataType;
};
