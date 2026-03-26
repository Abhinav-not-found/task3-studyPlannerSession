import { nanoid } from "nanoid"
import { useContext } from "react"
import { useForm } from "react-hook-form"
import Button from "@/components/ui/button"
import { SessionContext } from "@/stores/sessionContext"

const sessionForm = ({ setFormView }) => {
  const { addSession } = useContext(SessionContext)

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm()

  const onSubmit = (data) => {
    addSession({ ...data, id: nanoid() })
    setFormView(false)
    reset()
  }
  return (
    <form onSubmit={handleSubmit(onSubmit)} className='max-w-sm min-w-sm'>
      <Field label={"Topic name"} errors={errors.topic}>
        <Input
          name='topic'
          placeholder={"Enter topic name"}
          register={register}
          rules={{
            required: "Topic is required",
            minLength: { value: 3, message: "Min 3 characters" },
            maxLength: { value: 20, message: "Max 20 characters" },
          }}
          errors={errors.topic}
        />
      </Field>
      <Field label={"Subject"} errors={errors.subject}>
        <Select
          name='subject'
          options={["DSA", "WebDev", "DBMS", "OS", "Other"]}
          register={register}
          rules={{ required: "Select a subject" }}
          errors={errors.subject}
        />
      </Field>
      <Field label={"Duration"} errors={errors.duration}>
        <Input
          type='number'
          name='duration'
          placeholder={"Min 10 mins"}
          register={register}
          rules={{
            required: "Duration is required",
            min: { value: 10, message: "Minimum 10 minutes" },
            valueAsNumber: true,
          }}
          errors={errors.duration}
        />
      </Field>
      <Field label={"Priority"} errors={errors.priority}>
        <Select
          name={"priority"}
          options={["Low", "Medium", "High"]}
          register={register}
          rules={{ required: "Select priority" }}
          errors={errors.priority}
        />
      </Field>
      <Field label={"Date"} errors={errors.date}>
        <Input
          name={"date"}
          type={"date"}
          register={register}
          rules={{ required: "Date is required" }}
          errors={errors.date}
        />
      </Field>
      <div className='flex gap-4'>
        <Button type='reset' className={"w-full"} variant='outline'>
          Reset
        </Button>
        <Button type='submit' className={"w-full"}>
          Submit
        </Button>
      </div>
    </form>
  )
}

export default sessionForm

const Field = ({ children, label, errors }) => {
  return (
    <div className='flex flex-col mb-3 gap-1'>
      <label>{label}</label>
      {children}
      {errors && <p className='text-red-500 text-sm'>{errors.message}</p>}
    </div>
  )
}

const Input = ({
  type = "text",
  placeholder,
  register,
  name,
  rules,
  errors,
}) => {
  return (
    <input
      {...register(name, rules)}
      type={type}
      placeholder={placeholder}
      className={`border py-1 px-2 rounded-md ${errors && "border-red-500"}`}
    />
  )
}

const Select = ({ options = [], name, register }) => {
  return (
    <select className='border py-1 px-2 rounded-md' {...register(name)}>
      {options.map((i) => {
        return <option key={i}>{i}</option>
      })}
    </select>
  )
}
