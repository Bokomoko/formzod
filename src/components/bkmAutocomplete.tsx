import { Controller, FieldValues, Path, useFormContext } from "react-hook-form"
import { Autocomplete } from "@mui/material"
interface Props<T extends FieldValues{

  name: Path<T>
}
export function BKMAutocomplete<T extends FieldValues>({ name }: Props<T>) {
  const { control } = useFormContext()
  return (
    <Controller control={control} name={name} render={(params) => <Autocomplete options={[
      { id: 1, label: 'Inside' },
      { id: 2, label: 'Outside' },
      { id: 3, label: 'Remote' },
      { id: 4, label: 'Hybrid' },
      { id: 5, label: 'Mobile' },
    ]} />} />
  )
}
