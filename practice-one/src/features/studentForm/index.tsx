import { useEffect, useRef, useState } from 'react'
import InputWithErrorMsg from '@components/InputWithErrorMsg'
import Button from '@components/Button'
import { saveStudent } from './services/saveStudent'
import { formValidate } from './services/formValidate'
import { FormActionType, StudentFormDataType } from './hooks/useStudentForm'

type StudentFormProps = {
  title?: string
  data?: StudentFormDataType
  setFormAction: React.Dispatch<FormActionType>
  setUpdateStudents: React.Dispatch<React.SetStateAction<boolean>>
}

const StudentForm = (props: StudentFormProps) => {
  const { title, data, setFormAction, setUpdateStudents } = props

  const [loading, setLoading] = useState<boolean>(false)
  const nameRef = useRef<HTMLInputElement | null>(null)
  const emailRef = useRef<HTMLInputElement | null>(null)
  const phoneRef = useRef<HTMLInputElement | null>(null)
  const enrollNumberRef = useRef<HTMLInputElement | null>(null)

  const [formError, setFormError] = useState<{
    name: string
    email: string
    phone: string
    enrollNumber: string
  } | null>(null)

  useEffect(() => {
    updateForm(data)
  }, [data])

  const updateForm = (data?: StudentFormDataType) => {
    nameRef.current!.value = data ? data.name : ''
    emailRef.current!.value = data ? data.email : ''
    phoneRef.current!.value = data ? data.phone : ''
    enrollNumberRef.current!.value = data ? data.enrollNumber.toString() : ''

    setFormError(null)
  }

  const handleSubmit = async () => {
    const student: StudentFormDataType = {
      id: data?.id,
      name: nameRef.current!.value.trim(),
      email: emailRef.current!.value.trim(),
      phone: phoneRef.current!.value.trim(),
      enrollNumber: +enrollNumberRef.current!.value.trim(),
    }

    const validation = formValidate(student, setFormError)

    if (validation) {
      try {
        setLoading(true)
        const response = await saveStudent(student)
        if (response) {
          setFormAction({ type: 'close' })
          setUpdateStudents((p) => !p) // trigger rerender list
        }
      } catch (err) {
        console.log('err')
        alert((err as Error).message)
      } finally {
        setLoading(false)
        updateForm()
      }
    }
  }

  return (
    <div className="bg-white p-16 rounded-2xl shadow-lg max-w-2xl w-full relative">
      <h2 className="text-3xl font-700 text-center mb-10 uppercase">
        {title ? title : 'student form'}
      </h2>
      <form data-id={data?.id}>
        <InputWithErrorMsg
          id="name"
          name="Name"
          type="text"
          placeholder="Name"
          ref={nameRef}
          errorMsg={formError?.name}
        />
        <InputWithErrorMsg
          id="email"
          name="Email"
          type="text"
          placeholder="Email"
          ref={emailRef}
          errorMsg={formError?.email}
        />
        <InputWithErrorMsg
          id="phone"
          name="Phone"
          type="tel"
          placeholder="Phone number"
          ref={phoneRef}
          errorMsg={formError?.phone}
        />
        <InputWithErrorMsg
          id="enrollNumber"
          name="EnrollNumber"
          type="number"
          placeholder="Enroll number"
          ref={enrollNumberRef}
          errorMsg={formError?.enrollNumber.toString()}
        />
        <Button
          type="submit"
          onClick={(e) => {
            e.preventDefault()
            handleSubmit()
          }}
          className={`${
            loading ? 'bg-custom-gray' : 'bg-custom-yellow'
          } block mx-auto px-16 text-white uppercase text-xl`}
        >
          {loading ? 'loading...' : 'done'}
        </Button>
      </form>
    </div>
  )
}

export default StudentForm
