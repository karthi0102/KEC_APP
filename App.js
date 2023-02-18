import React, { useEffect } from 'react';
import { SafeAreaView, StyleSheet} from 'react-native';
import AppNavigation from './src/screens/AppNavigation';
import { Provider } from 'react-redux';
import Reducers from './src/reducers'
import {createStore,applyMiddleware,compose} from 'redux'
import thunk from 'redux-thunk';
import Loading from './src/screens/Loading';

const store = createStore(Reducers,compose(applyMiddleware(thunk)))
import OneSignal from 'react-native-onesignal';
import Alert from './src/components/Alert';
OneSignal.setAppId('1e8e3e87-0155-46a5-aa28-545f0512a0fb');

const App= () => {

  return (
    <Provider store={store} >
         <SafeAreaView style={styles.root}>
                <AppNavigation />
                <Loading  />
                <Alert />  
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
