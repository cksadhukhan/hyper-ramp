import React from 'react';
import {ThemeProvider} from 'styled-components/native';
import theme from './src/theme/theme';
import HomeScreen from './src/screens/home/home.screen';
import OnBoarding from './src/screens/onboarding/onboarding.screen';
import RequestHistory from './src/screens/request/history/history.screen';

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <RequestHistory />
    </ThemeProvider>
  );
};

export default App;
