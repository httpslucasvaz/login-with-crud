'use client';

import { Box, Button, Container, CssBaseline, Divider } from "@mui/material";
import GoogleIcon from '@mui/icons-material/Google';
import MovieFilterIcon from '@mui/icons-material/MovieFilter';
import { login } from "@/firebase/auth/auth";


export default function Login() {

    return (
        <Box sx={{
            bgcolor: '#1976D2'
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
                    bgcolor: '#e9e9e9',
                    borderRadius: '1rem',
                }}>
                    <Box sx={{
                        display: 'flex',
                        justifyContent: 'center',
                    }}>
                        
                        <MovieFilterIcon fontSize="large" sx={{
                fontSize: '3rem',
                color: '#1976D2'
            }} />
                        
                    </Box>
                    <Divider />
                    <p>Anote todos os filmes que já assistiu!</p>
                    <Button variant="contained" startIcon={<GoogleIcon />} size="large" onClick={login}>
                        Login com Google
                    </Button>
                </Box>
            </Container>
        </Box>
    )
}