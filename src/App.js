import AppContextProvider from './context/AppContext'
import { BrowserRouter as Router } from 'react-router-dom'
import Routes from './routes'
import Header from './components/header';

function App() {
  
  return (
    <AppContextProvider>
      <Router>
        <Header/>
        <Routes/>
      </Router>
    </AppContextProvider>
  );
}

export default App;
