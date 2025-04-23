import { Stack } from "expo-router";
import { Drawer } from 'expo-router/drawer';
import CustomDrawerContent from '../../components/customDrawerContent';
import Ionicons from '@expo/vector-icons/Ionicons';
import { Image, View } from 'react-native'
import { DrawerToggleButton } from "@react-navigation/drawer";
import { GestureHandlerRootView } from "react-native-gesture-handler";

export default function DrawerLayout() {
  return (
    <GestureHandlerRootView style={{flex: 1}}>
        <Drawer
            screenOptions={{
                headerShown: false,
                drawerLabelStyle: {
                    marginLeft: 5
                },
                swipeEdgeWidth : 0,

                drawerContentStyle: {
                    backgroundColor: '#f3f3f3',
                },
                drawerStyle: {
                    backgroundColor: '#f3f3f3',
                },

                drawerActiveBackgroundColor: '#5363df',
                drawerActiveTintColor: '#fff',
                drawerInactiveTintColor: 'black',
                drawerHideStatusBarOnOpen: false,
            }}
            drawerContent={CustomDrawerContent}
        >

            <Drawer.Screen
                name="(tabs)"
                options={{
                    drawerLabel: 'Главная',
                    title: 'Главная',
                    drawerIcon: ({size, color})=>(
                        <Ionicons name='home-outline' size={size} color={color} />
                        //<Image source={require('../../assets/icons/eye.png')}  style={{ width: 25, height: 25, }} />
                    )

                }}
            />
            
        </Drawer> 
    </GestureHandlerRootView>
    
  );
}
