import { useRouter } from "next/navigation";
import firebase_app from "../config";
import { GoogleAuthProvider, getAuth, signInWithPopup, signOut } from "firebase/auth";
import { APP_ROUTES } from "@/app/constants/app-routes";


const provider = new GoogleAuthProvider();

provider.setCustomParameters({
    prompt: 'select_account'
})


export const auth = getAuth(firebase_app);

export const login = async () => {
    const route = useRouter()

    return (
    await signInWithPopup(auth, provider)
        .then(() => {
            route.push(APP_ROUTES.private.home)
        }).catch((err) => console.log(err))
        )
}

export const logout = () => {
    signOut(auth).then(() => {
        console.log('deslogado')
    }).catch((err) => console.log(err))
};
