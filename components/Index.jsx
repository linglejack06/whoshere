import { Text } from 'react-native';
import { createMaterialBottomTabNavigator } from 'react-native-paper/react-navigation';
import { ReadyState } from 'react-use-websocket';
import { useContext, useEffect } from 'react';
import Wrapper from '../Wrapper';
import useSocket from '../utils/useSocket';
import { TokenContext } from '../context/TokenContexxt';

function Profile() {
  return <Text>Profile</Text>;
}
function TicketForm() {
  return <Text>Ticket form</Text>;
}

const Tab = createMaterialBottomTabNavigator();
export default function Index() {
  const { readyState, sendJsonMessage } = useSocket();
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
    <Tab.Navigator>
      <Tab.Screen name="Profile" component={Profile} />
      <Tab.Screen name="Create Ticket" component={TicketForm} />
      <Tab.Screen name="Active Tickets" component={Wrapper} />
    </Tab.Navigator>
  );
}
