import React from 'react';
import './App.css';

import Contexts from 'contexts';
import Users from 'components/users';
import Header from 'components/header';


function App() {
  return (
    <div class="app">
      <Contexts>
        <Header />
        <Users />
      </Contexts>
    </div>
  );
}

export default App;
