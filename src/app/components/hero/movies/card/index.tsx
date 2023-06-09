'use client'

import * as React from 'react';

import { Box, Button, Rating, Typography } from '@mui/material';
import { useContext, useState } from 'react';
import { deleteDoc, doc, updateDoc } from 'firebase/firestore';
import { db } from '@/firebase/db/firestore';
import Image from 'next/image';
import { MyContextMovies } from '@/context/getUserMovies';
import { MoviesPagination } from '../pagination';
import { auth } from '@/firebase/auth/auth';


export function MyMovies() {
    const { userMovies } = useContext(MyContextMovies)

    const [currentPage, setCurrentPage] = useState(1);
    const ITEMS_PER_PAGE = 10;

    const handlePageChange = (page: number) => {
        setCurrentPage(page);
    };

    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const endIndex = startIndex + ITEMS_PER_PAGE;
    const currentItems = userMovies.slice(startIndex, endIndex);


    const handleDeleteMovie = async (id: string) => {
        const userAuth = auth.currentUser?.uid as string
        const userDoc = doc(db, "users", userAuth, "moviesDB", id)
        await deleteDoc(userDoc)
    }

    const handleAddRating = async (id: string, rating: number) => {
        const userAuth = auth.currentUser?.uid as string
        const userDoc = doc(db, "users", userAuth, "moviesDB", id)

        await updateDoc(userDoc, {
            rating: rating
        })
    }

    return (
        <>
            <Box 
            sx={{ 
                width: '100%', 
                display: "flex",
                flexWrap: "wrap", 
                justifyContent: "center", 
                gap: '0.5rem', 
                marginTop: '0.5rem' 
                }}>
                {currentItems.map((movie) => {


                    return (
                        <Box sx={{
                            maxWidth: 200,
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center", 
                            borderBottomLeftRadius: '0.5rem',
                            borderBottomRightRadius: '0.5rem',
                            border: '1px solid #ccc',
                        }}
                            key={movie.id}>
                            {movie.poster_path && <Image src={`${process.env.NEXT_PUBLIC_BASEURL_IMG}${movie.poster_path}`} alt={movie.title} width={200} height={300} />}
                            <Box
                                sx={{
                                    display: "flex",
                                    flexDirection: "column",
                                    alignItems: "center",
                                    justifyContent: "space-between",
                                    width: '100%',
                                    minHeight: 130,
                                }}>
                                <Typography variant='body1' sx={{ textAlign: 'center' }}> {movie.title} </Typography>
                                <Box
                                    sx={{
                                        display: "flex",
                                        flexDirection: "column",
                                        alignItems: "center"
                                    }}>
                                    <Rating
                                        name="half-rating"
                                        value={movie.rating}
                                        defaultValue={movie.rating}
                                        precision={0.5}
                                        onChange={(event, newValue) => {
                                            event.preventDefault()
                                            handleAddRating(movie.id, newValue as number)
                                        }}
                                        sx={{ padding: "0.5rem 0" }}
                                    />
                                    <Button 
                                    variant='text' 
                                    color='error' 
                                    size="small" 
                                    fullWidth 
                                    onClick={() => handleDeleteMovie(movie.id)}> Excluir </Button>
                                </Box>
                            </Box>
                        </Box>
                    );

                })}
            </Box>
            <Box sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                padding: "1rem"
            }}>
                {userMovies.length > 9 && <MoviesPagination
                    totalPages={Math.ceil(userMovies.length / ITEMS_PER_PAGE)}
                    currentPage={currentPage}
                    onPageChange={handlePageChange}
                    color='primary'
                />}
            </Box>

        </>
    )
}