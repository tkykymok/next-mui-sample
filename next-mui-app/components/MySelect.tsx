import { Control, Controller } from 'react-hook-form';
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import { FC, ReactElement } from 'react';

interface MySelectProps {
  control: Control;
  name: string;
  label: string;
  options: { label: string; value: string | number }[];
  startAdornment?: ReactElement;
}

const MySelect: FC<MySelectProps> = ({
  control,
  name,
  label,
  options,
  startAdornment = null,
}) => {
  return (
    <Controller
      name={name}
      control={control}
      defaultValue=""
      render={({ field }) => (
        <FormControl fullWidth variant="outlined" size="small">
          <InputLabel>{label}</InputLabel>
          <Select label={label} {...field} startAdornment={startAdornment}>
            {options.map((option, index) => (
              <MenuItem key={index} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      )}
    />
  );
};

export default MySelect;
