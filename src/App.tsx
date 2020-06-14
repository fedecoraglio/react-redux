import React from 'react';
import './App.css';
import store from './store/store';
import { Provider } from 'react-redux';
import UserMainPage from './user/UserMainPage'; 

function App() {
  return (
    <div>
    <Provider store={store}>
      <UserMainPage />
    </Provider>
    </div>
  );
}

export default App;
