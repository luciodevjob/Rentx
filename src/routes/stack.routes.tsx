import React from 'react';
import {createStackNavigator} from '@react-navigation/stack'
import { Home } from '../screens/Home';
import { CarDetail } from '../screens/CarDetail';
import { Scheduling } from '../screens/Scheduling';
import { SchedulingDetail } from '../screens/SchedulingDetail';
import { SchedulingComplete } from '../screens/SchedulingComplete';

const {Navigator, Screen} = createStackNavigator();

export function StackRoutes() {
    return(
        <Navigator  
        screenOptions={{
            headerShown: false,
            }}>
            <Screen
                name="Home"
                component={Home}
            />
            <Screen
                name="CarDetail"
                component={CarDetail}
            />
            <Screen
                name="Scheduling"
                component={Scheduling}
            />
            <Screen
                name="SchedulingDetail"
                component={SchedulingDetail}
            />
            <Screen
                name="SchedulingComplete"
                component={SchedulingComplete}
            />
        </Navigator>
    )
}
