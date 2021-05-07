import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Colors from '../../res/colors'

const CalculatorResult = ({ item, index }) => {
  return (
    <View style={styles.row}>

      <View style={styles.indexBox}>
        <Text style={styles.indexText}>{index+1}</Text>
      </View>

      <View style={styles.calculationBox}>
        <Text style={styles.calculationText}>{item.calculationStr} = {item.result} </Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({ 
  row: {
    flexDirection: "row",    
    justifyContent: "flex-start",
    borderWidth: 1,
    borderColor: Colors.calcNumber,    
    marginBottom: 15
  },  
  indexBox: {
    padding: 10,
    backgroundColor: Colors.green,
    minWidth: 50,
  },
  indexText: {
    color: Colors.white,
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 25
  },
  calculationBox: {
    justifyContent: "center",
    paddingLeft: 15,
    paddingRight: 15
  },
  calculationText: {
    color: Colors.calcNumber,
    fontWeight: "bold",
    fontSize: 16
  }
})

export default CalculatorResult