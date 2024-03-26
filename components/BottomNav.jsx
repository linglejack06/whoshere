import { useState } from 'react';
import { BottomNavigation } from 'react-native-paper';
import { Text } from 'react-native';
import Wrapper from '../Wrapper';

function Profile() {
  return <Text>Profile</Text>;
}
function TicketForm() {
  return <Text>Ticket form</Text>;
}

export default function BottomNav() {
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    { key: 'profile', title: 'Profile' },
    { key: 'addTicket', title: 'Create Ticket' },
    { key: 'activeTickets', title: 'Active Tickets' },
  ]);

  const renderScene = BottomNavigation.SceneMap({
    profile: Profile,
    addTicket: TicketForm,
    activeTickets: Wrapper,
  });

  return (
    <BottomNavigation
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      renderScene={renderScene}
    />
  );
}
