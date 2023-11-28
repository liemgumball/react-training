export const DATABASE_RESOURCES = {
  LOGIN: 'login',
  STUDENTS: 'students',
  PAYMENTS: 'payments',
};

export const PATH_NAME = {
  HOME: '/',
  LOGIN: '/login',
  STUDENTS: '/students',
  PAYMENTS: '/payments',
  COURSES: '/courses',
  REPORTS: '/reports',
  SETTINGS: '/settings',
  RESET_PASSWORD: '/reset-password',
  EMPTY_PAGE: '/empty-page',
};

export const STUDENTS_URL = `${import.meta.env.VITE_API_URL}/${
  DATABASE_RESOURCES.STUDENTS
}`;

export const PAYMENTS_URL = `${import.meta.env.VITE_API_URL}/${
  DATABASE_RESOURCES.PAYMENTS
}`;
