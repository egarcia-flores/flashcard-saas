import React from 'react'
import { Container, Box, Typography, AppBar, Toolbar, Button } from '@mui/material'
import { SignIn } from '@clerk/nextjs'
import Link from 'next/link'

export default function SignUpPage() {
  <AppBar position="static" sx={{backgroundColor: '#3f51b5'}}>
    <Toolbar>
      <Typography variant="h6" sx={{flexGrow: 1}}>
        Flashcard SaaS
      </Typography>
      <Button color="inherit">
        <Link href="/login" passHref>
          Login
        </Link>
      </Button>
    </Toolbar>
  </AppBar>
}