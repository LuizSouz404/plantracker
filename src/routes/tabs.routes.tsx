import React from 'react';
import { Platform } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialIcons } from '@expo/vector-icons';

import { PlantSelect } from '../pages/PlantSelect';
import { MyPlants } from '../pages/MyPlants';

import colors from '../styles/colors';

const AppTab = createBottomTabNavigator();

export const AuthRoutes = () => {
  return (
    <AppTab.Navigator
        screenOptions={{
            headerShown: false,
            tabBarStyle: {
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center'
            },
            tabBarLabelPosition: 'beside-icon',
            tabBarInactiveTintColor: '#AAB2AD',
            tabBarActiveTintColor: colors.green,

            headerStyle: {
                paddingVertical: Platform.OS === 'ios' ? 20 : 0,
                height: 60,
                borderTopWidth: 0,
                elevation: 0,
                shadowOpacity: 0,
            }
        }}
    >
        <AppTab.Screen 
            name="Nova Planta"
            component={PlantSelect}
            options={{
                tabBarIcon: (({ size, color }: {size: number, color: string}) => (
                    <MaterialIcons 
                        name="add-circle-outline"
                        size={size}
                        color={color}
                    />
                ))
            }}
        />

        <AppTab.Screen 
            name="Minhas Plantas"
            component={MyPlants}
            options={{
                tabBarIcon: (({ size, color }: {size: number, color: string}) => (
                    <MaterialIcons 
                        name="format-list-bulleted"
                        size={size}
                        color={color}
                    />
                ))
            }}
        />
    </AppTab.Navigator>
  );
}