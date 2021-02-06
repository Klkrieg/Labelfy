import React from 'react';
import styled from 'styled-components';

const StyledDiv = styled.div`
  height: 200px;
  width: 200px;
  text-align: center;
`;
const App = () => {
  return (
    <div>
      <h1>Log into Spotify Here And see your account info appear!</h1>
      <Button>Login</Button>
    </div>
  );
};

export default App;
