import { Text, View, ImageBackground, StyleSheet, Dimensions, TouchableOpacity } from 'react-native'
import React from 'react'
import GlobalStyling, { colorsProp } from '../../Styling/GlobalStyling'
import { TextInput } from '@react-native-material/core';



const LoginInput = () => {
    const [text, setText] = React.useState("");

    return (
        <TextInput style={[GlobalStyling.loginTextinput]}
            label="Mobile Number*"
            value={text}
            onChangeText={text => setText(text)}
            variant="outlined"
            inputContainerStyle={[GlobalStyling.loginTextinput.inputContainer]}
        />
    )
}



function Login({navigation}) {
    return (
        <ImageBackground style={[GlobalStyling.fitContainer]} source={require('../../Assets/2.png')}>
            <View style={[GlobalStyling.loginGroup]}>
                <Text style={[GlobalStyling.heading_xl,GlobalStyling.loginGroup.loginText]}>Login</Text>
                <LoginInput />
                <TouchableOpacity style={[GlobalStyling.blockButton,GlobalStyling.defaultButton]} onPress={()=>navigation.navigate('OTPScreen')}>
                    <Text style={[GlobalStyling.defaultButton.loginButton]}>
                        Request OTP
                    </Text>
                </TouchableOpacity>
            </View>
        </ImageBackground>
    )
}

export default Login