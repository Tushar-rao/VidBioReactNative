import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import RootNavigation from './src/RootNavigation';

import {AuthProvider} from './src/components/AuthContext';

const App = () => {
  return (
    <AuthProvider>
      <NavigationContainer>
        <RootNavigation />
      </NavigationContainer>
    </AuthProvider>
  );
};

export default App;
