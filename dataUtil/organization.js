import {orgCollection} from "../firebaseConfig";
import { getDocs } from 'firebase/firestore';

export const getOrganizations = async () => {
    try {
        return await getDocs(orgCollection);
    } catch (e) {
        console.error("Error getting organizations: \n" + e);
    }
}
