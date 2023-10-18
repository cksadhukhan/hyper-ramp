import React from 'react';
import {ThemeProvider} from 'styled-components/native';
import theme from './src/theme/theme';
import RequestDetailsScreen from './src/screens/request/details/details.screen';

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <RequestDetailsScreen />
    </ThemeProvider>
  );
};

export default App;
