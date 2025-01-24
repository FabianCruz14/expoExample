import { StyleSheet, Text, View} from "react-native";

// this component show a 3 squares with diferent size
const Squares = ()=>{
    return(
        <View>
            <View sytle = {{styles.lilSquare}}/>
            <View style = {styles.midSquare}/>
            <View style = {styles.grandSquare}/>
        </View>
    );

    const styles = StyleSheet.create({
        lilSquare: {
            width: 50,
            height: 50,
            backgroundColor: 'powderblue' 
        },
        midSquare: {
            width: 100,
            heigth: 100,
            backgroundColor: 'skyblue'
        },
        grandSquare: {
            width: 150,
            heigth: 150,
            backgroundColor: 'steelblue'
        }
    })
};