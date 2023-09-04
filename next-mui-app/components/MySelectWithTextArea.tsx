import React, { useEffect, useState } from 'react';
import { Control, Controller } from 'react-hook-form';
import { Box, TextField } from '@mui/material';
import Autocomplete from '@mui/material/Autocomplete';

interface MySelectWithTextAreaProps {
  control: Control;
  name: string;
  label: string;
  options: string[];
  setValue: (
    name: string,
    value: string,
    options?: { shouldValidate?: boolean; shouldDirty?: boolean }
  ) => void;
}

const MySelectWithTextArea: React.FC<MySelectWithTextAreaProps> = ({
  control,
  name,
  label,
  options,
  setValue,
}) => {
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);
  const [inputValue, setInputValue] = useState<string>('');

  // selectedOptions が変更されたときに呼び出される useEffect
  useEffect(() => {
    setValue(name, selectedOptions.join('\n'));
  }, [selectedOptions, setValue, name]);

  /**
   * AutoComplete OnInput
   * @param event
   * @param newInputValue
   */
  const handleAutoCompleteInput = (
    event: React.SyntheticEvent,
    newInputValue: string
  ) => {
    setInputValue(newInputValue);
  };

  /**
   * AutoComplete 値をクリアする
   */
  const clearInput = () => {
    setInputValue('');
  };

  /**
   * AutoComplete OnChange
   * @param event
   * @param newValue
   */
  const handleAutoCompleteChange = (
    event: React.SyntheticEvent,
    newValue: string | null
  ) => {
    if (newValue && !selectedOptions.includes(newValue)) {
      setSelectedOptions((prev) => [...prev, newValue]);
    }
  };

  /**
   * TextArea OnChange
   * @param event
   */
  const handleTextAreaChange = (
    event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    const newValue = event.target.value;
    setSelectedOptions(newValue ? newValue.split('\n') : []);
  };

  return (
    <>
      <Autocomplete
        freeSolo
        blurOnSelect
        options={options}
        inputValue={inputValue}
        value={inputValue}
        onInputChange={handleAutoCompleteInput}
        onChange={handleAutoCompleteChange}
        renderOption={(props, option) => {
          return (
            <li {...props} key={option}>
              {option}
            </li>
          );
        }}
        renderInput={(params) => {
          return (
            <TextField
              {...params}
              label={label}
              variant="filled"
              size="small"
              onFocus={clearInput}
            />
          );
        }}
      />

      <Controller
        name={name}
        control={control}
        defaultValue=""
        render={({ field }) => (
          <TextField
            {...field}
            variant="outlined"
            placeholder={`※複数入力可\n改行で分割する`}
            size="small"
            multiline
            rows={4}
            fullWidth
            onChange={(e) => {
              handleTextAreaChange(e);
              field.onChange(e);
            }}
          />
        )}
      />
    </>
  );
};

export default MySelectWithTextArea;
