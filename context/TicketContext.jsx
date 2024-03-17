/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from 'react';
import useWebSocket, { ReadyState } from 'react-use-websocket';

export const TicketContext = createContext([]);

export default function TicketContextProvider({ children }) {
  const [tickets, setTickets] = useState([]);
  const { lastJsonMessage, readyState } = useWebSocket(process.env.EXPO_PUBLIC_WS_URL, {
    share: true,
  });

  useEffect(() => {
    if (lastJsonMessage && readyState === ReadyState.OPEN) {
      setTickets(lastJsonMessage);
    }
  }, [lastJsonMessage]);

  return (
    <TicketContext.Provider value={tickets}>
      {children}
    </TicketContext.Provider>
  );
}
