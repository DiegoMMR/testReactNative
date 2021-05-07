import React, { Component } from 'react'
import { 
  TextInput, 
  View, 
  Image,  
  StyleSheet, 
  Text, 
  Pressable, 
  Dimensions
} from 'react-native'
import Colors from '../../res/colors'

class CoinsScreen extends Component {

  state = {
    username: '',
    password: ''
  }

  handle_username = username => {
    this.setState({ username })
  }
  handle_password = password => {
    this.setState({ password })
  }

  render() {
    const { sign_in } = this.props
    const { username, password } = this.state

    return (
      <View style={styles.container}>
        <View style={styles.blueBackground}></View>

        <View style={styles.iconCircle}>
          <Image style={styles.icon} source={require('../../assets/img/share.png')}/>
        </View>

        <View style={styles.card}>
          <Image style={styles.logo} source={require('../../assets/img/logo.png')}/>

          <View style={styles.inputRow}>
          <Image style={styles.inputIcon} source={require('../../assets/img/user-icon.png')}/>
            <TextInput 
              style={styles.textInput}
              onChangeText={this.handle_username}
              value={username}
              placeholder="User"
              placeholderTextColor={Colors.textMuted}
            />
          </View>
          <View style={styles.inputRow}>
            <Image style={styles.inputIcon} source={require('../../assets/img/padlock-icon.png')}/>
            <TextInput 
              style={styles.textInput}
              secureTextEntry={true}
              onChangeText={this.handle_password}
              value={password}
              placeholder="Password"
              placeholderTextColor={Colors.textMuted}
            />
          </View>
          
          <Pressable style={styles.btn} onPress={sign_in}>
            <Text style={styles.btnText}>Login</Text>
          </Pressable>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignContent: "center",
    justifyContent: 'center'
  },
  blueBackground: {
    position: "absolute",
    backgroundColor: Colors.blue,
    top: 0,
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height * 2/3
  }, 
  icon: {
    alignSelf: "center",
    width: 50,
    height: 50
  }, 
  iconCircle: {
    alignSelf: "center",
    height: 106,
    padding: 25,
    width: 106,
    borderRadius: 53,
    borderWidth: 2,
    borderColor: Colors.white,
    marginBottom: 35
  },

  card: {
    backgroundColor: "white",
    padding: 55,
    margin: 15
  },  

  logo: {
    alignSelf: "center",
    marginBottom: 50,
    marginTop: 10,
    width: 148,
    height: 44
  }, 
       

  inputRow: {
    flexDirection: 'row',    
    borderWidth: 1,
    borderColor: Colors.inputBorder,
    marginBottom: 20,
  },
  inputIcon: {
    margin: 15,
    height: 18,
    width: 18,
  },
  textInput: {
    flex: 1,
    padding: 0,
    margin: 0
  },

  btn: {
    padding: 8,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.green,
    marginTop: 15,
    marginBottom: 10
  },
  btnText: {
    color: 'white',
    textAlign: "center",
    fontSize: 16
  },
})

export default CoinsScreen