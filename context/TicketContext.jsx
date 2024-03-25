/* eslint-disable react/prop-types */
import {
  createContext, useEffect, useReducer, useState,
} from 'react';
import useWebSocket, { ReadyState } from 'react-use-websocket';
import ticketReducer from '../utils/ticketReducer';
import useSocket from '../utils/useSocket';

export const TicketContext = createContext([]);

export default function TicketContextProvider({ children }) {
  const [tickets, dispatch] = useReducer(ticketReducer, null);
  const { lastJsonMessage, readyState } = useSocket();

  useEffect(() => {
    if ((lastJsonMessage && lastJsonMessage.type === 'all_tickets') && readyState === ReadyState.OPEN) {
      dispatch({
        type: 'all',
        contents: lastJsonMessage.contents,
      });
    }
  }, [lastJsonMessage]);

  return (
    <TicketContext.Provider value={[tickets, dispatch]}>
      {children}
    </TicketContext.Provider>
  );
}
