import React from 'react';
import {ThemeProvider} from 'styled-components/native';
import theme from './src/theme/theme';
import HomeScreen from './src/screens/home/home.screen';
import OnBoarding from './src/screens/onboarding/onboarding.screen';

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      {/* <OnBoarding /> */}
      <HomeScreen />
    </ThemeProvider>
  );
};

export default App;
