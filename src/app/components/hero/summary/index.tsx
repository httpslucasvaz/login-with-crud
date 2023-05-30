import { MyContextMovies } from "@/context/getUserMovies";
import { Box, Container, Typography } from "@mui/material";
import { useContext } from "react";

export function Summary() {
    const { userMovies } = useContext(MyContextMovies)


    return (
        <Container maxWidth="md" sx={{
            display: "flex",
            justifyContent: "center",
            padding: "0.5rem",
        }}>
            <Box sx={{
                display: "flex",
                alignItems: "center",
            }}>
                <strong>Filmes:</strong> <Typography sx={{
                    marginLeft: "0.5rem",
                }}> {userMovies.length} </Typography>
            </Box>
            <Box sx={{
                display: "flex",
                alignItems: "center",
                '&:first-of-type': {
                    marginRight: "0.5rem",
                }
            }}>
            
            </Box>
        </Container>
    )
}