'use client'

import { Container} from "@mui/material";
import MovieCard from "./card";

export function Movies() {

    return (
        <Container maxWidth="md">
            <MovieCard />  
          
        </Container>
    )
}