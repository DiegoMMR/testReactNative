import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Colors from '../../res/colors'
import CalculatorReport from './CalculatorReport'
import CalculatorScreen from './CalculatorScreen'
import { Image, Dimensions, StyleSheet } from 'react-native'

const Stack = createStackNavigator()

const navigationOptions = {
  //headerTitleStyle: { alignSelf: 'center' },
  headerStyle: {
    height: 110,
    backgroundColor: Colors.backgoundGrey,
    shadowColor: Colors.backgoundGrey
  },
}

const stackScreenOptions = {
  headerTitle: () => <Image style={styles.navigationHeaderImg} source={require('../../assets/img/logo.png')}/>,
  headerBackImage: () => (
      <Image style={styles.navigationHeaderBackImg} source={require('../../assets/img/left-arrow-icon.png')}/>
  ),
  headerLeftContainerStyle:  { marginLeft: 20 }
}

const CalculatorStack = () => {

  return (
    <Stack.Navigator 
      screenOptions={navigationOptions}
    >
      <Stack.Screen 
        name="CalculatorReport" 
        component={CalculatorReport}
        options={stackScreenOptions}
      />

      <Stack.Screen 
        name="CalculatorScreen" 
        component={CalculatorScreen}
        options={stackScreenOptions} 
      />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
  navigationHeaderImg: {
    alignSelf: 'flex-end',
    marginRight: (Dimensions.get("window").width - 148 - 30) / 2,
    justifyContent: 'center',
    width: 148,
    height: 44
  },
})

export default CalculatorStack;