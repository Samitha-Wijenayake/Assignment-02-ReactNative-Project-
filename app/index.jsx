
import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import home from '../screens/home';
import CardScreen from '../screens/CardScreen';
import SignUpScreen from '../screens/Register';
import { HospitalProvider } from '../context/HospitalContext';


const Stack = createNativeStackNavigator();

const App = () => {
  return (
    // Wrap the navigator with the HeartCountProvider
    <HospitalProvider>

   
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          component={home}
          name="Home"
          options={{ headerShown: false }}
        />
        <Stack.Screen
          component={CardScreen}
          name="card"
          options={{ headerShown: false }}
        />
        <Stack.Screen
          component={SignUpScreen}
          name="signup"
          options={{ headerShown: false }}
        />
     
      
        <Stack.Screen name="Profile" component={CardScreen} />
      </Stack.Navigator>
      </HospitalProvider>
  
  );
};

export default App;
