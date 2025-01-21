import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

const SimpleText = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.h1}>
        trendingVol
      </Text>
      <Description></Description>
    </View>
  )
}

const Description = ()=>{
  return(
    <View>
      <Text style={styles.h3}>
        description
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    marginTop: 50,
    backgroundColor: 'blue'
  },
  h1: {
    fontSize: 24
  },
  h3: {
    fontSize: 18
  }
})

export default SimpleText;