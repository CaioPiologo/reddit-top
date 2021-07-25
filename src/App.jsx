import React from 'react';
import RedditTop from './pages/Top';

function App() {
  return (
    <div>
      <header>
        {/* Ideally this would be behind a Router component */}
        <RedditTop />
      </header>
    </div>
  );
}

export default App;
