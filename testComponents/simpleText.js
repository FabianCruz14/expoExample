import { StyleSheet, Text, View } from 'react-native';

//create a component who show a simple text with specifics styles
const SimpleText = () => {
  return (
    //view is same a div, text as a p
    // each component, in this case core components, have properties
    // like a stlye
    <View style={styles.container}>
      <Text style={styles.h1}>
        trendingVol
      </Text>
      <Description></Description>
    </View>
  )
}

// other componet who name is Description and show a text description
const Description = ()=>{
  return(
    <View>
      <Text style={styles.h3}>
        description
      </Text>
    </View>
  )
}

// we can add styles to our componentes by using a object
// access to styles like arrays
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
    fontSize: 10
  }
})

export default SimpleText;