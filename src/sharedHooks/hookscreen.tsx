import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Ionicons } from '@expo/vector-icons';
const Drawer = createDrawerNavigator();

export function ScreenHooks(params: { name: string, icon: string,  titulo: string, component: React.ComponentType<any> }) {
    return (

        <Drawer.Screen name={params.name} component={params.component}
            options={{
                drawerIcon: ({ focused }: any) => (
                    <Ionicons name={params.icon as any} size={24} color={focused ? '#1C80FF' : '#000'} />
                ),
                drawerLabel: params.titulo,
                title: params.titulo,

            }} />


    )
}
