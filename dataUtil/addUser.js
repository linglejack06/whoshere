import { collection, addDoc } from 'firebase/firestore';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import {auth, db} from "../firebaseConfig";

const adduser = async (email, pw) => {
    const userCredential = await createUserWithEmailAndPassword(auth, email, pw);
    const userId = userCredential.user.uid;
}
