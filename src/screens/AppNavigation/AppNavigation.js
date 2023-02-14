import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../Home';
import Circular from '../Circular';
import Auth from '../Auth';
import VerifyOTP from '../../components/VerifyOTP';
import ForgetPassword from '../../components/ForgetPassword/ForgetPassword';
import CircularPreview from '../CircularPreview';
import DeptCircular from '../DeptCircular';
const Stack = createNativeStackNavigator();
const AppNavigation = () => {
 
  return (
    <NavigationContainer>
        <Stack.Navigator  screenOptions={{headerShown: false}} initialRouteName="Home">
                <Stack.Screen name='Home' component={Home} /> 
                <Stack.Screen name='Circular' component={Circular} />
                <Stack.Screen name='CircularPreview' component={CircularPreview} />
                <Stack.Screen name='Auth' component={Auth} />
                <Stack.Screen name="VerifyOtp" component={VerifyOTP} />
                <Stack.Screen name='Forget' component={ForgetPassword} />
                <Stack.Screen name ='Dept' component={DeptCircular}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigation
