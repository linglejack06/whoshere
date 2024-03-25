import useWebSocket, { ReadyState } from 'react-use-websocket';
import { useContext, useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import Wrapper from '../Wrapper';
import useSocket from '../utils/useSocket';
import { ErrorContext } from '../context/ErrorContext';
import { TokenContext } from '../context/TokenContexxt';

export default function Index() {
  const [error] = useContext(ErrorContext);
  const { sendJsonMessage, readyState } = useSocket();
  const [token] = useContext(TokenContext);

  useEffect(() => {
    if (readyState === ReadyState.OPEN) {
      console.log('sending auth');
      sendJsonMessage({
        type: 'auth',
        fields: { token },
      });
    }
  }, [readyState]);

  return (
    <View>
      <Text>{error}</Text>
      <Wrapper />
    </View>
  );
}
