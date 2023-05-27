'use client'
import { UserMovieProps } from "@/@types/userMovieTypes";
import { userCollection } from "@/firebase/db/firestore";
import { onSnapshot } from "firebase/firestore";
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

    const getUserMoviesOnSnapshot =  () => {
        onSnapshot(userCollection, (snapshot) => {
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


 // async function getUsers() {
    //     const data: QuerySnapshot<DocumentData> = await getDocs(userCollection);
    //     setUserMovies(data.docs.map((doc) => ({ ...doc.data(), id: doc.id } as UserMovieProps)));
    // }

    // useEffect(() => {
    //     getUsers()
    // }, [])