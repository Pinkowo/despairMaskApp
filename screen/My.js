import React from 'react';
import { StyleSheet,View, FlatList } from 'react-native';

import newsData from "../json/news.json";
import NewsDetail from "../useless/NewsDetail.js";

const News = ({navigation}) => {
    const footer =() => {
        return (<View style={{height:15}}></View>)
    };
    return(
        <View style={{flex:1,backgroundColor:"#fff"}}>
            <FlatList
            ListFooterComponent={footer}
            data={newsData}
            renderItem={({item}) => 
            <NewsDetail
                news={item}
                navigation={navigation}
                />}
                keyExtractor={(item,index) => index.toString()}
            />
        </View>
    );
};
export default News;