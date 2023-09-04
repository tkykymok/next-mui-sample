'use client';

import { useState } from 'react';
import { Box, Button, Container, Grid, Paper } from '@mui/material';
import MyModal from '@/components/MyModal';
import MyButton from '@/components/MyButton';

const Page = () => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Container className="flex justify-between items-center h-full">
      <MyButton
        variant="outlined"
        label="Open Dialog"
        onClick={handleClickOpen}
        color="primary"
      />
      <MyButton
        variant="contained"
        label="OK"
        onClick={() => {}}
        color="primary"
      />
      <MyButton
        variant="contained"
        label="OK"
        onClick={() => {}}
        color="success"
      />
      <MyButton
        variant="contained"
        label="OK"
        onClick={() => {}}
        color="warning"
      />
      <MyButton
        variant="contained"
        label="OK"
        onClick={() => {}}
        color="inherit"
      />
      <MyButton
        variant="contained"
        label="OK"
        onClick={() => {}}
        color="error"
      />
      <MyButton
        variant="contained"
        label="OK"
        onClick={() => {}}
        color="info"
      />
      <MyButton
        variant="contained"
        label="OK"
        onClick={() => {}}
        color="secondary"
      />
      <MyButton
        variant="contained"
        label="OK"
        onClick={() => {}}
        color="secondary"
      />

      <MyModal
        open={open}
        onOk={handleClose}
        onClose={handleClose}
        paperWidth="w-full"
        paperHeight="h-4/5"
      >
        aaa bbb
      </MyModal>
    </Container>
  );
};

export default Page;
