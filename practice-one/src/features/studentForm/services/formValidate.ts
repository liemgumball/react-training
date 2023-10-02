// constants
import { ERROR_MSG } from '@constants/messages';
import {
  emailRegex,
  enrollNumberRegex,
  nameRegex,
  phoneNumberRegex,
} from '@constants/regex';
import { StudentFormDataType } from '@constants/types';

type FormErrorType = {
  name: string;
  email: string;
  phone: string;
  enrollNumber: string;
};

/**
 * validates form data
 * @param data to validate
 * @param setFormError used to display error message
 * @returns if valid or not
 */
export const formValidate = (
  data: StudentFormDataType,
  setFormError: React.Dispatch<React.SetStateAction<FormErrorType | null>>
) => {
  const { name, email, phone, enrollNumber } = data;
  console.log(data);

  const test = {
    nameIsValid: nameRegex.test(name),
    emailIsValid: emailRegex.test(email),
    phoneIsValid: phoneNumberRegex.test(phone),
    enrollNumberIsValid: enrollNumberRegex.test(enrollNumber.toString()),
  };
  console.log(test);

  setFormError({
    name: test.nameIsValid ? '' : ERROR_MSG.INVALID_NAME,
    email: test.emailIsValid ? '' : ERROR_MSG.INVALID_EMAIL,
    phone: test.phoneIsValid ? '' : ERROR_MSG.INVALID_PHONE_NUMBER,
    enrollNumber: test.enrollNumberIsValid
      ? ''
      : ERROR_MSG.INVALID_ENROLL_NUMBER,
  });

  return Object.values(test).every((value) => value);
};
