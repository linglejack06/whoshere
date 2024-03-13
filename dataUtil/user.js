import axios from 'axios';

const BASE_URL = process.env.EXPO_PUBLIC_API_URL;

const addUser = async (username, password, firstName, lastName, handleError) => {
  try {
    const response = await axios.post(`${BASE_URL}/users`, {
      username, password, firstName, lastName,
    });
    return response.data;
  } catch (error) {
    return handleError(error.response.data.error);
  }
};

const loginUser = async (username, password, handleError) => {
  try {
    const response = await axios.post(`${BASE_URL}/login`, { username, password });
    return response.data;
  } catch (error) {
    return handleError(error.response.data.error);
  }
};

export { addUser, loginUser };
