import React, { useEffect, FC } from 'react';
import SplashScreen from 'react-native-splash-screen';

import AppNavigator from './src/Navigation';

const App: FC = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return <AppNavigator />;
};

export default App;
