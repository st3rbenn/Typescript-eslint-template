import React from 'react';
import Heart from './component/svg/Heart';
import { Box, Text } from '@mantine/core';

function App() {
  return (
    <Box>
      <Text>
        Template Typescript using esLint and Prettier Made with {<Heart />} {" "} by
        <a href='https://www.github.com/st3rbenn' style={{ textDecoration: 'none' }}>
          St3rbenn
        </a>
      </Text>
    </Box>
  );
}

export default App;
