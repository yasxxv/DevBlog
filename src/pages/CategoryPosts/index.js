import React from "react";
import { View, Text, StyleSheet } from 'react-native'

export default function CategoryPosts(){
    return(
        <View style={styles.container}>
            <Text>Pagina category</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})