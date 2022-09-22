import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import FamilySetup from './FamilySetup/FamilySetup';
import OnboardingScreen from './OnBoarding/OnBoardingSlides';
import Login from './Auth/Login';
import InviteSent from './FamilySetup/InviteSent';
import SetUpWinFit from './FamilySetup/SetUpWinFit';
import Connect from './FamilySetup/Connect';
import ConnectMain from './FamilySetup/ConnectMain';
import OTPScreen from './Auth/OTP';

const Stack = createStackNavigator();

const MainRoute = () =>{
    return ( 
        <Stack.Navigator screenOptions={{headerShown: false}} initialRouteName='Login'>
            <Stack.Screen name='Login' component={Login} />
            <Stack.Screen name="OnboardingScreen" component={OnboardingScreen}/>
            <Stack.Screen name="FamilySetup" component={FamilySetup} />
            <Stack.Screen name="InviteSent" component={InviteSent} />
            <Stack.Screen name="SetUpWinFit" component={SetUpWinFit} />
            <Stack.Screen name="Connect" component={Connect} />
            <Stack.Screen name="OTPScreen" component={OTPScreen} />
            {/* <Stack.Screen name="ConnectMain" component={ConnectMain} /> */}
        </Stack.Navigator>
    )
}

export default MainRoute 