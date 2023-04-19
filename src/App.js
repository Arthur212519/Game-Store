import './App.css';
import { ShopContextProvider } from './Context/Shop-Context';
import { GlobalStyle } from './globalStyles';
import { RoutesPage } from './pages/Routes';

function App() {
  return (
    <>
      <ShopContextProvider>
      <GlobalStyle />
        <RoutesPage />
      </ShopContextProvider>
    </>
  )
}

export default App;
