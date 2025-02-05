import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Squares } from './testComponents/heightWidth';

const App = () => {
  return (
    <View style= {styles.container}>
      <Text>fchDev.io
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 40,
    height: 550,
    backgroundColor: 'red'
  },
  header: {
    flex:1,
    width: 200,
    height: 50,
    backgroundColor: 'blue'
  },
  smallSquare: {
    width: 50,
    height: 50,
    backgroundColor: 'powderblue'
  }
})
export default App;
