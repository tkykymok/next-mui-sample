import { FC, ReactNode } from 'react';
import { Box } from '@mui/material';

interface MyFooterProps {
  children: ReactNode;
}

export const MyFooter: FC<MyFooterProps> = ({ children }) => {
  return (
    <Box p={3} className="bg-gray-400 w-full fixed bottom-0">
      {children}
    </Box>
  );
};
