import { createContext, useEffect, useState } from 'react';

export const ErrorContext = createContext({});

export default function ErrorContextProvider({ children }) {
  const [error, setError] = useState('');

  useEffect(() => {
    if (error) {
      console.error(error);
    }
  }, [error]);

  return (
    <ErrorContext.Provider value={[error, setError]}>
      {children}
    </ErrorContext.Provider>
  );
}
