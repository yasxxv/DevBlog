import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, ImageBackground, Dimensions } from "react-native";

import { useNavigation  } from "@react-navigation/native";

const { width: WIDTH } = Dimensions.get('window')

export default function FavoritePost({data}){

    const navigation = useNavigation();

    function handleNavigate(){
        navigation.navigate("Detail", {id: data.id})
    }

    return(
        <TouchableOpacity
            style={StyleSheet.container}
            onPress={handleNavigate}
            >
            <ImageBackground
                source={{ uri: `http://192.168.15.7:1337${data?.attributes?.cover?.data?.attributes?.url}` }}
                style={styles.cover}
                resizeMode="cover"
                blurRadius={3}
                imageStyle={{ borderRadius: 6, opacity: 0.4 }}
            >
                <Text style={styles.title} numberOfLines={1}>
                    {data?.attributes?.title}
                </Text>
            </ImageBackground>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        marginRight:8,
    },
    cover:{
        borderRadius: 4,
        width: WIDTH -60,
        height: 100,
        justifyContent: 'flex-end',
        backgroundColor: '#262330'
    },
    title:{
        fontSize: 17,
        fontWeight: 'bold',
        color: '#FFF',
        paddingVertical: 8,
        paddingHorizontal: 12,
        textShadowColor:'#121212',
        textShadowOffset: { width: 2, height:1 },
        textShadowRadius: 8,
    }
})