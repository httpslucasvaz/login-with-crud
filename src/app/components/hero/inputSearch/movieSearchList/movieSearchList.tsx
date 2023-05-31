'use client'


import { Box, Button, Typography } from "@mui/material";
import Image from "next/image";
import BrokenImageIcon from '@mui/icons-material/BrokenImage';
import { MovieSearchProps } from "@/@types/movieTypes";
import { addDoc, collection } from "firebase/firestore";
import { db } from "@/firebase/db/firestore";
import { useContext } from "react";
import { MyContextMovies } from "@/context/getUserMovies";
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import { auth } from "@/firebase/auth/auth";

export function MovieSearchList({ movieResults }: MovieSearchProps) {

    const { userMovies } = useContext(MyContextMovies)

    const DateFormat = (releaseDate: string) => {
        const date = new Date(releaseDate)
        const options = { year: 'numeric', month: 'long', day: 'numeric' } as const;

        return date.toLocaleDateString('pt-BR', options);
    }

    const handleAddMovie = async (movieID: number, title: string, poster_path: string | null, original_title: string) => {
        const userAuth = auth.currentUser?.uid as string
        const collectionRef = collection(db, 'users', userAuth, "moviesDB")

        const addMovie = await addDoc(collectionRef, {
            movieID: movieID,
            title: title,
            poster_path: poster_path,
            original_title: original_title,
            rating: 0
        })
    }


    return (
        <>
            {movieResults.map((movie) => {
                const verify = userMovies.map((userMovie) => userMovie.movieID).includes(movie.id)
                return (
                    <Box sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        width: '100%',
                        borderRadius: '0.5rem',
                        overflow: 'hidden',
                        margin: '1rem 0',
                        border: '1px solid #e8e7e7',
                    }}
                        key={movie.id}
                    >

                        {movie.poster_path && <Image src={`${process.env.NEXT_PUBLIC_BASEURL_IMG}${movie.poster_path}`} alt={movie.title} width={77} height={120} />}
                        {movie.poster_path == null && <BrokenImageIcon sx={{ width: 77, height: 120, color: "#D9D9D9" }} />}
                        <Box sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            width: '100%',
                            alignItems: 'flex-start',
                            padding: '0.5rem',

                        }}>
                            <strong> {movie.title} </strong>
                            <Typography color="grey" variant="subtitle2"> {DateFormat(movie.release_date)}  </Typography>
                            <Typography sx={{
                                display: "-webkit-box",
                                WebkitLineClamp: "2",
                                WebkitBoxOrient: "vertical",
                                overflow: "hidden",
                                padding: "0.2rem",

                            }}> {movie.overview ? movie.overview : <p>sem descrição.</p>} </Typography>
                        </Box>

                        {!verify && <Button variant="contained" onClick={() => handleAddMovie(movie.id, movie.title, movie.poster_path, movie.original_title)}>
                            <AddIcon />
                        </Button>}

                        {verify &&
                            <Button variant="text">
                                <DeleteIcon color="error" />
                            </Button>}
                    </Box>
                )
            })}
        </>
    )
}