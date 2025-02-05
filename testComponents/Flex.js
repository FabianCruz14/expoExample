import React from "react";
import { StyleSheet } from "react-native";
import { View, Text, StyleSheet  } from "react-native-web";

const Flex = () => {
    return(
        <View style = {styles.container}>
        
        </View>
    )
}


const styles = StyleSheet.create ({
    container: {
        flex: 1,
        padding: 20,
        flexDirection: 'column'
    }
});