import React,{useState} from 'react';
import { StyleSheet, Text, View, Image,Dimensions,TouchableHighlight,TextInput,Alert } from 'react-native';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';

import MyText from '../detail/MyText';
import pics from "../json/pics.json";

var deviceWidth = Dimensions.get('window').width;

const fetchFonts = () => {
    return Font.loadAsync({
    'NotoSansTC-Medium': require('../assets/fonts/NotoSansTC-Medium.otf'),
    });
   };

const BackDrop =({sth,navigation}) => {
    const [dataLoaded,setDataLoaded] = useState(false);
    const [ visible,setVisible ] = useState(false);
    const [value, onChangeText] = React.useState('');
    if(!dataLoaded){
        return(
            <AppLoading
                startAsync={fetchFonts}
                onFinish={()=>setDataLoaded(true)}    
            />
        );
    }
    return(
        <View style={styles.card}>
            <TouchableHighlight
                onPress={() => console.log(">>>")}
                underlayColor="#FFE7E7"
                style={styles.btn}
                >
                    <MyText style={styles.text}>修改</MyText>
            </TouchableHighlight>
            <TouchableHighlight
                onPress={() => setVisible(true)}
                underlayColor="#FFE7E7"
                style={styles.btn}
                >
                    <MyText style={[styles.text,{color:"#B36D69"}]}>刪除</MyText>
            </TouchableHighlight>
        </View>
    )
};

const styles = StyleSheet.create({
    card:{
        alignItems: 'center',
    },
    text:{
        fontFamily:"NotoSansTC-Medium",
        color:"#595959",
        fontSize:20,

    },
    btn:{
        width:400,
        alignItems:'center',
    },
});

export default BackDrop;