import { Box, Button, Container, Grid, IconButton, InputAdornment, Link, OutlinedInput, TextField, Typography } from '@mui/material'
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import VisibilityIcon from '@mui/icons-material/Visibility';
import React, { useState } from 'react';

export default function LoginPage() {
  interface LoginData{
    username: string,
    password: string
  }
  const [loginData, setLoginData] = useState<LoginData>({
    username: '',
    password: ''
  });
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = event.target;
    setLoginData({ ...loginData, [id]: value });
    // console.log(loginData);
  }
  return (
    <Container maxWidth="sm">
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Typography variant="h4" component="h1" gutterBottom>
          Login
        </Typography>
        <Typography variant='caption' display={'block'} gutterBottom>
          Please enter your username and password
        </Typography>
        <Box sx={{ width: '100%', mt: 1 }}>
          <Grid container spacing={1}>
            <Grid item xs={12}>
              <span>Username</span>
              <OutlinedInput
                required
                fullWidth
                id="username"
                placeholder="Username"
                onChange={handleInputChange}
              />
            </Grid>
            <Grid item xs={12}>
              <span>Password</span>
              <TextField
                required
                fullWidth
                id="password"
                type={showPassword ? 'text' : 'password'}
                placeholder="Password"
                onChange={handleInputChange}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        onClick={() => setShowPassword(!showPassword)}
                        edge="end"
                      >
                        {showPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
                      </IconButton>
                    </InputAdornment>
                  )
                }}
              />
            </Grid>
            <Grid item xs={6}>
              <Link href="/register" variant="body2">
                Signup
              </Link>
            </Grid>
            <Grid item xs={6}>
              <Link href="/forgot-password" variant="body2">
                Forgot Password?
              </Link>
            </Grid>
            <Grid item xs={12}>
              <Button fullWidth variant="contained" color="primary"
                sx={{borderRadius: '20px'}}
              >
                Login
              </Button>
            </Grid>
          </Grid>
          </Box>
      </Box>   
    </Container> 
  )
}
