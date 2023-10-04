// constants
import {
  emailRegex,
  enrollNumberRegex,
  nameRegex,
  phoneNumberRegex,
} from '@constants/regex';
import { StudentFormDataType } from '@utils/types';

type FormErrorType = {
  name: boolean;
  email: boolean;
  phone: boolean;
  enrollNumber: boolean;
};

/**
 * validates form data
 * @param data to validate
 * @param setFormError used to display error message
 * @returns if valid or not
 */
export const formValidate = (
  data: StudentFormDataType,
  setFormError: React.Dispatch<React.SetStateAction<FormErrorType>>
) => {
  const { name, email, phone, enrollNumber } = data;

  const test = {
    nameIsValid: nameRegex.test(name),
    emailIsValid: emailRegex.test(email),
    phoneIsValid: phoneNumberRegex.test(phone),
    enrollNumberIsValid: enrollNumberRegex.test(enrollNumber.toString()),
  };

  setFormError({
    name: !test.nameIsValid,
    email: !test.emailIsValid,
    phone: !test.phoneIsValid,
    enrollNumber: !test.enrollNumberIsValid,
  });

  return Object.values(test).every((value) => value);
};
