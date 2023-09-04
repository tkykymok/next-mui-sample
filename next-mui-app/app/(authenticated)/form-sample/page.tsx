'use client';

import React from 'react';
import { FieldValues, useForm } from 'react-hook-form';
import {
  Autocomplete,
  Box,
  Button,
  Grid,
  InputAdornment,
  TextareaAutosize,
} from '@mui/material';
import { AccountCircle, Lock } from '@mui/icons-material';
import MyTextField from '@/components/MyTextField';
import TextField from '@mui/material/TextField';
import MySelect from '@/components/MySelect';
import MySelectWithTextArea from '@/components/MySelectWithTextArea';

const Page = () => {
  const { handleSubmit, control, setValue, watch } = useForm<FieldValues>();

  const onSubmit = (data: any) => {
    console.log(data);
  };

  const options = [
    { label: 'Option 1', value: '1' },
    { label: 'Option 2', value: '2' },
  ];

  const options2 = ['AAA', 'BBB', 'CCC', 'DDD', 'EEE', 'FFF', 'GGG', 'HHH'];

  return (
    <Grid container>
      <Grid item xs={3} className="p-4">
        <p>アイコン付きTextField</p>
        <Box component="div" className="h-full">
          <Box
            component="form"
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col h-full space-y-3"
          >
            <MyTextField
              control={control}
              name="username"
              label="Username"
              startAdornment={
                <InputAdornment position="start">
                  <AccountCircle />
                </InputAdornment>
              }
            />

            <MyTextField
              control={control}
              name="password"
              label="Password"
              startAdornment={
                <InputAdornment position="start">
                  <Lock />
                </InputAdornment>
              }
            />

            <Button type="submit" variant="contained" color="primary">
              Submit
            </Button>
          </Box>
        </Box>
      </Grid>

      <Grid item xs={3} className="p-4">
        <p>通常のTextField</p>
        <MyTextField control={control} name="sample" label="sample" />
      </Grid>

      <Grid item xs={3} className="p-4">
        <p>通常のSelect</p>
        <MySelect
          label="セレクトサンプル1"
          control={control}
          name="selectSample1"
          options={options}
        />
      </Grid>

      <Grid item xs={3} className="p-4">
        <p>Select + TextArea</p>
        <MySelectWithTextArea
          control={control}
          label="アイテム"
          name="multipleComboBoxSample"
          options={options2}
          setValue={setValue}
        />
      </Grid>

    </Grid>
  );
};

export default Page;
