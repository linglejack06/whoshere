/* eslint-disable react/prop-types */
import {
  createContext, useEffect, useReducer, useState,
} from 'react';
import useWebSocket, { ReadyState } from 'react-use-websocket';
import ticketReducer from '../utils/ticketReducer';
import useSocket from '../utils/useSocket';

export const TicketContext = createContext([]);

export default function TicketContextProvider({ children }) {
  const [tickets, ticketDispatch] = useReducer(ticketReducer, []);
  const { lastJsonMessage, readyState } = useSocket();

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
