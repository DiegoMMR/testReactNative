/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { Component } from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'
import { StyleSheet } from 'react-native';
import LoginScreen from './src/components/login/LoginScreen'
import CalculatorStack from './src/components/calculator/CalculatorStack'
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import ResultsReducer from './src/store/ResultsReducer'

const Stack = createStackNavigator()
const store = createStore(ResultsReducer);

class App extends Component {

  state = {
    isSignedIn: false
  }

  sign_in = () => {
    this.setState({isSignedIn: true})
  }

  render() {
    const { isSignedIn } = this.state

    return (
      <Provider store={store}>        
        <NavigationContainer>
          {
              isSignedIn ? (
                <CalculatorStack />
              ) : (
                <Stack.Navigator 
                  screenOptions={{
                    headerShown: isSignedIn
                  }}
                >
                  <Stack.Screen name="Login">
                    {props => <LoginScreen sign_in={this.sign_in} />}
                  </Stack.Screen>
                  
                </Stack.Navigator>
              )
            }
          
        </NavigationContainer>      
      </Provider>
    );
  }
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
