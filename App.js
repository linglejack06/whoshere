import TicketContextProvider from './context/TicketContext';
import Index from './components/Index';
import ErrorContextProvider from './context/ErrorContext';

export default function App() {
  return (
    <ErrorContextProvider>
      <TicketContextProvider>
        <Index />
      </TicketContextProvider>
    </ErrorContextProvider>
  );
}
