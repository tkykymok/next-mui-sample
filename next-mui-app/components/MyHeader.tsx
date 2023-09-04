import React, { FC } from 'react';
import { Box } from '@mui/material';

interface MyHeaderProps {
  title: string;
}

export const MyHeader: FC<MyHeaderProps> = ({ title }) => {
  return (
    <Box p={2} className="bg-gray-400">
      <Box component="span">{title}</Box>
    </Box>
  );
};
