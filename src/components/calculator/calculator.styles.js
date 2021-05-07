import { StyleSheet, Dimensions  } from 'react-native'
import Colors from '../../res/colors'

const calcPadding = 25
const calcMargin = 5

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white
  },
  headerElipse: {    
    backgroundColor: Colors.backgoundGrey,
    position: "absolute",

    left: 0,
    top: - Dimensions.get("window").width * 1.65,

    height: Dimensions.get("window").width,
    width: Dimensions.get("window").width,

    borderRadius: Dimensions.get("window").width / 2,
    transform: [{ scaleX: 2 }, { scaleY: 2.7 }],
  },  
  headerContainer: {
    paddingBottom: 35,
    marginBottom: 40,
  },  
  header: {
    backgroundColor: Colors.blue
  },  
  titleText: {
    color: Colors.green,
    fontWeight: "bold",
    textAlign: 'center',
    fontSize: 20,
  },  
  calculatorInput: {
    color: Colors.white,
    textAlign: 'center',
    fontSize: 45,
    marginBottom: 25
  },  

  calculatorContainer: {
    padding: calcPadding - calcMargin,
  },

  row: {    
    flexDirection: "row",
    justifyContent: "space-between"
  },

  textGreen: {
    color: Colors.green
  },
  textGray: {
    color: Colors.calcNumber
  },

  textWhite: {
    color: Colors.white
  },

  calcBtnEqual: {
    backgroundColor: Colors.green,
    borderRadius: (Dimensions.get("window").width / 4) - (calcPadding - calcMargin/2),
    padding: 8,
    margin: calcMargin,
    width: (Dimensions.get("window").width / 4) - (calcPadding - calcMargin/2),
  },

  calcBtn: {
    padding: 8,
    margin: calcMargin,
    width: (Dimensions.get("window").width / 4) - (calcPadding - calcMargin/2),
  },
  
  calcBtnText: {
    fontSize: 30,
    textAlign: "center"
  },
  loader: {
    marginTop: 60
  }
})