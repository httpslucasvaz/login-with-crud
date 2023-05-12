'use client'

import { Button, Container, TextField } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import { useState } from "react";
import api from "@/service/api";



export function InputSearch() {

    const [search, setSearch] = useState<string>('')
    const [movieResults, setMovieResults] = useState([])

    const handleButtonClick = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setSearch((event.target as HTMLInputElement).value)
    };

    const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
            event.preventDefault();
            fetchMovieSearch()
        }
    };

    async function fetchMovieSearch() {
        try {
            const response = await api
                .get(`/search/movie?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=pt-BR&page=1&include_adult=false&query=${search}}`)
                setMovieResults(response.data)
        } catch (error) {
            console.log(error)
        }
    }

    console.log(movieResults)


    return (
        <Container maxWidth="md">
            <TextField
                id='movie-search'
                label="pesquisar"
                variant="outlined"
                fullWidth
                color="success"
                onKeyPress={handleKeyPress}
                onChange={handleButtonClick}
                sx={{
                    margin: '1rem 0'
                }} />
            <Button
                onClick={fetchMovieSearch}
                variant="contained"
                color="success"
                size="large" sx={{
                    width: "100%",
                    fontWeight: "bold",
                }}>
                <SearchIcon sx={{
                    marginRight: "0.5rem",
                }} />      PESQUISAR FILME
            </Button>

                {Array.isArray(movieResults) && movieResults.map((movie: any) => {
                    return (
                        <p> {movie.results.original_title} </p>
                    )
                } )}

        </Container>
    )
}