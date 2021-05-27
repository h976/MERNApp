import React from 'react';

import AppNavBar from './components/AppNavBar';
import ShoppingList from './components/ShoppingList';

import { Provider } from 'react-redux';
import store from './store'

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Container } from 'reactstrap';
import ItemModal from './components/ItemModal';




function App() {
  return (
    <Provider store={store}>
    
      <div className="App">
          <AppNavBar/>
          <Container>
            <ItemModal/>
            <ShoppingList/>
          </Container>
          
      </div>
      </Provider>
  );
}

export default App;
