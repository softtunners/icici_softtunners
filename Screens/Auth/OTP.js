import { Text, View, ImageBackground, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import GlobalStyling, { colorsProp } from '../../Styling/GlobalStyling'
import { Box, TextInput, } from '@react-native-material/core';
import OtpPage from './OTPGenerate';


function OTPScreen({ navigation }) {
    return (
        <ImageBackground style={[GlobalStyling.fitContainer]} source={require('../../Assets/2.png')}>
            <View style={[GlobalStyling.loginGroup]}>
                <Text style={[GlobalStyling.heading_xl, GlobalStyling.loginGroup.loginText]}>Verify</Text>
                <Box style={{ display: 'flex', flexDirection: 'row', marginTop:20 }}>
                    <Text style={[GlobalStyling.normal_text,]}>OTP has been sent to </Text>
                    <TouchableOpacity style={{ display: 'flex', flexDirection: 'row' }}>
                        <Text style={[GlobalStyling.linkTextDrak]}>8879963368</Text>
                        <Image style={[GlobalStyling.iconImage_sm]} source={require('../../Assets/icon/edit.png')} />
                    </TouchableOpacity>
                </Box>
                <OtpPage />
                <Text style={[GlobalStyling.heading_xs, { textAlign: 'center' }]}>Didn't receive OTP yet?  <Text style={[GlobalStyling.link.linkText]}>Respond OTP</Text></Text>
                <TouchableOpacity style={[GlobalStyling.blockButton, GlobalStyling.defaultButton]} onPress={() => navigation.navigate('OnboardingScreen')}>
                    <Text style={[GlobalStyling.defaultButton.loginButton]}>
                        Verify
                    </Text>
                </TouchableOpacity>
            </View>
        </ImageBackground>
    )
}

export default OTPScreen