import React, { Component } from 'react'
import { connect } from 'react-redux';
import { View, Text, Pressable } from 'react-native'
import styles from './calculator.styles'
import CalculatorBtn from './CalculatorBtn'

class CalculatorScreen extends Component {

  state = {
    coins: [],
    allCoins: [],
    loading: false,
    calculationStr: '',
    result: ''
  }

  update_calc = char =>  {
    let { calculationStr, result } = this.state

    if (result != '') {
      calculationStr = ''
      this.setState({ result: '' })
    }

    if (char === '<-' && calculationStr.length > 0) {
      //erase
      calculationStr = calculationStr.slice(0, -1)
      this.setState({calculationStr})
    } else if (char === 'C') {
      //clear
      this.setState({ calculationStr: '' })
    } else if (calculationStr != '' && char === '=') {   
      //evaluate the result
      result = eval(calculationStr)
      this.setState({result})
      
      //send result to storage
      this.props.dispatch({ type: 'ADD_RESULT', payload: {calculationStr,result}, })
    } else if (char !== '=' && char !== '<-') {  
      // add the char to the string 
      calculationStr += char
      this.setState({calculationStr})
    }
  }

  handle_press = char => {
      try {
        this.update_calc(char)
      } catch (error) {
        alert('Please check your input')
      }
  }

  render() {
    const { calculationStr, result } = this.state

    return (
      <View style={styles.container}>
        <View style={styles.header}>

          <View style={styles.headerElipse}></View>
          <View style={styles.headerContainer}>
            <Text style={styles.titleText}>Calculator</Text>
          </View>

          <View>
            <Text style={styles.calculatorInput}>{calculationStr}{result?'=':null}{result}</Text>
          </View>

        </View>

        <View style={styles.calculatorContainer}>
          <View style={styles.row}>
            <CalculatorBtn onPress={this.handle_press} char="<-" color="textGreen" />
            <CalculatorBtn onPress={this.handle_press} char="C" color="textGreen" />
            <CalculatorBtn onPress={this.handle_press} char="%" color="textGreen" />
            <CalculatorBtn onPress={this.handle_press} char="/" color="textGreen" />
          </View>

          <View style={styles.row}>
            <CalculatorBtn onPress={this.handle_press} char="7" color="textGray" />
            <CalculatorBtn onPress={this.handle_press} char="8" color="textGray" />
            <CalculatorBtn onPress={this.handle_press} char="9" color="textGray" />
            <CalculatorBtn onPress={this.handle_press} char="*" color="textGreen" />
          </View>

          <View style={styles.row}>
            <CalculatorBtn onPress={this.handle_press} char="4" color="textGray" />
            <CalculatorBtn onPress={this.handle_press} char="5" color="textGray" />
            <CalculatorBtn onPress={this.handle_press} char="6" color="textGray" />
            <CalculatorBtn onPress={this.handle_press} char="-" color="textGreen" />
          </View>

          <View style={styles.row}>
            <CalculatorBtn onPress={this.handle_press} char="1" color="textGray" />
            <CalculatorBtn onPress={this.handle_press} char="2" color="textGray" />
            <CalculatorBtn onPress={this.handle_press} char="3" color="textGray" />
            <CalculatorBtn onPress={this.handle_press} char="+" color="textGreen" />
          </View>

          <View style={styles.row}>
            <CalculatorBtn char={null} />
            <CalculatorBtn onPress={this.handle_press} char="0" color="textGray" />
            <CalculatorBtn onPress={this.handle_press} char="." color="textGray" />
            <CalculatorBtn onPress={this.handle_press} char="=" color="textWhite" />
          </View>
        </View>
      </View>
    )
  }
}

const mapStateToProps = (state) => {
  const { results } = state
  return { results }
};

export default connect(mapStateToProps) (CalculatorScreen)