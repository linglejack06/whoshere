import { Text, View } from 'react-native';
import { useEffect, useState } from 'react';
import useWebSocket from 'react-use-websocket';

export default function App() {
  const { sendJsonMessage, lastMessage } = useWebSocket(process.env.EXPO_PUBLIC_WS_URL);
  useEffect(() => {
    sendJsonMessage({
    });
  });
  return (
    <View>
      <Text>{lastMessage != null ? lastMessage.data : 'fail'}</Text>
      <Text>hello query</Text>
    </View>
  );
}
