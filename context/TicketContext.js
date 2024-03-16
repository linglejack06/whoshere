/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from 'react';
import useWebSocket from 'react-use-websocket';

export const TicketContext = createContext([]);

export default function TicketContextProvider({ children }) {
  const [tickets, setTickets] = useState([]);
  const { lastJsonMessage } = useWebSocket(process.env.EXPO_PUBLIC_WS_URL, { share: true });
  useEffect(() => {
    if (lastJsonMessage) {
      setTickets(lastJsonMessage);
    }
  }, [lastJsonMessage]);
  return (
    <TicketContext.Provider value={tickets}>
      {children}
    </TicketContext.Provider>
  );
}
