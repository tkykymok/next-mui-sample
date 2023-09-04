import { Control, Controller, FieldValues } from 'react-hook-form';
import { TextField } from '@mui/material';
import { FC, ReactElement } from 'react';

interface MyTextFieldProps {
  control: Control;
  name: string;
  label: string;
  startAdornment?: ReactElement;
}

const MyTextField: FC<MyTextFieldProps> = ({
  control,
  name,
  label,
  startAdornment = null,
}) => {
  return (
    <Controller
      name={name}
      control={control}
      defaultValue=""
      render={({ field }) => (
        <TextField
          InputProps={{ startAdornment }}
          size="small"
          label={label}
          variant="outlined"
          fullWidth
          {...field}
        />
      )}
    />
  );
};

export default MyTextField;
