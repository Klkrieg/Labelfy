import React from 'react';

import { Home } from './components/Home.jsx';

const App = () => {
  React.useEffect(() => {
    console.log('Hello from bundled React');
  });
  return <Home />;
};

export default App;
