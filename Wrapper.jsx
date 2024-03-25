import { useContext } from 'react';
import { Text } from 'react-native';
import { TicketContext } from './context/TicketContext';

export default function Wrapper() {
  const [tickets] = useContext(TicketContext);
  if (tickets) {
    return <Text>{tickets[0].user}</Text>;
  }
  return <Text>No luck</Text>;
}
