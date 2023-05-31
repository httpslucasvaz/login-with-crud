'use client'
import { UserMovieProps } from "@/@types/userMovieTypes";
import { auth } from "@/firebase/auth/auth";
import { db, userCollection } from "@/firebase/db/firestore";
import { collection, onSnapshot } from "firebase/firestore";
import { ReactNode, createContext, useEffect, useState } from "react";

interface MovieProps {
    userMovies: UserMovieProps[];
    setUserMovies: (value: UserMovieProps[]) => void;
}

interface MyContextMovieProps {
    children: ReactNode;
}

export const MyContextMovies = createContext<MovieProps>({} as MovieProps);

export function GetUserMoviesProvider({ children }: MyContextMovieProps) {
    const [userMovies, setUserMovies] = useState<UserMovieProps[]>([])

    const getUserMoviesOnSnapshot = () => {
        const userAuth = auth.currentUser?.uid as string
        const userDoc = collection(db, "users", userAuth, "moviesDB")


        onSnapshot(userDoc, (snapshot) => {
            let data = snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id } as UserMovieProps))
            setUserMovies(data)
        })
    }

    useEffect(() => {
        getUserMoviesOnSnapshot()
    }, [])


    return (
        <MyContextMovies.Provider value={{ userMovies, setUserMovies }}>
            {children}
        </MyContextMovies.Provider>
    )
}   
