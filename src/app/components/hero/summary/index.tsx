import { Box, Container, Typography } from "@mui/material";

export function Summary() {

    return (
        <Container maxWidth="md" sx={{
            display: "flex",
            justifyContent: "space-around",
            padding: "0.5rem",
        }}>
            <Box sx={{
                display: "flex",
                alignItems: "center",
            }}>
                <strong>Filmes:</strong> <Typography sx={{
                    marginLeft: "0.5rem",
                }}>16</Typography>
            </Box>
            <Box sx={{
                display: "flex",
                alignItems: "center",
                '&:first-child': {
                    marginRight: "0.5rem",
                }
            }}>
                <strong>Horas: </strong>
                <Typography sx={{
                    marginLeft: "0.5rem",
                }}>16</Typography>
            </Box>
        </Container>
    )
}