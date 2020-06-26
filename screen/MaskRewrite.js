import React,{useState} from 'react';
import { StyleSheet, Text, View, Image,Dimensions,TouchableOpacity,TextInput } from 'react-native';
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

const MaskRewrite =({sth,navigation}) => {
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
            <MyText style={[styles.text,{fontSize:16}]}>新增/修改口罩</MyText>
            <View style={styles.pinkCard}>
                <View style={styles.buttonChoose}>
                    <TouchableOpacity
                        onPress={() => setVisible(true)}
                        style={styles.circleBTN}
                        >
                        <Image source={{uri: pics.adult}} style={styles.size}/>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => setVisible(true)}
                        style={styles.circleBTN}
                        >
                        <Image source={{uri: pics.child}} style={styles.size}/>
                    </TouchableOpacity>
                    <View style={{width:15}}></View>
                    <TouchableOpacity
                        onPress={() => setVisible(true)}
                        style={styles.rectangleBTN}
                        >
                        <MyText style={styles.text}>網路購買</MyText>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => setVisible(true)}
                        style={styles.rectangleBTN}
                        >
                        <MyText style={styles.text}>超商購買</MyText>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => setVisible(true)}
                        style={styles.rectangleBTN}
                        >
                        <MyText style={styles.text}>藥局購買</MyText>
                    </TouchableOpacity>
                </View>
                <View style={styles.buttonChoose}>
                    <TouchableOpacity
                        onPress={() => setVisible(true)}
                        style={[styles.colorBTN,{backgroundColor:"#FFE7E7"}]}
                        >
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => setVisible(true)}
                        style={[styles.colorBTN,{backgroundColor:"#FFDFB0"}]}
                        >
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => setVisible(true)}
                        style={[styles.colorBTN,{backgroundColor:"#FFF7CF"}]}
                        >
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => setVisible(true)}
                        style={[styles.colorBTN,{backgroundColor:"#C0F1A2"}]}
                        >
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => setVisible(true)}
                        style={[styles.colorBTN,{backgroundColor:"#C7EDFF"}]}
                        >
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => setVisible(true)}
                        style={[styles.colorBTN,{backgroundColor:"#E7D0FF"}]}
                        >
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => setVisible(true)}
                        style={[styles.colorBTN,{backgroundColor:"#D1D1D1"}]}
                        >
                    </TouchableOpacity>
                </View>
            </View>
            <View>
                <View style={styles.input}>
                    <MyText style={[styles.text,{fontSize:14}]}>名稱　　</MyText>
                    <TextInput
                        style={{height: 40}}
                        onChangeText={text => onChangeText(text)}
                        value={value}
                        />
                </View>
                <View style={styles.input}>
                    <MyText style={[styles.text,{fontSize:14}]}>上次購買日期　　</MyText>
                    <TextInput
                        style={{height: 40}}
                        onChangeText={text => onChangeText(text)}
                        value={value}
                        />
                    <MyText style={[styles.text,{fontSize:14}]}>年</MyText>
                    <TextInput
                        style={{height: 40}}
                        onChangeText={text => onChangeText(text)}
                        value={value}
                        />
                    <MyText style={[styles.text,{fontSize:14}]}>月</MyText>
                    <TextInput
                        style={{height: 40}}
                        onChangeText={text => onChangeText(text)}
                        value={value}
                        />
                    <MyText style={[styles.text,{fontSize:14}]}>日</MyText>
                    <Image source={{uri: pics.date}} style={styles.date}/>
                </View>
            </View>
            <View style={{height:100}}></View>
            <View style={styles.check}>
                <TouchableOpacity
                    onPress={() => setVisible(true)}
                    style={[styles.checkBTN,{backgroundColor:"#EEEEEE"}]}
                    >
                    <MyText style={[styles.text,{fontSize:16}]}>取消</MyText>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => setVisible(true)}
                    style={[styles.checkBTN,{backgroundColor:"#FFE7E7"}]}
                    >
                    <MyText style={[styles.text,{fontSize:16}]}>確認</MyText>
                </TouchableOpacity>
            </View>
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
        fontSize:12,
    },
    pinkCard:{
        backgroundColor:"#FFE7E7",
        width:deviceWidth,
        height:120,
        alignItems: 'center',
        justifyContent:'center',
    },
    buttonChoose:{
        flexDirection:"row",
        alignItems:'center',
        justifyContent:'center',
    },
    circleBTN:{
        alignItems:'center',
        justifyContent:'center',
        width:40,
        height:40,
        borderRadius:100,
        backgroundColor:"#fff",
        margin:5
    },
    size:{
        width:40,
        height:40,
    },
    rectangleBTN:{
        alignItems:'center',
        justifyContent:'center',
        width:60,
        height:32,
        backgroundColor:"#fff",
        margin:5,
    },
    colorBTN:{
        alignItems:'center',
        justifyContent:'center',
        width:40,
        height:40,
        borderRadius:10,
        borderColor:"#B36D69",
        borderWidth:1,
        margin:5
    },
    input:{
        height: 40, width:270,
        flexDirection:"row",
        borderBottomColor: '#ABABAB', 
        borderBottomWidth: 1 ,
        marginTop:20
    },
    date:{
        width:25,
        height:30,
        marginTop:5,
        marginLeft:20
    },
    check:{
        width:270,
        flexDirection:"row",
        alignItems:'center',
        justifyContent:'space-between',
        marginBottom:10
    },
    checkBTN:{
        alignItems:'center',
        justifyContent:'center',
        width:70,
        height:32,
        margin:5,
        borderRadius:10,
    }
});

export default MaskRewrite;