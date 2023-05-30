'use client'

import { Button, Container, TextField } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import { useContext, useState } from "react";
import api from "@/service/api";
import { MovieSearchListProps } from "@/@types/movieTypes";
import { MovieSearchList } from "./movieSearchList/movieSearchList";
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import { MyContext } from "@/context/isSearchOn";



export function InputSearch() {

    const [search, setSearch] = useState<string>('')
    const [movieResults, setMovieResults] = useState<MovieSearchListProps[]>([])
    const [noResults, setNoResults] = useState<boolean>(false)

    const { isSearchOn, setIsSearchOn } = useContext(MyContext)

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
            setMovieResults(response.data.results)
            setIsSearchOn(true)
        } catch (error) {
            console.log(error)
        } finally {
            if (movieResults.length === 0) [
                setNoResults(true)
            ]
        }
    }

    const handleBackButton = () => {
        setMovieResults([])
        setIsSearchOn(false)
        setNoResults(false)
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
                minRows={3}
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

            {isSearchOn && <Button
                variant="outlined"
                size="small"
                fullWidth
                startIcon={<ArrowBackIosNewIcon />}
                color="secondary"
                sx={{
                    margin: '1rem 0'
                }}
                onClick={handleBackButton}
            >VOLTAR
            </Button>}

            <MovieSearchList movieResults={movieResults} />
            {noResults && <p>Nenhum resultado encontrado.</p>}
        </Container>
    )
}