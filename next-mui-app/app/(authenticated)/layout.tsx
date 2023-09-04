import React, { FC, ReactNode } from 'react';
import '../globals.css';
import Sidebar from '@/components/MySidebar';
import { Box } from '@mui/material';
import { MyHeader } from '@/components/MyHeader';

interface RootLayoutProps {
  children: ReactNode;
}

const AuthenticatedLayout: FC<RootLayoutProps> = ({ children }) => {
  return (
    <Box display="flex">
      <Sidebar />

      <Box display="flex" flexDirection="column" className="w-full">

        <MyHeader title="ヘッダー"/>

        <Box className="h-full">
          {children}
        </Box>

      </Box>

    </Box>
  );
};

export default AuthenticatedLayout;
