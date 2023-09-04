'use client';

import { Button } from '@mui/material';
import { FC } from 'react';

interface MyButtonProps {
  label: string;
  variant?: 'text' | 'contained' | 'outlined';
  color:
    | 'secondary'
    | 'success'
    | 'warning'
    | 'inherit'
    | 'error'
    | 'info'
    | 'primary';
  onClick: () => void;
}

const MyButton: FC<MyButtonProps> = ({
  label,
  variant = 'text',
  color,
  onClick,
}) => {
  return (
    <Button variant={variant} onClick={onClick} color={color}>
      {label}
    </Button>
  );
};

export default MyButton;
