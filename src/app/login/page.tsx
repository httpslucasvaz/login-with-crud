'use client';

import { Box, Button, Container, CssBaseline, Divider, Typography } from "@mui/material";
import GoogleIcon from '@mui/icons-material/Google';
import { login } from "@/firebase/auth/auth";


export default function Login() {

    return (
        <Box sx={{
            bgcolor: '#D9D9D9'
        }}>
            <CssBaseline />

            <Container sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100vh',
            }}>
                <Box sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    padding: '3rem',
                    border: '1px solid #D1D1D1',
                    borderRadius: '1rem',
                    height: '50vh',
                }}>
                    <div>
                        <Typography variant="h4">login</Typography>
                        <Divider />
                    </div>
                    <p>Anote todos os filmes que já assistiu!</p>
                    <Button variant="contained" startIcon={<GoogleIcon />} size="large" onClick={login}>
                        Login com Google
                    </Button>
                </Box>
            </Container>
        </Box>
    )
}