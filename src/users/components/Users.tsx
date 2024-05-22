import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod'
import { Stack, TextField } from '@mui/material'
import { Schema, schema } from '../types/schema'
export function Users() {
  const { register } = useForm<Schema>({
    mode: 'all',
    resolver: zodResolver(schema),
  }
  );
  return <>
    <Stack sx={{ gap: 2 }}>

      <TextField {...register('name')} label="Name" />
      <TextField {...register('email')} label="Email" />
      <TextField {...register('age')} label="Age" />
    </Stack>

  </>
}
