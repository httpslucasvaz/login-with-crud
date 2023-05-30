
import firebase_app from "../config";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";


const provider = new GoogleAuthProvider();

provider.setCustomParameters({
    prompt: 'select_account'
})


export const auth = getAuth(firebase_app);

export const login = async () => {


    return (
        await signInWithPopup(auth, provider)
            .then(() => {

            }).catch((err) => console.log(err))
    )
}

