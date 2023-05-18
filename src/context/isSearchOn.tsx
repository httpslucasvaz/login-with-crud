
import { ReactNode, createContext, useState } from "react";

interface SearchProps {
    isSearchOn: boolean;
    setIsSearchOn: (value: boolean) => void;
}

interface MyContextProps {
    children: ReactNode;
}

export const MyContext = createContext<SearchProps>({} as SearchProps);

export function IsSearchTrue({ children }: MyContextProps) {
    const [isSearchOn, setIsSearchOn] = useState<boolean>(false);

    return (
        <MyContext.Provider value={{ isSearchOn, setIsSearchOn }}>
            {children}
        </MyContext.Provider>
    )
}   