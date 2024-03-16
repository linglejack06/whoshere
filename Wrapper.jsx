import { useContext } from 'react';
import { Text } from 'react-native';
import { TicketContext } from './context/TicketContext';

export default function Wrapper() {
  const tickets = useContext(TicketContext);
  return (
    <Text>hi</Text>
  );
}
