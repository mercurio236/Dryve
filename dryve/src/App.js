import './App.css';
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux';

import Router from './routers';
import Header from './Components/Header/header';
import store from './Store';

function App() {
  return (
    <BrowserRouter>
        <Header />
        <Router />
    </BrowserRouter>
  )

}

export default App;
