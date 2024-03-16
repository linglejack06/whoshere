import { Text, View } from 'react-native';
import { useEffect, useState } from 'react';
import useWebSocket from 'react-use-websocket';
import TicketContextProvider from './context/TicketContext';
import Wrapper from './Wrapper';

export default function App() {
  const { sendJsonMessage } = useWebSocket(process.env.EXPO_PUBLIC_WS_URL, { share: true });
  useEffect(() => {
    sendJsonMessage({
      type: 'auth',
      fields: {
        token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImxpbmdsZWphY2siLCJpZCI6IjY1YmFlYTZlZmU4NzdjM2FmNzBjN2FkYyIsImlhdCI6MTcwNzA3MTU4NH0.coLf2FvRuORUR8mL06BrQivfQj3c1YZpEOXdjR7w1M8',
      },
    });
  });
  return (
    <TicketContextProvider>
      <View>
        <Wrapper />
      </View>
    </TicketContextProvider>
  );
}
