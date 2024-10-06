import {ScreenHooks} from '@/src/sharedHooks/hookscreen';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { Text, View } from 'react-native';
import Home from './components/home';

 
const Drawer = createDrawerNavigator()
 
function  App() { 
    return (  
      //componente para deixar o texto enquadrado no celular
       <NavigationContainer>
        <Drawer.Navigator initialRouteName="Home">
          {ScreenHooks({name:'Home', icon:'home-outline',  titulo:'Home', component:Home })}  
        </Drawer.Navigator>
       </NavigationContainer>
      
    );
  }


export default App;
