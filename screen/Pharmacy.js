import React from 'react';
import { StyleSheet,View, FlatList, TouchableOpacity,Image,Button,Text } from 'react-native';

import store from "../json/store.json";
import pics from "../json/pics.json";
import PharmacyDetail from "../detail/PharmacyDetail.js";

const Pharmacy = ({navigation}) => {
    const footer =() => {
        return (
            <View style={{marginTop:15}}></View>
        )
    };
    return(
        <View style={{flex:1,backgroundColor:"#FFE7E7"}}>
            <FlatList
            ListFooterComponent={footer}
            data={store}
            renderItem={({item}) => 
            <PharmacyDetail
                store={item}
                navigation={navigation}
                />}
                keyExtractor={(item,index) => index.toString()}
            />
            <TouchableOpacity
                onPress={() => console.log("yee")}
                style={styles.btn}
                >
                <Image source={{uri: pics.uri}} style={styles.pen}/>
            </TouchableOpacity>
        </View>
    );
};
const styles = StyleSheet.create({
    btn:{
        alignItems:'center',
        justifyContent:'center',
        width:70,
        position: 'absolute',                                          
        bottom: 30,                                                    
        right: 30,
        height:70,
        borderRadius:100,
        elevation: 5,
    },
    pen:{
        width:70,
        height:70,
    }
});
export default Pharmacy;