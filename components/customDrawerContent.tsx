import { View, Text, Pressable, Image, StyleSheet } from 'react-native'
import React from 'react'
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { useNavigation } from 'expo-router';
import { DrawerActions } from '@react-navigation/native';
//import { images } from "../constants";
//import header from "@/assets/images/drawer-header.jpg";
import Ionicons from '@expo/vector-icons/Ionicons';

export default function CustomDrawerContent(props:any) {

    const {bottom} = useSafeAreaInsets();
    const navigation = useNavigation();

    const closeDrawer = ()=>{
      console.log("close app")
      //navigation.dispatch(DrawerActions.closeDrawer())
      //throw {};
      alert('Выход из приложения')

    }
  return (
    <View style={{flex: 1, padding: 0}}>
      <View style={{ paddingLeft: 0}}>
            <Image
              style={{height: 215, width: '100%',  marginBottom: 15}}
              source={require('@/assets/images/drawer-header.jpg')}
              resizeMode="cover"
            />
        </View>
      <DrawerContentScrollView {...props} scrollEnabled={false} style={{padding: 0}}>  
        <DrawerItemList {...props} />
      </DrawerContentScrollView>

      <Pressable onPress={closeDrawer} style={{padding: 20, paddingBottom: bottom+10}}>
        <View style={styles.menu}>
          {/* <Image source={require('./../assets/icons/eye.png')}  style={{ width: 25, height: 25, }} /> */}
          <Ionicons name='exit-outline' size={25} />
          <Text>Выход</Text>
        </View>
        
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  menu: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },

})