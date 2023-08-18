import React from 'react';
import { View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Routes from './src/helpers/routes';


 const App = () => {
  return (
    <View className="flex-1">
      <NavigationContainer>
        <Routes />
      </NavigationContainer>
    </View>
  );
}


export default App;