'use client'

import { Container, Divider, Typography} from "@mui/material";
import { MyMovies } from "./card";
import { useContext } from "react";
import { MyContextMovies } from "@/context/getUserMovies";


export function Movies() {
    const { userMovies } = useContext(MyContextMovies)

    return (
        <Container maxWidth="md">
            <Typography variant="h6" component="h3" sx={{ margin: "0.5rem 0" }}>
                Meus filmes
            </Typography>
            <Divider />
            {userMovies.length === 0 && <Typography variant="h6" component="h3" color="gray" sx={{ margin: "1rem 0", display: "flex", justifyContent: "center" }}>NENHUM FILME ADICIONADO</Typography>}
            <MyMovies />
          
        </Container>
    )
}