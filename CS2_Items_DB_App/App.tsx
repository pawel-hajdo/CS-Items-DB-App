import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import BottomMenuNavigation from "./navigation/BottomMenuNavigation.jsx";
import HomePage from "./screens/HomePage.jsx";

function App(): React.JSX.Element {

  return (
      <NavigationContainer>
          <BottomMenuNavigation/>
      </NavigationContainer>
  );
}

export default App;
