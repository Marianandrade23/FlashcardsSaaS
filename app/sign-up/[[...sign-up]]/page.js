import React from 'react';
import {
  Container,
  Box,
  Typography,
  AppBar,
  Toolbar,
  Button,
} from '@mui/material';
import { SignUp } from '@clerk/nextjs';
import Link from 'next/link';

export default function SignUpPage() {
  return (
    <Container maxWidth="100vw">
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Flashcard Saas
          </Typography>
          <Button color="inherit">
            <Link href="/sign-in" passHref>
              Login
            </Link>
          </Button>
          <Button color="inherit">
            <Link href="/sign-up" passHref>
              Sign Up
            </Link>
          </Button>
        </Toolbar>
      </AppBar>
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
    </Container>
  );
}
