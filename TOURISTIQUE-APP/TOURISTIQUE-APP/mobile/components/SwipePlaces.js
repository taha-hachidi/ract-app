import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, View, Image, Text, ImageBackground } from "react-native";
import Swiper from "react-native-swiper";

export default function SwipePlaces (){
    return(
      <View >
        <View style={styles.container}>
            <StatusBar style="auto"/>
            <Swiper
                autoplay
                showsButtons={false}
            >
                <Image
                    source={require("../assets/appart1.jpg")}
                    resizeMode="cover"
                    style={styles.img}
                />
                <Image
                    source={require("../assets/appart4.png")}
                    resizeMode="cover"
                    style={styles.img}
                />
                <Image
                    source={require("../assets/appart2.png")}
                    resizeMode="cover"
                    style={styles.img}
                />
                <Image
                    source={require("../assets/appart3.png")}
                    resizeMode="cover"
                    style={styles.img}
                />
            </Swiper>
        </View>
      </View>
    );
}
const styles = StyleSheet.create({
    container: {
        
        justifyContent: 'center',
        alignItems:'center',
        margin : 5,
        height:230,
        marginTop:"2%",
    },
    img: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        width:400,
        
    }

})