import { max } from 'lodash';
import { useForm } from 'react-hook-form';
export function Users() {
  const { register,
    handleSubmit,
    formState: { errors } } = useForm<{ email: string }>({
      mode: 'all',  // defines when the validation is done
    }
    );
  function onSubmit() {
    console.log('submitted')
  }
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register('email', {
        required: { value: true, message: 'Email is required' },
        maxLength: { value: 50, message: 'Max length is 50' }
      }
      )} placeholder='Email' />
      {errors.email && <p>{errors.email.message}</p>}
    </form>
  )
}
