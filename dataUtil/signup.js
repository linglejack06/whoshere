import axios from "axios";

const BASE_URL = `${process.env.EXPO_PUBLIC_API_URL}/users`;

const addUser = async (fields) => {
    try {
        const response = await axios.post(BASE_URL, fields);
        if(response.status === 201) {
            return response.data;
        } else {
            // return create error;
        }
    } catch (error) {
        // return create error;
    }
}
