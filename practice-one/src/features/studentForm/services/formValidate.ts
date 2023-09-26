import { StudentFormDataType } from '../hooks/useStudentForm'

// constants
import { ERROR_MSG } from '@constants/messages'
import {
  emailRegex,
  enrollNumberRegex,
  nameRegex,
  phoneNumberRegex,
} from '@constants/regex'

type FormErrorType = {
  name: string
  email: string
  phone: string
  enrollNumber: string
}

export const formValidate = (
  data: StudentFormDataType,
  setFormError: React.Dispatch<React.SetStateAction<FormErrorType | null>>
) => {
  const { name, email, phone, enrollNumber } = data

  const test = {
    nameIsValid: nameRegex.test(name),
    emailIsValid: emailRegex.test(email),
    phoneIsValid: phoneNumberRegex.test(phone),
    enrollNumberIsValid: enrollNumberRegex.test(enrollNumber.toString()),
  }

  setFormError({
    name: test.nameIsValid ? '' : ERROR_MSG.INVALID_NAME,
    email: test.emailIsValid ? '' : ERROR_MSG.INVALID_EMAIL,
    phone: test.phoneIsValid ? '' : ERROR_MSG.INVALID_PHONENUMBER,
    enrollNumber: test.enrollNumberIsValid
      ? ''
      : ERROR_MSG.INVALID_ENROLLNUMBER,
  })

  return Object.values(test).every((value) => value)
}
