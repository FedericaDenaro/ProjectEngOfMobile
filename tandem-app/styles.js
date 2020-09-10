import { StyleSheet, Dimensions } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  imagecontainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 30,
  },
  inputcontainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 40,
  },
  inputtext: {
    backgroundColor: '#FAF8CC',
    padding: 10,
    width: '70%',
    marginTop: 10,
    fontSize: 18,
    borderRadius: 10,
  },

  photo: {
    marginTop: 15,
    marginBottom: 10,
    borderRadius: 70,
    borderWidth: 3,
    borderColor: '#0000FF',
    width: 150,
    height: 150,
    justifyContent: 'center',
    alignItems: 'center',
  },

  image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },

  logo: {
    width: 140,
    height: 60,
    alignItems: 'center',
  },
  intro: {
    flex: 2,
    resizeMode: 'cover',
    justifyContent: 'bottom',
  },
  button: {
    backgroundColor: 'red',
    padding: 14,
    marginTop: 10,
    width: '50%',
    marginLeft: '5%',
    alignSelf: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  searchButton: {
    backgroundColor: '#0073e6',
    padding: 14,
    marginTop: 0,
    marginLeft: '5%',
    alignSelf: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  editButton: {
    backgroundColor: '#DC143C',
    padding: 14,
    width: 100,
    marginTop: 10,
    marginLeft: '5%',
    alignSelf: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  
  pickerStyle: {
    backgroundColor: '#FAF8CC',
    padding: 14,
    marginTop: 0,
    marginLeft: '5%',
    alignSelf: 'center',
    borderRadius: 10,
    width: 110,
  },

  textButton: {
    color: 'white',
    fontSize: 18,
  },
  text: {
    color: '#382D2C',
    fontSize: 18,
    marginTop: 40,
    marginLeft: 15,
    marginRight: 15,
    textAlign: 'center',
  },

  header: {
    color: '#0000FF',
    fontSize: 20,
    marginTop: 5,
    marginLeft: 15,
    marginRight: 15,
    textAlign: 'center',
  },

  subHeader: {
    color: '#382D2C',
    fontSize: 17,
    marginTop: 5,
    marginLeft: 15,
    marginRight: 15,
    textAlign: 'center',
  },

  editNames: {
    color: '#382D2C',
    fontSize: 16,
    marginTop: 25,
    marginLeft: 15,
    marginBottom: 15,
    textAlign: 'center',
  },
  editinput: {
    backgroundColor: '#FAF8CC',
    padding: 10,
    width: '70%',
    marginTop: 10,
    fontSize: 16,
    borderRadius: 10,
  },

  langHeader: {
    color: '#382D2C',
    fontSize: 16,
    marginTop: 25,
    marginLeft: 15,
    marginRight: 15,
    marginBottom: 40,
    textAlign: 'center',
  },

  bioHeader: {
    color: '#382D2C',
    fontSize: 16,
    fontStyle: 'italic',
    marginTop: 25,
    marginLeft: 15,
    marginRight: 15,
    textAlign: 'center',
  },

  textlanguages: {
    backgroundColor: '#382D2C',
    marginVertical: 5,
    height: 25,
    width: 100,
    textAlign: 'center',
    color: '#FAF8CC',
    fontSize: 20,
    borderRadius: 10,
  },
  searchContainer: {
    marginVertical: 45,
    marginLeft: 15,
    marginRight: 15,
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
  rowContainer: {
    flexDirection: 'row',
  },

  fixed: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  scrollview: {
    backgroundColor: 'transparent',
  },
  listItem: {
    margin: 10,
    padding: 10,
    width: '100%',
    backgroundColor: '#fffff0',
    flex: 1,
    alignSelf: 'center',
    flexDirection: 'row',
    borderRadius: 5,
  },
  touchable: {
    width: '100%',
    flex: 1,
    alignSelf: 'center',
    flexDirection: 'row',
    borderRadius: 5,
  },
});

export default styles;
