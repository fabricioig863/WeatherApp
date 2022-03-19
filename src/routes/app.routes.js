import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

import Home from '../screens/Home';
import Search from '../screens/Search';

const Drawer = createDrawerNavigator();

export default function AppRoutes() {
    return(
     <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen
            name="Home"
            component={Home} 
            options={{
             title: 'Minha Cidade'
          }}
          />
        <Drawer.Screen 
            name="Search" 
            component={Search} 
            options={{
               title: 'Procurar'
            }}
            />
     </Drawer.Navigator>
    )
}