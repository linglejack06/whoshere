/* eslint-disable react/prop-types */
import {
  createContext, useEffect, useReducer, useState,
} from 'react';
import useWebSocket, { ReadyState } from 'react-use-websocket';
import ticketReducer from '../utils/ticketReducer';

export const TicketContext = createContext([]);

export default function TicketContextProvider({ children }) {
  const [tickets, ticketDispatch] = useReducer(ticketReducer, []);
  const { lastJsonMessage, readyState } = useWebSocket(process.env.EXPO_PUBLIC_WS_URL, {
    share: true,
  });

  useEffect(() => {
    if (lastJsonMessage && readyState === ReadyState.OPEN) {
      ticketDispatch({
        type: 'all',
        contents: lastJsonMessage,
      });
    }
  }, [lastJsonMessage]);

  return (
    <TicketContext.Provider value={[tickets, ticketDispatch]}>
      {children}
    </TicketContext.Provider>
  );
}
