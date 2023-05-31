
import { collection, doc, setDoc } from "firebase/firestore";
import firebase_app from "../config";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import { db } from "../db/firestore";


const provider = new GoogleAuthProvider();

provider.setCustomParameters({
    prompt: 'select_account'
})

export const auth = getAuth(firebase_app);



const addDataBaseUser = async (userAuth: any) => {
    const docRef = await setDoc(doc(db, "users", userAuth), {
        login: 'ok'
    }
    )}

export const login = async () => {


    return (
        await signInWithPopup(auth, provider)
            .then(() => {
                addDataBaseUser(auth.currentUser?.uid)
            }).catch((err) => console.log(err))
    )
}

