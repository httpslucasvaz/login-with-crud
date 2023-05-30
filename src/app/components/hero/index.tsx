'use client'
import { Header } from "./header";
import { Movies } from "./movies";
import { Summary } from "./summary";
import { InputSearch } from "./inputSearch";
import { useContext } from "react";
import { MyContext } from "@/context/isSearchOn";


export function Hero() {
    const { isSearchOn } = useContext(MyContext)
    return (
        <>
            <Header />
            <Summary />
            <InputSearch />
            {!isSearchOn && <Movies /> }
        </>
    )
}