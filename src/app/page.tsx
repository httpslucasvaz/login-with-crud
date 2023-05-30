'use client'

import { CssBaseline } from "@mui/material"
import { Hero } from "./components/hero"
import { IsSearchTrue } from "@/context/isSearchOn"
import { GetUserMoviesProvider } from "@/context/getUserMovies"



export default function Home() {
    return (
        <main>
            <CssBaseline />
            <GetUserMoviesProvider>
                <IsSearchTrue>
                    <Hero />
                </IsSearchTrue>
            </GetUserMoviesProvider>
        </main>

    )
}
