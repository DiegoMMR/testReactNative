import React from 'react'
import { View, Text, Pressable } from 'react-native'
import styles from './calculator.styles'

const CalculatorBtn = ({ onPress, char, color }) => {
  return (
    (char === null) 
    ? (
      <View style={styles.calcBtn}>
        <Text style={[ styles.calcBtnText ]}> </Text>
      </View>
    ) : (
      <Pressable style={ (char === '=') ? styles.calcBtnEqual : styles.calcBtn } onPress={() => onPress(char)}>
        <Text style={[ styles.calcBtnText, styles[color] ]}>{char}</Text>
      </Pressable>
    )
  )
}

export default CalculatorBtn