import { useRouter } from "next/navigation";
import { ReactNode, useEffect, useState } from "react";

import { APP_ROUTES } from "@/app/constants/app-routes";
import { auth } from "@/firebase/auth/auth";
import { onAuthStateChanged } from "firebase/auth";

type PrivateRouteProps = {
    children: ReactNode;
}

const PrivateRoute = ({ children }: PrivateRouteProps) => {
    const [isUserLogged, setIsUserLogged] = useState(false)

    const { push } = useRouter()

    const isUserConected = () => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                push(APP_ROUTES.private.home)
                setIsUserLogged(true)
            } else {
                push(APP_ROUTES.public.login)
                setIsUserLogged(false)
            }
        });
    }

    useEffect(() => {
        isUserConected()
    }, [])


    return (
        <>
            {!isUserLogged && null}
            {isUserLogged && children}
        </>
    );
};

export default PrivateRoute;