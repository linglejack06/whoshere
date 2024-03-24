import { createContext, useEffect, useReducer } from 'react';
import { AsyncStorage } from 'react-native';
import tokenReducer from '../utils/tokenReducer';

export const TokenContext = createContext('');

export default function TokenContextProvider({ children }) {
  const [token, tokenDispatch] = useReducer(tokenReducer, '');

  // check for previously set token
  useEffect(() => {
    const getToken = async () => {
      try {
        const value = await AsyncStorage.getItem('USER_TOKEN');
        if (value) {
          tokenDispatch({ type: 'set', contents: value });
        }
      } catch (error) {
        console.error(error);
      }
    };

    getToken();
  }, []);

  return (
    <TokenContext.Provider value={[token, tokenDispatch]}>
      {children}
    </TokenContext.Provider>
  );
}
