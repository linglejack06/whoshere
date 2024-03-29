import useWebSocket from 'react-use-websocket';
import { useContext } from 'react';
import { Platform } from 'react-native';
import { ErrorContext } from '../context/ErrorContext';

const useSocket = () => {
  // eslint-disable-next-line no-unused-vars
  const [error, setError] = useContext(ErrorContext);
  return useWebSocket(
    Platform.OS === 'ios' ? process.env.EXPO_PUBLIC_WS_IOS_URL : process.env.EXPO_PUBLIC_WS_ANDROID_URL,
    {
      share: true,
      onMessage: (msg) => {
        const msgJson = msg.length !== 0 ? JSON.parse(msg.data) : {};
        if (msgJson.type === 'error') {
          setError(msgJson.message);
        }
      },
      onError: (err) => {
        setError(err.message);
      },
    },
  );
};

export default useSocket;
