import { Autocomplete, TextField } from "@mui/material"

export function Placement() {
  return (

    <Autocomplete options={[
      { id: 1, label: 'Inside' },
      { id: 2, label: 'Outside' },
      { id: 3, label: 'Remote' },
      { id: 4, label: 'Hybrid' },
      { id: 5, label: 'Mobile' },
    ]}
      renderInput={(params) => <TextField {...params} label="Placement" />} />
  )
}
