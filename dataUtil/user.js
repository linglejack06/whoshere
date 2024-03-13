import axios from 'axios';

const BASE_URL = process.env.EXPO_PUBLIC_API_URL;

const addUser = async (fields, handleError) => {
  try {
    const response = await axios.post(`${BASE_URL}/users`, fields);
    if (response.status === 201) {
      return response.data;
    }
    return handleError(response.data.error);
  } catch (error) {
    return handleError(error.message);
  }
};

const loginUser = async (fields, handleError) => {
  try {
    const response = await axios.post(`${BASE_URL}/login`, fields);
    if (response.status === 200) {
      return response.data;
    }
    return handleError(response.data.error);
  } catch (error) {
    return handleError(error.message);
  }
};

const addOrganization = async (token, orgId, passkey, handleError) => {
  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };

  try {
    const response = await axios.post(`${BASE_URL}/organizations/${orgId}/users`, { passkey }, config);
    if (response.status === 200) {
      return response.data;
    }
    return handleError(response.data.error);
  } catch (error) {
    return handleError(error.message);
  }
};

export { addUser, loginUser, addOrganization };
