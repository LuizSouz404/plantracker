import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { AuthRoutes } from './tabs.routes';

import { PlantSave } from '@/pages/PlantSave';
import { Confirmation } from '@/pages/Confirmation';

import colors from '../styles/colors';

const StackRoutes = createStackNavigator();

export const PrivateRoutes = () => (
    <StackRoutes.Navigator
        screenOptions={{
            headerShown: false,
            cardStyle: {
                backgroundColor: colors.white
            }
        }}
    >
        <StackRoutes.Screen 
            name="PlantSelect"
            component={AuthRoutes}
        />
        <StackRoutes.Screen 
            name="MyPlants"
            component={AuthRoutes}
        />
        <StackRoutes.Screen 
            name="PlantSave"
            component={PlantSave}
        />
        <StackRoutes.Screen 
            name="Confirmation"
            component={Confirmation}
        />
    </StackRoutes.Navigator>
)