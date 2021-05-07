import React, { Component } from 'react'
import { connect } from 'react-redux';
import { View, StyleSheet, FlatList, Text, Pressable, Image } from 'react-native'
import Colors from '../../res/colors'
import CalculatorResult from './CalculatorResult'

class CalculatorReport extends Component {

  state = {
    results: [],
  }

  go_to_calculator = () => {
    const { navigation } = this.props
    
    navigation.navigate("CalculatorScreen")
  }

  render() {
    const { results } = this.props.results
    
    return (
      <View style={styles.container}>
        <View style={styles.row}>
          <Text style={styles.reportTitle}>Report</Text>

          <Pressable style={styles.btn} onPress={this.go_to_calculator}>
            <Image style={styles.btnIcon} source={require('../../assets/img/calculator-icon.png')}/>
            <Text style={styles.btnText}>Calculator</Text>
          </Pressable>
        </View>

          <FlatList 
            data={results}
            keyExtractor={(item, index) => index}
            renderItem={ ({item, index}) => 
              <CalculatorResult index={index} item={item} />
            }
          />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
    padding: 25
  },
  titleText: {
    color: Colors.white,
    textAlign: 'center'
  },  
  row: {
    flexDirection: "row",    
    justifyContent: "space-between",
    marginBottom: 25
  },  
  reportTitle: {
    color: Colors.darkBlue,
    fontSize: 35,
    fontWeight: "bold"
  },  
  btn: {
    padding: 8,
    paddingLeft: 20,
    paddingRight: 20,
    flexDirection: "row",
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.darkBlue,
  },
  btnIcon: {
    marginRight: 15
  },
  btnText: {
    color: Colors.white,
    textAlign: "center",
    fontSize: 13,
    fontWeight: "bold"
  },
  loader: {
    marginTop: 60
  }
})

const mapStateToProps = (state) => {
  const { results } = state
  return { results }
};

export default connect(mapStateToProps) (CalculatorReport)