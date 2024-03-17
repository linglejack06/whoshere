import useWebSocket, { ReadyState } from 'react-use-websocket';
import { useContext, useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import Wrapper from '../Wrapper';
import useSocket from '../utils/useSocket';
import { ErrorContext } from '../context/ErrorContext';

export default function Index() {
  const [error] = useContext(ErrorContext);
  const { sendJsonMessage, readyState } = useSocket();

  useEffect(() => {
    if (readyState === ReadyState.OPEN) {
      console.log('sending auth');
      sendJsonMessage({
        type: 'auth',
        fields: { token: '1345' },
      });
    }
  }, [readyState]);

  return (
    <View>
      <Text>{error}</Text>
    </View>
  );
}
