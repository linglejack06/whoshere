import axios from 'axios';

const BASE_URL = process.env.EXPO_PUBLIC_API_URL;
const addOrganization = async (name, passkey, token, handleError) => {
  const config = {
    Headers: { Authorization: `Bearer ${token}` },
  };
  try {
    const response = await axios.post(`${BASE_URL}/organizations`, { name, passkey }, config);
    return response.data;
  } catch (error) {
    return handleError(error.response.data.error);
  }
};

const addUserToOrganization = async (token, orgId, passkey, handleError) => {
  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };

  try {
    const response = await axios.post(`${BASE_URL}/organizations/${orgId}/users`, { passkey }, config);
    return response.data;
  } catch (error) {
    return handleError(error.response.data.error);
  }
};

export { addOrganization, addUserToOrganization };
