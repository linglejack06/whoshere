import { PaperProvider } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import TicketContextProvider from './context/TicketContext';
import Index from './components/Index';
import ErrorContextProvider from './context/ErrorContext';
import TokenContextProvider from './context/TokenContexxt';

export default function App() {
  return (
    <ErrorContextProvider>
      <TokenContextProvider>
        <TicketContextProvider>
          <NavigationContainer>
            <PaperProvider>
              <Index />
            </PaperProvider>
          </NavigationContainer>
        </TicketContextProvider>
      </TokenContextProvider>
    </ErrorContextProvider>
  );
}
