import * as React from 'react';
import { Text, View, StyleSheet,Image,AsyncStorage,TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import {CardStyleInterpolators,createStackNavigator}from '@react-navigation/stack';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { SplashScreen } from 'expo';

import Mask from './screen/Mask';
import Pharmacy from './screen/Pharmacy';
import MaskRewrite from './screen/MaskRewrite';
import MaskChange from './data/MaskChange';
import My from './screen/My'
import pics from "./json/pics.json";

const Tab = createMaterialTopTabNavigator();
const PERSISTENCE_KEY = "ALBUMS_NAVIGATION_STATE";
const Stack = createStackNavigator();


function TheHeader({navigation}){
  return(
    <View style={styles.header}>
      <Text style={{ fontSize: 20, textAlign: "center",marginBottom:-20,color:"#B36D69"}}>
        口罩日記 Mask Diary
      </Text>
      </View>
  );
}

const App = () => {
  const [isLoadingComplete, setLoadingComplete] = React.useState(false);
  const [initialNavigationState, setInitialNavigationState] = React.useState();
  React.useEffect(() => {
    async function loadResourcesAndDataAsync() {
      try {
        SplashScreen.preventAutoHide();
        const savedStateString = await AsyncStorage.getItem(PERSISTENCE_KEY);
        const state = JSON.parse(savedStateString);
        setInitialNavigationState(state);
      } catch (e) {
        // We might want to provide this error information to an error reporting service
        console.warn(e);
      } finally {
        setLoadingComplete(true);
        SplashScreen.hide();
      }
    }
    loadResourcesAndDataAsync();
  }, []);

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      
      <NavigationContainer
        initialState={initialNavigationState}
        onStateChange={(state)=>
          AsyncStorage.setItem(PERSISTENCE_KEY, JSON.stringify(state))
        }
      >

        <TheHeader/>

        <Tab.Navigator
          tabBarOptions={{
            activeTintColor: '#B36D69',
            labelStyle: { fontSize: 20 },
            indicatorStyle :{
              backgroundColor:'#B36D69'
            }    
          }}
        >
          <Tab.Screen name="口罩" component={MaskStack} />
          <Tab.Screen name="藥局" component={Pharmacy} />
          <Tab.Screen name="我的" component={My} />
        </Tab.Navigator>

      </NavigationContainer>
    );
  }
}

/*const MaskStack = () => {
  return (
   <Stack.Navigator
   screenOptions={{
    cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
  }}>
     
        <Stack.Screen 
          name="口罩" 
          component={Mask} 
          options={{

          }}
        />
         <Stack.Screen 
          name="修改" 
          component={My} 
          options={{

          }}
        />
        </Stack.Navigator>
  );
}*/

const styles = StyleSheet.create({
  header:{
    height:80,
    backgroundColor:"#FFE7E7",
    justifyContent:'center',
  },
  profile:{
    height:45,
    width:45,
    marginLeft:20,
    marginTop:15
  }
});

export default App;