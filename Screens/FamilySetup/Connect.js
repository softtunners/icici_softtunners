import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { Stack, Button } from '@react-native-material/core'
import GlobalStyling, { supportStyles } from '../../Styling/GlobalStyling'
import Color from '../../Styling/Color'

const Connect = ({navigation}) => {
    return (
        <View style={[GlobalStyling.fitContainer, GlobalStyling.containerFluid, { backgroundColor: Color.dark }, styles.darkScreen]}>
            <Image style={[GlobalStyling.iconImage_xl, styles.darkIcon]} source={require('../../Assets/icon/walking.png')} />
            <Text style={[GlobalStyling.heading_xl, supportStyles.textCenter, { color: Color.white }]}>Track Your Activities</Text>
            <View style={styles.trackInfo}>
                <Text style={{ textAlign: 'center', color:Color.white }}>
                    Lorem ipsum odor amet, consectetuer adipiscing elit. Mus lacinia euismod. Mi et felis. {'\n'}  {'\n'}
                    Lorem ipsum odor amet, consectetuer adipiscing elit. Torquent feugiat consectetur felis. Convallis sodales phasellus fusce. {'\n'}  {'\n'}
                    Lorem ipsum odor amet, consectetuer adipiscing elit. Ante hac nulla nisi. {'\n'}  {'\n'}
                    Lorem ipsum odor amet, consectetuer adipiscing elit. Mus lacinia euismod. Mi et felis.pjainnain  Lorem ipsum odor amet, consectetuer adipiscing elit. Mus lacinia euismod. Mi et felis.pjainnain
                </Text>
                <Stack style={{ width: '100%' }} direction='row'>
                    <Stack style={[GlobalStyling.fitBox2]} direction='column'>
                        <Image style={[GlobalStyling.iconImage_xl]} source={require('../../Assets/icon/walking.png')} />
                    </Stack>
                    <Stack style={[GlobalStyling.fitBox2]} direction='column'>
                        <Image style={[GlobalStyling.iconImage_xl]} source={require('../../Assets/icon/sliding.png')} />
                    </Stack>
                    <Stack style={[GlobalStyling.fitBox2]} direction='column'>
                        <Image style={[GlobalStyling.iconImage_xl]} source={require('../../Assets/icon/cycling.png')} />
                    </Stack>
                </Stack>
            </View>
            <View style={[GlobalStyling.bottomClicks]}>
                <Stack style={{ width: '100%', justifyContent: 'space-between', alignItems:'center' }} direction='row'>
                    <Stack direction='column'>
                        <TouchableOpacity style={[GlobalStyling.link2]} onPress={()=> navigation.goBack()}>
                            <Text style={[GlobalStyling.link2.linkText, {color:Color.blue}]}> How It Works ? </Text>
                        </TouchableOpacity>
                    </Stack>
                    <Stack direction='column'>
                        <Button title="Turn On" style={{backgroundColor:Color.blue}} />
                    </Stack>
                </Stack>
            </View>
        </View>
    )
}

export default Connect

const styles = StyleSheet.create({
    darkScreen: {
        alignItems: 'center'
    },
    darkIcon: {
        marginBottom: 20,
        marginTop: 20,
    },
    trackInfo: {
        padding: 10
    },
})