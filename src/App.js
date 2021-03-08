import './App.css';
import React, { useState } from 'react';

import AppContext from './pages/utils/AppContext';
import Home from './pages/Home/Home';

function App() {
  const [textState, setText] = useState("TestValue");

  return (
    <div className="App">
      <AppContext.Provider value={textState}>
        <Home />
      </AppContext.Provider>
    </div>
  );
}

export default App;
