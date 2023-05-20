'use client'

import * as React from 'react';

import { Box } from '@mui/material';
import { useEffect, useState } from 'react';
import { DocumentData, QuerySnapshot, getDocs } from 'firebase/firestore';
import { userCollection } from '@/firebase/db/firestore';
import Image from 'next/image';

type UserMovieProps = {
    title: string | null;
    poster_path: any;
    id: string;
    movieID: number;
    rating: number;
}


export function MyMovies() {
    const [userMovies, setUserMovies] = useState<UserMovieProps[]>([])

    useEffect(() => {
        const getUsers = async () => {
            const data: QuerySnapshot<DocumentData> = await getDocs(userCollection)
            setUserMovies(data.docs.map((doc) => ({ ...doc.data(), id: doc.id } as UserMovieProps)));
        }
        getUsers()
    }, [])


    return (
        <Box sx={{ width: '100%', display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
            {userMovies.map((movie) => {
                return (
                    <>
                        {movie.poster_path && <Image src={`${process.env.NEXT_PUBLIC_BASEURL_IMG}${movie.poster_path}`} alt={movie.title} width={77} height={120} />}
                        
                    </>
                );
            } )}
        </Box>
    )
}




{/* <Box sx={{ width: '100%', display: "flex", flexWrap: "wrap", justifyContent: "center"}}>
            <Card>

                {userMovies.map((movie) =>

                    <>
                        <CardMedia
                            sx={{ height: 140, padding: "0.5rem" }}
                            image={`${process.env.NEXT_PUBLIC_BASEURL_IMG}${movie.poster_path}`}
                            title={movie.title}
                        />
                        <CardContent sx={{ backgroundColor: "#D9D9D9" }}>
                            <Typography gutterBottom component="p">
                                {movie.title}
                            </Typography>
                            <Typography variant="body2" color="text.secondary" sx={{ display: "flex", alignItems: "center", marginTop: "-0.8rem", fontStyle: "italic" }}>
                                <AccessTimeOutlinedIcon fontSize='small' /> 180 minutos
                            </Typography>
                            <Box sx={{ display: "flex", alignItems: "center" }}>
                                Nota: <Rating name="half-rating" defaultValue={movie.rating} precision={0.5} sx={{ padding: "0.5rem 0" }} />
                            </Box>
                        </CardContent>
                        <CardActions>
                            <Button size="small" color="error" startIcon={<DeleteOutlineOutlinedIcon />}> excluir </Button>

                        </CardActions>
                    </>
                )}
            </Card>
        </Box> */}