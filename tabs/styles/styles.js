import { StyleSheet, Dimensions } from 'react-native'
import { block } from 'react-native-reanimated'

export default StyleSheet.create({
  // Home Tab

  item: {
    marginTop: 5,
    marginBottom: 4,
    marginHorizontal: 0,
    fontSize: 11,
    fontWeight: 'bold',
  },
  title: {
    fontSize: 40,
    textAlign: 'left',
  },
  off: {
    textAlign: 'left',
    marginTop: 50,
    backgroundColor: 'red',
    width: 45,
    borderWidth: 2,
    marginHorizontal: 5,
    marginBottom: 10,
  },
  name: {
    backgroundColor: '#f9c2ff',
    padding: 125,
    margin: 'auto',
    textAlign: 'center',
    borderWidth: 2,
  },
  name2: {
    textDecorationLine: 'underline',
    fontSize: 20,
    marginHorizontal: 5,
  },
  des: {
    marginHorizontal: 5,
  },
  desContainer: {
    borderBottomWidth: 1,
    borderColor: 'grey',
    marginLeft: 5,
    marginRight: 5,
  },
  name3: {
    textAlign: 'center',
    fontSize: 30,
    textDecorationLine: 'underline',
  },
  websiteContainer: {
    borderBottomWidth: 1,
    paddingBottom: 10,
    paddingTop: 10,
    paddingLeft: 5,
    width: 400,
    borderColor: 'grey',
    marginLeft: 5,
    marginRight: 5,
  },
  name4: {
    color: 'grey',
    fontSize: 12,
  },
  comment: {
    color: 'grey',
    fontSize: 10,
  },
  website: {
    textAlign: 'left',
    color: 'blue',
    fontSize: 14,
  },
  locationContainer: {
    borderBottomWidth: 1,
    paddingBottom: 10,
    paddingTop: 10,
    paddingLeft: 5,
    width: 400,
    borderColor: 'grey',
    marginLeft: 5,
    marginRight: 5,
  },
  location: {
    textAlign: 'left',
    fontSize: 14,
  },
  name5: {
    color: 'grey',
    fontSize: 12,
  },
  emailContainer: {
    borderBottomWidth: 1,
    paddingBottom: 10,
    paddingTop: 10,
    paddingLeft: 5,
    width: 400,
    borderColor: 'grey',
    marginLeft: 5,
    marginRight: 5,
  },
  name6: {
    color: 'grey',
    fontSize: 12,
  },
  email: {
    textAlign: 'left',
    fontSize: 14,
  },
  name7: {
    color: 'grey',
    fontSize: 12,
  },
  phoneNumber: {
    textAlign: 'left',
    fontSize: 14,
  },
  comment2: {
    color: 'grey',
    fontSize: 10,
  },
  phoneNumberContainer: {
    paddingBottom: 10,
    paddingTop: 10,
    paddingLeft: 5,
    width: 400,
    borderColor: 'grey',
    marginLeft: 5,
    marginRight: 5,
  },
  image: {
    height: 138,
    width: '100%',
  },
  itemContainer: {
    marginRight: 20,
    marginLeft: 10,
    backgroundColor: 'grey',
    borderRadius: 10,
    overflow: 'hidden',
    width: 209,
  },
  shadowProp: {
    shadowColor: '#171717',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.4,
    shadowRadius: 2,
  },
  add: {
    fontSize: 11,
    flexShrink: 1,
    flexWrap: 'wrap',
  },
  block: {
    fontSize: 11,
  },
  TextContainer: {
    width: '100%',
    height: 75,
    paddingHorizontal: 12,
  },

  // Hour Tab

  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
  info: {
    fontWeight: 'bold',
    fontSize: 17,
    textAlign: 'center',
  },
  timerHeader: {
    textAlign: 'center',
    fontSize: 12,
  },
  timer: {
    color: 'black',
    fontSize: 40,
  },
  timerContainer: {
    paddingTop: 10,
    alignSelf: 'center',
  },
  timerButtons: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingTop: 30,
  },

  // Rewards Tab

  rewardsTitle: {
   fontSize: 25,
   fontWeight: 'bold',
   textAlign: 'center',
   paddingTop: 84,
  },
  points: {
    fontSize: 80,
    fontWeight: 'bold',
    color: 'green',
    textAlign: 'center',
    fontFamily: 'Arial',
    paddingRight: 23,
  },
  pointsName: {
   fontSize: 20,
   textAlign: 'center',
   
  },
})
