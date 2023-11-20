import { Dispatch } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useMutation, useQueryClient } from 'react-query';
import { saveStudent } from '@pages/StudentPage/services/saveStudent';
import Button from '@components/Button';
import Input from '@components/Input';
import { ERROR_MSG } from '@constants/messages';
import {
  emailRegex,
  enrollNumberRegex,
  nameRegex,
  phoneNumberRegex,
} from '@constants/regex';
import { StudentInputs } from '@utils/types';
import { StudentFormAction } from '@pages/StudentPage/hooks/useStudentForm';

export type StudentFormProps = {
  title?: 'add' | 'edit';
  student?: StudentInputs;
  setFormState: Dispatch<StudentFormAction>;
};

type FormInputs = Omit<StudentInputs, 'id'>;

const StudentForm: React.FC<StudentFormProps> = (props: StudentFormProps) => {
  const { title, setFormState, student } = props;

  // Hook form
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isValid, isSubmitted, isSubmitting },
  } = useForm<FormInputs>();

  // Mutations
  const queryClient = useQueryClient();
  const { mutateAsync } = useMutation({
    mutationFn: saveStudent,
    onSuccess: () => {
      setFormState({ status: 'closed' }); // close form
      // Invalidate and refetch students list
      queryClient.invalidateQueries({ queryKey: ['students'] });
    },
    onError: (err: Error) => {
      setError('root', { type: 'value', message: err.message });
    },
  });

  /**
   * Save student after successful validation
   * @param data value to save student information
   */
  const onValid: SubmitHandler<FormInputs> = async (data) => {
    // Use async mutation here to make it's a promise
    // And use `await` so the isSubmitting variable of hook-form can be shown
    await mutateAsync({ ...data, id: student?.id } as StudentInputs);
  };

  return (
    <div className="fixed inset-0 flex justify-center items-center">
      {/* Modal close  */}
      <div
        className="fixed inset-0 bg-black opacity-50"
        onClick={() => setFormState({ status: 'closed' })}
      />

      <form
        className="bg-white p-16 rounded-2xl shadow-lg max-w-2xl w-full grid grid-cols-1 z-50"
        onSubmit={handleSubmit(onValid)}
      >
        <h2 className="text-3xl font-700 text-center mb-10 uppercase">
          {title || ''} student
        </h2>

        {/* Name input */}
        <label className="text-custom-dark-gray" htmlFor="name">
          Name{' '}
        </label>
        <Input
          autoFocus
          id="name"
          type="text"
          placeholder="Enter your name"
          defaultValue={student?.name}
          inValid={!!errors.name}
          {...register('name', {
            required: 'Please enter name',
            pattern: {
              value: nameRegex,
              message: ERROR_MSG.INVALID_NAME,
            },
          })}
        />
        {/* Error message */}
        {errors.name && (
          <p className="text-red-500 text-xs" role="alert">
            {errors.name.message}
          </p>
        )}

        {/* Email input */}
        <label className="text-custom-dark-gray mt-5" htmlFor="email">
          Email{' '}
        </label>
        <Input
          id="email"
          type="text"
          placeholder="Enter your email address"
          defaultValue={student?.email}
          inValid={!!errors.email}
          {...register('email', {
            required: 'Please enter a valid email',
            pattern: {
              value: emailRegex,
              message: ERROR_MSG.INVALID_EMAIL,
            },
          })}
        />
        {/* Error message */}
        {errors.email && (
          <p className="text-red-500 text-xs" role="alert">
            {errors.email.message}
          </p>
        )}

        {/* Phone input */}
        <label className="text-custom-dark-gray mt-5" htmlFor="phone">
          Phone number{' '}
        </label>
        <Input
          id="phone"
          type="tel"
          placeholder="Enter your phone number"
          defaultValue={student?.phone}
          inValid={!!errors.phone}
          {...register('phone', {
            required: 'Please enter a valid phone number',
            pattern: {
              value: phoneNumberRegex,
              message: ERROR_MSG.INVALID_PHONE_NUMBER,
            },
          })}
        />
        {/* Error message */}
        {errors.phone && (
          <p className="text-red-500 text-xs" role="alert">
            {errors.phone.message}
          </p>
        )}

        {/* Enroll number input */}
        <label className="text-custom-dark-gray mt-5" htmlFor="enrollNumber">
          Enroll number{' '}
        </label>
        <Input
          id="enrollNumber"
          type="number"
          placeholder="Enter enroll number"
          defaultValue={student?.enrollNumber}
          inValid={!!errors.enrollNumber}
          {...register('enrollNumber', {
            required: 'Please enter an enroll number',
            pattern: {
              value: enrollNumberRegex,
              message: ERROR_MSG.INVALID_ENROLL_NUMBER,
            },
          })}
        />
        {/* Error message */}
        {errors.enrollNumber && (
          <p className="text-red-500 text-xs" role="alert">
            {errors.enrollNumber.message}
          </p>
        )}

        <Button
          disabled={(!isValid && isSubmitted) || isSubmitting}
          variant="primary"
          className="mt-10 w-1/2 justify-self-center uppercase text-md"
          type="submit"
        >
          {isSubmitting ? 'submitting...' : 'done'}
        </Button>
      </form>
    </div>
  );
};

StudentForm.whyDidYouRender = true;

export default StudentForm;
