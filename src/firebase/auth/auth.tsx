import firebase_app from "../config";
import { GoogleAuthProvider, getAuth, signInWithPopup, signOut } from "firebase/auth";


const provider = new GoogleAuthProvider();

provider.setCustomParameters({
    prompt: 'select_account'
})

export const auth = getAuth(firebase_app);

export const login = async () => {

    await signInWithPopup(auth, provider)
        .then((result) => {
            console.log(result)
        }).catch((err) => console.log(err))
}

export const logout = () => {
    signOut(auth).then(() => {
        console.log('deslogado')
    }).catch((err) => console.log(err))
};
