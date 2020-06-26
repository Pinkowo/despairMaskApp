import React,{ useState }  from 'react';
import { StyleSheet,View, FlatList, TouchableOpacity,Image,Text } from 'react-native';
import { Backdrop } from "react-native-backdrop";

import maskData from "../json/mask.json";
import pics from "../json/pics.json";
import MaskDetail from "../detail/MaskDetail.js";
import BackDrop from "./BackDrop.js";
import MaskChange from "../data/MaskChange";


const Mask = ({navigation}) => {
    const [visible, setVisible] = useState(false);
    const handleOpen = () => {
        setVisible(true);
    };
    const handleClose = () => {
        setVisible(false);
    };
    const footer =() => {
        return (<View style={{height:120}}></View>)
    };
    
    return(
        <View style={{flex:1,backgroundColor:"#fff"}}>
            <FlatList
            ListFooterComponent={footer}
            data={maskData}
            renderItem={({item}) => 
            <TouchableOpacity
                    onLongPress={() => setVisible(true)}
                >
                <MaskDetail
                    mask={item}
                    navigation={navigation}
                    />
            </TouchableOpacity>
                }
                keyExtractor={(item,index) => index.toString()}
            />
            <TouchableOpacity
                onPress={() => setVisible(true)} //改成跳出stack
                style={styles.btn}
                >
                <Image source={{uri: pics.uri}} style={styles.pen}/>
            </TouchableOpacity>

            <Backdrop
                visible={visible}
                handleOpen={handleOpen}
                handleClose={handleClose}
                onClose={() => {}}
                swipeConfig={{
                velocityThreshold: 0.3,
                directionalOffsetThreshold: 80,
                }}
                animationConfig={{
                speed: 10,
                bounciness: 4,
                }}
                overlayColor="rgba(0,0,0,0.32)"
                backdropStyle={{
                backgroundColor: '#fff',
                }}>

                <BackDrop />
            </Backdrop>
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
export default Mask;