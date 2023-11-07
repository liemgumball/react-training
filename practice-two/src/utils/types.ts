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
