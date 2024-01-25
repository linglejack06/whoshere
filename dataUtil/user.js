import { collection, addDoc } from 'firebase/firestore';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import {auth, db} from "../firebaseConfig";

const adduser = async (email, pw, organizationId) => {
    try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, pw);
        const userId = userCredential.user.uid;
        await addDoc(collection(db, "users"), {
            userId,
            verifiedOrganizations: [organizationId]
        })
    } catch(e) {
        console.error("Error adding user: \n", e);
    }
}
