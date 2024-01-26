import { addDoc } from 'firebase/firestore';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import {auth, userCollection} from "../firebaseConfig";
import {getOrganizations} from "./organization";

export const adduser = async (email, pw, organizationId) => {
    try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, pw);
        const userId = userCredential.user.uid;
        const organizations = await getOrganizations();

        // add organization if present, else no organizations (user cannot access anything)
        if(organizations.docs.find((org) => org.id === organizationId)) {
            await addDoc(userCollection, {
                userId,
                verifiedOrganizations: [organizationId]
            })
        } else {
            await addDoc(userCollection, {
                userId,
                verifiedOrganizations: []
            })
        }
    } catch(e) {
        console.error("Error adding user: \n", e);
    }
}
