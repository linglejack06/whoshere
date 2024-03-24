import { PaperProvider } from 'react-native-paper';
import TicketContextProvider from './context/TicketContext';
import Index from './components/Index';
import ErrorContextProvider from './context/ErrorContext';
import TokenContextProvider from './context/TokenContexxt';

export default function App() {
  return (
    <ErrorContextProvider>
      <TokenContextProvider>
        <TicketContextProvider>
          <PaperProvider>
            <Index />
          </PaperProvider>
        </TicketContextProvider>
      </TokenContextProvider>
    </ErrorContextProvider>
  );
}
