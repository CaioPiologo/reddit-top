import React from 'react';
import { Counter } from './features/counter/Counter';
import RedditTop from './pages/Top';
import './App.scss';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* Ideally this would be behind a Router component */}
        <RedditTop />
      </header>
    </div>
  );
}

export default App;
