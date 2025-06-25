import React from 'react';
import {view, Text, StyleSheet, Image} from 'react-native';

const SplashScreen = () => {
    <View style={styles.container}>
        <Image source={require('C:\Users\erick\OneDrive\Documentos\GitHub\PM193\my-blank\src\assets\Cadillac WP.jpg')}
    style={styles.logo}
    resizeMode='contain'
    ></Image>
    <Text style = {styles.tittle}>
        Bienvenido a la App
        </Text>
    </View>
};

export default SplashScreen

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor:'#222831',
        justifyContent:'center',
        alignItems:'center',
    },
    logo: {
        width:200,
        height:200
    },
    title:{
        marginTop:20,
        color:'#'
    }
})