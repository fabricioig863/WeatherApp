import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

import Home from '../screens/Home';
import Search from '../screens/Search';
import NextDay from "../screens/NextDay";
import FavoritesCity from "../screens/FavoritesCity";
import DetailsFavorite from "../screens/DetailsFavorite";

const Drawer = createDrawerNavigator();

export default function AppRoutes() {
    return (
        <Drawer.Navigator 
            initialRouteName="Home"
            screenOptions={{
                headerShown: false,
            }}
        >
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
            <Drawer.Screen
                name="FavoriteCity"
                component={FavoritesCity}
                options={{ title: "Cidades Favoritas" }}
            />
            <Drawer.Screen
                name="NextDay"
                component={NextDay}
            />
            <Drawer.Screen
                name="DetailsFavorite"
                component={DetailsFavorite}
                options={{ title: "Detalhes da cidade"}}
            />
        </Drawer.Navigator>
    )
}