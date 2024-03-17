import { createContext, useState } from 'react';

export const ErrorContext = createContext({});

export default function ErrorContextProvider({ children }) {
  const [error, setError] = useState('');

  return (
    <ErrorContext.Provider value={[error, setError]}>
      {children}
    </ErrorContext.Provider>
  );
}
