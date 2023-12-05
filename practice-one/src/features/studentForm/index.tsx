import { useEffect, useRef, useState } from 'react';
import InputWithErrorMsg from '@components/InputWithErrorMsg';
import Button from '@components/Button';
import { saveStudent } from './services/saveStudent';
import { formValidate } from './services/formValidate';
import { FormActionType, StudentFormDataType } from '@utils/types';
import { ERROR_MSG } from '@constants/messages';

type StudentFormProps = {
  title?: string;
  data?: StudentFormDataType;
  setFormAction: React.Dispatch<FormActionType>;
  setUpdateStudents: React.Dispatch<React.SetStateAction<boolean>>;
};

const StudentForm: React.FC<StudentFormProps> = (props: StudentFormProps) => {
  const { title, data, setFormAction, setUpdateStudents } = props;

  const [loading, setLoading] = useState<boolean>(false);

  // Ref
  const nameRef = useRef<HTMLInputElement | null>(null);
  const emailRef = useRef<HTMLInputElement | null>(null);
  const phoneRef = useRef<HTMLInputElement | null>(null);
  const enrollNumberRef = useRef<HTMLInputElement | null>(null);

  // form data
  const [form, setForm] = useState<StudentFormDataType>({
    name: '',
    email: '',
    phone: '',
    enrollNumber: 0,
  });

  // used to display error messages
  const [formError, setFormError] = useState<{
    name: boolean;
    email: boolean;
    phone: boolean;
    enrollNumber: boolean;
  }>({ name: false, email: false, phone: false, enrollNumber: false });

  const invalid = Object.values(formError).some((value) => value); // used to disable the submit button

  // set input values every time data changes
  useEffect(() => {
    updateForm(data);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  /**
   * Set input values based on data
   * @param data of student
   */
  const updateForm = (data?: StudentFormDataType) => {
    if (data) {
      nameRef.current!.value = data.name;
      emailRef.current!.value = data.email;
      phoneRef.current!.value = data.phone;
      enrollNumberRef.current!.value = data.enrollNumber.toString();
    } else {
      setForm({ name: '', email: '', phone: '', enrollNumber: 0 });
    }

    // remove form errors messages
    setFormError({
      name: false,
      email: false,
      phone: false,
      enrollNumber: false,
    });
  };

  /**
   * validate, show error message if invalid
   * call request save student if valid
   */
  const handleSubmit = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();

    const [validation, student] = handleValidate(); // get validation and input data

    if (validation) {
      try {
        setLoading(true);
        const response = await saveStudent(student);
        if (response) {
          setFormAction({ type: 'close' });
          setUpdateStudents((p) => !p); // trigger update list
          updateForm(); // set input values to empty
        }
      } catch (err) {
        console.error(err);
        alert((err as Error).message);
      } finally {
        setLoading(false);
      }
    }
  };

  /**
   * Check if input data is valid or not.
   * And show the error message if invalid
   * @returns Data of student & Validation of data
   */
  const handleValidate = () => {
    //Get input data
    const student: StudentFormDataType = {
      id: data?.id,
      name: nameRef.current!.value,
      email: emailRef.current!.value,
      phone: phoneRef.current!.value,
      enrollNumber: +enrollNumberRef.current!.value,
    };

    setForm(student);

    const validation = formValidate(student, setFormError); // validate and show error message

    return [validation, student] as const;
  };

  return (
    <div className="student-form">
      <h2 className="text-3xl font-700 text-center mb-10 uppercase">
        {title ? title : 'student form'}
      </h2>
      <form data-id={data?.id} onChange={handleValidate}>
        <InputWithErrorMsg
          id="name"
          name="Name"
          type="text"
          placeholder="Name"
          showLabel
          errorMsg={ERROR_MSG.INVALID_NAME}
          inValid={!!form.name && formError?.name}
          ref={nameRef}
        />
        <InputWithErrorMsg
          id="email"
          name="Email"
          type="text"
          placeholder="Email"
          showLabel
          errorMsg={ERROR_MSG.INVALID_EMAIL}
          inValid={!!form.email && formError?.email}
          ref={emailRef}
        />
        <InputWithErrorMsg
          id="phone"
          name="Phone"
          type="tel"
          placeholder="Phone number"
          showLabel
          errorMsg={ERROR_MSG.INVALID_PHONE_NUMBER}
          inValid={!!form.phone && formError?.phone}
          ref={phoneRef}
        />
        <InputWithErrorMsg
          id="enrollNumber"
          name="EnrollNumber"
          type="number"
          placeholder="Enroll number"
          showLabel
          errorMsg={ERROR_MSG.INVALID_ENROLL_NUMBER}
          inValid={!!form.enrollNumber && formError?.enrollNumber}
          ref={enrollNumberRef}
        />
        <Button
          type="submit"
          onClick={handleSubmit}
          className="submit-btn"
          disabled={loading || invalid}
          primary
        >
          {loading ? 'Loading...' : 'Done'}
        </Button>
      </form>
    </div>
  );
};

StudentForm.whyDidYouRender = true;

export default StudentForm;
