import React,{useState} from 'react';
import { StyleSheet, View, Image,Dimensions,Alert,TouchableOpacity,Text } from 'react-native';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';

import MyText from './MyText';

var deviceWidth = Dimensions.get('window').width;

const fetchFonts = () => {
    return Font.loadAsync({
    'NotoSansTC-Medium': require('../assets/fonts/NotoSansTC-Medium.otf'),
    });
   };

const PharmacyDetail =({store,navigation}) => {
    const [dataLoaded,setDataLoaded] = useState(false);
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
            <View style={styles.card2}>
                <View style={styles.padding}>
                <MyText style={styles.name}>{store.name}</MyText>
                    <View style={styles.firstLine}>                       
                        <Image source={{uri: store.uri}} style={styles.pic}/>
                        <View>
                            <MyText style={styles.time}>口罩領取時間</MyText>
                            <MyText>下午3:00</MyText>
                            <MyText>　  到</MyText>
                            <MyText>下午5:00</MyText>
                        </View>
                    </View>
                    <View>                       
                        <MyText style={styles.remark}>備註：{store.remark}</MyText>
                    </View>
                </View>
                <TouchableOpacity
                    onPress={()=>Alert.alert(store.name,
                    '營業時間：'+store.alertTimeWeek+'\n　　　　　'+store.alertTimeHour+'\n　　　　　'+store.alertClose
                    +'\n電話：'+store.alertPhone+'\n地址：'+store.alertAddress)}>
                        <View style={styles.alertLine}></View>
                        <View style={styles.alertBox}>
                            <Text style={styles.alertText}>查看詳情</Text>
                        </View>
                </TouchableOpacity>
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    card:{
        alignItems: 'center',
        marginTop:15,
    },
    card2:{
        backgroundColor:'#fff',
        borderRadius:20,borderWidth: 1,borderColor: '#fff',
        width:380,height:null
    },
    padding:{
        paddingTop:30,
        paddingRight:30,
        paddingLeft:30,
        paddingBottom:10
    },
    firstLine:{
        flexDirection:"row",
        justifyContent:"space-around",
        marginBottom:15
    },
    pic:{
        width:160,
        height:90,
    },
    rightBox:{
        height:100,
        width:null,
        //marginRight:30,
        //borderWidth: 1,borderColor: '#000'
    },
    
    name:{
        fontSize:20,
        color:"#595959",
        lineHeight:25,
        fontFamily:"NotoSansTC-Medium",
        height:40,
        marginLeft:20,
    },
    time:{
        fontSize:16,
        color:"#595959",
        fontFamily:"NotoSansTC-Medium",
        height:30,
        lineHeight:30,
        marginLeft:-25,
    },
    remark:{
        fontSize:16,
        color:"#9A4949",
        fontFamily:"NotoSansTC-Medium",
        height:30,
        lineHeight:30,
        marginLeft:20,
    },
    alertBox:{
        width:deviceWidth,
        alignItems: "center",
        //borderWidth: 1,borderColor: '#000'

    },
    alertLine:{
        width:380,
        height:2,
        borderTopWidth: 1,
        borderColor: '#ABABAB',
    },
    alertText:{
        color:"#595959",
        fontSize:14,
        fontFamily:"NotoSansTC-Medium",
        textAlign: "center",
        marginLeft:-40,
    }
});

export default PharmacyDetail;