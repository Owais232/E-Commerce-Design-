import React from "react";
import { StyleSheet, Text, View } from "react-native";




const Settingsscreen=({navigation})=>{
    React.useLayoutEffect(() => {
        navigation.setOptions({ headerShown: false });
    }, [navigation]);
    return(
        <View>
            <Text style={Style.container}>
                Setting screen
            </Text>
        </View>
    );
};

const Style=StyleSheet.create({
    container: {
        textAlign:'center',
        color:'black',
        justifyContent:'center'
    }

});

export default Settingsscreen;