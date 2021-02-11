import React from 'react';
import { Box, Typography, Button } from '@material-ui/core';
import styled from 'styled-components';

const StyledDiv = styled.div`
  height: 200px;
  width: 200px;
  text-align: center;
`;

export const Home = () => {
  return (
    <div>
      <Typography variant="h3">
        Log into Spotify Here And see your account info appear!
      </Typography>
      <Button>
        <a href="http://localhost:8080/login">Login</a>
      </Button>
    </div>
  );
};
