'use client'
import { Avatar, Box, Tooltip } from "@mui/material";
import MovieFilterIcon from '@mui/icons-material/MovieFilter';
import { auth } from "@/firebase/auth/auth";
import LogoutIcon from '@mui/icons-material/Logout';
import { userTypeProps } from "@/@types/userType";


export function Header() {

    const currentUser: userTypeProps | null = auth.currentUser ? {
        displayName: auth.currentUser?.displayName,
        photoURL: auth.currentUser?.photoURL,
    } : null;


    return (
        <Box sx={{
            display: 'flex',
            justifyContent: 'space-around',
            alignItems: 'center',
            height: '4rem',
            padding: '0.5rem',
            backgroundColor: 'primary.main',
        }}>
            <MovieFilterIcon fontSize="large" sx={{
                fontSize: '3rem',
                color: '#D9D9D9'
            }} />
            <div>

                <Box sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem 2rem',
                    padding: '0.5rem',
                    borderRadius: '0.5rem',
                    backgroundColor: '#D9D9D0',
                }}>
                    <Tooltip title={String(currentUser?.displayName)}>
                        <Avatar alt={String(currentUser?.displayName)} src={String(currentUser?.photoURL)} />
                    </Tooltip>
                    <Tooltip title="Sair">
                        <LogoutIcon onClick={() => auth.signOut()} fontSize="large" sx={{
                            cursor: 'pointer',
                            color: 'primary.main'
                        }} />
                    </Tooltip>
                </Box>

            </div>
        </Box>
    )
}