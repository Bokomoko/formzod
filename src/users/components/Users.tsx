import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod'
import { Stack, TextField, Autocomplete } from '@mui/material'
import { Schema, schema } from '../types/schema'
export function Users() {
  const { register, formState: { errors } } = useForm<Schema>({
    mode: 'all',
    resolver: zodResolver(schema),
  }
  );
  return <>
    <div style={{ width: '400px' }}>
      <Stack sx={{ gap: 2 }}>

        <TextField {...register('name')} label="Name" error={!!errors.name} helperText={errors.name?.message} />
        <TextField {...register('email')} label="Email" error={!!errors.email} helperText={errors.email?.message} />
        <Autocomplete options={[
          { id: 1, label: 'Inside' },
          { id: 2, label: 'Outside' },
          { id: 3, label: 'Remote' },
          { id: 4, label: 'Hybrid' },
          { id: 5, label: 'Mobile' },
        ]}
          renderInput={(params) => <TextField {...params} label="Placement" />} />
        <TextField {...register('age')} label="Age" error={!!errors.age} helperText={errors.age?.message} />
      </Stack>
    </div >
  </>
}
