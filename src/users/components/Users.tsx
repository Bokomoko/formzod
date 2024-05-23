import { useFormContext } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod'
import { Stack, TextField, Autocomplete } from '@mui/material'
import { Schema, schema } from '../types/schema'
import { BKMAutocomplete } from '../../components/BKMAutocomplete';
export function Users() {
  const { register, formState: { errors } } = useFormContext<Schema>()
  return <>
    <div style={{ width: '400px' }}>
      <Stack sx={{ gap: 2 }}>

        <TextField {...register('name')} label="Name" error={!!errors.name} helperText={errors.name?.message} />
        <TextField {...register('email')} label="Email" error={!!errors.email} helperText={errors.email?.message} />
        <TextField {...register('age')} label="Age" error={!!errors.age} helperText={errors.age?.message} />
        <BKMAutocomplete name="placement" />
      </Stack>
    </div >
  </>
}
