import React from 'react';
import { SafeAreaView,Text, StyleSheet} from 'react-native';
import AppNavigation from './src/screens/AppNavigation';
import { Provider } from 'react-redux';
import Reducers from './src/reducers'
import {createStore,applyMiddleware,compose} from 'redux'
import thunk from 'redux-thunk';
import Home from './src/screens/Home'
const store = createStore(Reducers,compose(applyMiddleware(thunk)))
import OneSignal from 'react-native-onesignal';

OneSignal.setAppId('1e8e3e87-0155-46a5-aa28-545f0512a0fb');

const App= () => {
  return (
   
    <Provider store={store} >
         <SafeAreaView style={styles.root}>
               <AppNavigation />
         </SafeAreaView> 
    </Provider>
  );
};


const styles = StyleSheet.create({
    root:{
      flex:1,
      backgroundColor:"#F9F7F7"
    }
});
export default App;
