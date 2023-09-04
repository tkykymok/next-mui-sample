'use client';

import {
  Box,
  Container,
  Grid,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material';
import { MyFooter } from '@/components/MyFooter';
import React from 'react';
import { padding } from '@mui/system';

const Page = () => {
  // サンプルデータ
  const rows = [
    { id: 1, name: 'John', age: 25, position: 'Developer' },
    { id: 2, name: 'Jane', age: 28, position: 'Designer' },
    { id: 3, name: 'Doe', age: 22, position: 'Intern' },
    { id: 4, name: 'Doe', age: 22, position: 'Intern' },
    { id: 5, name: 'Doe', age: 22, position: 'Intern' },
    { id: 6, name: 'Doe', age: 22, position: 'Intern' },
    { id: 7, name: 'Doe', age: 22, position: 'Intern' },
    { id: 8, name: 'Doe', age: 22, position: 'Intern' },
    { id: 9, name: 'Doe', age: 22, position: 'Intern' },
    { id: 10, name: 'Doe', age: 22, position: 'Intern' },
    { id: 11, name: 'Doe', age: 22, position: 'Intern' },
    { id: 12, name: 'Doe', age: 22, position: 'Intern' },
    { id: 13, name: 'Doe', age: 22, position: 'Intern' },
    { id: 14, name: 'Doe', age: 22, position: 'Intern' },
    { id: 15, name: 'Doe', age: 22, position: 'Intern' },
  ];

  return (
    <>
      <Container sx={{ padding: 3 }}>
        <TableContainer
          component={Paper}
          sx={{ maxHeight: 700, overflowY: 'auto' }}
        >
          <Table stickyHeader size="medium">
            <TableHead>
              <TableRow>
                <TableCell className="bg-blue-500 text-white font-bold border border-solid border-neutral-300">
                  ID
                </TableCell>
                <TableCell className="bg-blue-500 text-white font-bold border border-solid border-neutral-300">
                  Name
                </TableCell>
                <TableCell className="bg-blue-500 text-white font-bold border border-solid border-neutral-300">
                  Age
                </TableCell>
                <TableCell className="bg-blue-500 text-white font-bold border border-solid border-neutral-300">
                  Position
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow key={row.id}>
                  <TableCell className="border border-solid border-neutral-300">
                    {row.id}
                  </TableCell>
                  <TableCell className="border border-solid border-neutral-300">
                    {row.name}
                  </TableCell>
                  <TableCell className="border border-solid border-neutral-300">
                    {row.age}
                  </TableCell>
                  <TableCell className="border border-solid border-neutral-300">
                    {row.position}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Container>
    </>
  );
};

export default Page;
