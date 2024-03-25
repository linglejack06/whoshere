import { createContext, useEffect, useReducer } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import tokenReducer from '../utils/tokenReducer';

export const TokenContext = createContext('');

export default function TokenContextProvider({ children }) {
  const [token, tokenDispatch] = useReducer(tokenReducer, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImxpbmdsZWphY2siLCJpZCI6IjY1YmFlYTZlZmU4NzdjM2FmNzBjN2FkYyIsImlhdCI6MTcwNzA3MTU4NH0.coLf2FvRuORUR8mL06BrQivfQj3c1YZpEOXdjR7w1M8');

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
