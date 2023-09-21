import InputWithErrorMsg from '@components/inputWithErrorMsg'
import { TStudent } from '@features/list/components/StudentListItem'
import { useRef, useState } from 'react'
import { formvalidate } from './services/formvalidate'
import { addStudent } from './services/addStudent'
import { FormPopupProps } from 'src/pages/StudentPage'

export type StudentFormDataType = Pick<
  TStudent,
  'name' | 'email' | 'phone' | 'enrollNumber'
>

type StudentFormProps = {
  title?: string
  data?: TStudent
  setFormPopup: React.Dispatch<React.SetStateAction<FormPopupProps>>
  setUpdateStudents: React.Dispatch<React.SetStateAction<boolean>>
}

const StudentForm = (props: StudentFormProps) => {
  const { title, data, setFormPopup, setUpdateStudents } = props

  const [loading, setLoading] = useState(false)
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

  const clearForm = () => {
    nameRef.current!.value = ''
    emailRef.current!.value = ''
    phoneRef.current!.value = ''
    enrollNumberRef.current!.value = ''
  }

  const handleSubmit = async () => {
    const data: StudentFormDataType = {
      name: nameRef.current!.value.trim(),
      email: emailRef.current!.value.trim(),
      phone: phoneRef.current!.value.trim(),
      enrollNumber: +enrollNumberRef.current!.value.trim(),
    }

    const validation = formvalidate(data, setFormError)

    if (validation) {
      try {
        setLoading(true)
        const responeStudent = await addStudent(data)
        if (responeStudent) {
          setFormPopup({ show: false })
          setUpdateStudents((p) => !p)
        }
      } catch (err) {
        console.log('err')
        alert((err as Error).message)
      } finally {
        setLoading(false)
        clearForm()
      }
    }
  }

  return (
    <div className="bg-white p-16 rounded-2xl shadow-lg max-w-2xl w-full relative">
      <h2 className="text-3xl font-700 text-center mb-10 uppercase">
        {title ? title : 'student form'}
      </h2>
      <form>
        <InputWithErrorMsg
          id="name"
          name="Name"
          type="text"
          placeholder="Name"
          value={data?.name}
          ref={nameRef}
          errorMsg={formError?.name}
        />
        <InputWithErrorMsg
          id="email"
          name="Email"
          type="text"
          placeholder="Email"
          value={data?.email}
          ref={emailRef}
          errorMsg={formError?.email}
        />
        <InputWithErrorMsg
          id="phone"
          name="Phone"
          type="tel"
          placeholder="Phone number"
          value={data?.phone}
          ref={phoneRef}
          errorMsg={formError?.phone}
        />
        <InputWithErrorMsg
          id="enrollNumber"
          name="EnrollNumber"
          type="number"
          placeholder="Enroll number"
          value={data?.enrollNumber.toString()}
          ref={enrollNumberRef}
          errorMsg={formError?.enrollNumber.toString()}
        />
        <button
          type="submit"
          onClick={(e) => {
            e.preventDefault()
            handleSubmit()
          }}
          className={`${
            loading ? 'bg-custom-gray' : 'bg-custom-yellow'
          } block mx-auto rounded-lg py-4 px-16 text-xl text-white text-center uppercase hover:shadow-xl`}
        >
          {loading ? 'loading...' : 'done'}
        </button>
      </form>
    </div>
  )
}

export default StudentForm
