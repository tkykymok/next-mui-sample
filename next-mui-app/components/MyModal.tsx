'use client';

import { FC, ReactNode } from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button,
} from '@mui/material';
import MyButton from './MyButton';

interface MyModalProps {
  maxWidth?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | false;
  paperWidth?: string;
  paperHeight?: string;
  title?: string;
  children: ReactNode;
  open?: boolean;
  onOk: () => void;
  onClose: () => void;
}

const MyModal: FC<MyModalProps> = ({
  maxWidth = 'md',
  paperWidth = '',
  paperHeight = '',
  title = 'タイトル',
  children,
  open = false,
  onOk,
  onClose,
}) => {
  return (
    <Dialog
      maxWidth={maxWidth}
      open={open}
      onClose={onClose}
      PaperProps={{ className: `${paperWidth} ${paperHeight}` }}
    >
      <DialogTitle className="text-neutral-500">{title}</DialogTitle>
      <DialogContent>
        <DialogContentText className="text-neutral-800">
          {children}
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <MyButton
          variant="contained"
          label="OK"
          onClick={onOk}
          color="primary"
        />
        <MyButton
          variant="contained"
          label="OK"
          onClick={onOk}
          color="success"
        />
        <MyButton
          variant="contained"
          label="OK"
          onClick={onOk}
          color="warning"
        />
        <MyButton
          variant="contained"
          label="OK"
          onClick={onOk}
          color="inherit"
        />
        <MyButton variant="contained" label="OK" onClick={onOk} color="error" />
        <MyButton variant="contained" label="OK" onClick={onOk} color="info" />
        <MyButton
          variant="contained"
          label="OK"
          onClick={onOk}
          color="secondary"
        />
      </DialogActions>
    </Dialog>
  );
};

export default MyModal;
