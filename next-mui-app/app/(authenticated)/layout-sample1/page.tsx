'use client';

import { Box, Grid } from '@mui/material';
import { MyFooter } from '@/components/MyFooter';
import React from 'react';

const Page = () => {
  return (
    <>
      <Grid container direction="column">
        <Grid item xs={2} className="bg-gray-100">
          <Grid container padding={3} className="bg-blue-100">
            <Grid item xs={12} height={100} className="bg-blue-200">
              検索条件エリア
            </Grid>
          </Grid>
        </Grid>

        <Grid item xs={10} className="bg-gray-100">
          <Grid container padding={3} className="bg-orange-100">
            <Grid item xs={12} height={600} className="bg-orange-200">
              一覧エリア
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <MyFooter>
        <Box component="span">フッター</Box>
      </MyFooter>
    </>
  );
};

export default Page;
