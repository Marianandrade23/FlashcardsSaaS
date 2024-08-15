import React from 'react';
import { Container, Box, Typography } from '@mui/material';
import { SignUp } from '@clerk/nextjs';
import Footer from '../../footer/Footer';
import Navbar from '../../navbar/Navbar';

export default function SignUpPage() {
  return (
    <Container maxWidth="100vw">
      <Navbar />
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        marginTop="30px"
      >
        <Typography variant="h4" gutterBottom>
          Sign Up
        </Typography>
        <SignUp />
      </Box>
      <Footer />
    </Container>
  );
}
