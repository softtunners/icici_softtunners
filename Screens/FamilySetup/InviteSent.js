import { StyleSheet, Text, View, Image, Dimensions, TouchableOpacity } from 'react-native'
import React from 'react'
import GlobalStyling, { windowWidth, supportStyles } from '../../Styling/GlobalStyling'
import { Box, Button, Stack, TextInput } from '@react-native-material/core'
import Color from '../../Styling/Color'


const InviteSent = ({ navigation }) => {
    return (
        <View style={[GlobalStyling.fitContainer, GlobalStyling.containerFluid]}>
            <Box style={styles.headerPart}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Image style={[GlobalStyling.iconImage_l]} source={require('../../Assets/icon/back.png')} />
                </TouchableOpacity>
            </Box>
            <Image style={[GlobalStyling.imgFluid,]} source={require('../../Assets/5.png')} />
            <Text style={[GlobalStyling.heading_l, supportStyles.textCenter]}>Invite Has Been Sent</Text>

            <View>
                <Text style={[GlobalStyling.normal_text, supportStyles.textCenter]}>Lorem Ipsum</Text>
                <Stack style={{ width: '100%' }} direction='row'>
                    <Stack style={[GlobalStyling.fitBox]} direction='column'>
                        <Image style={[GlobalStyling.iconImage_l]} source={require('../../Assets/icon/heart.png')} />
                        <Text style={{ color: Color.dark }}>lorem ipsum dolar sit amet</Text>
                    </Stack>
                    <Stack style={[GlobalStyling.fitBox]} direction='column'>
                        <Image style={[GlobalStyling.iconImage_l]} source={require('../../Assets/icon/factory.png')} />
                        <Text style={{ color: Color.dark }}>lorem ipsum dolar sit amet</Text>
                    </Stack>
                    <Stack style={[GlobalStyling.fitBox, GlobalStyling.fitBox.last_child]} direction='column'>
                        <Image style={[GlobalStyling.iconImage_l]} source={require('../../Assets/icon/sticks.png')} />
                        <Text style={{ color: Color.dark }}>lorem ipsum dolar sit amet</Text>
                    </Stack>
                </Stack>

                <View style={styles.cardBox} backgroundColor={Color.white}>
                    <Text style={[GlobalStyling.inputBoxLabel, GlobalStyling.heading_sm]}>You Have 2 Invites</Text>
                    <Box>
                        <Text style={{ color: Color.dark }}>
                            Lorem ipsum odor amet, consectetuer adipiscing elit. Mus lacinia euismod. Mi et felis prac jnai. {'\n'}  {'\n'}
                        </Text>
                        <Text style={GlobalStyling.link.linkText}>See Invites</Text>
                    </Box>
                </View>
            </View>

            <View style={[GlobalStyling.bottomClicks]}>
                <Button style={[GlobalStyling.blockButton]} title="Setup My WyNFIT" onPress={() => navigation.navigate('Connect')} />
            </View>
        </View>
    )
}

export default InviteSent

const styles = StyleSheet.create({
    MainContainer: {
        width: windowWidth,
        // height: windowHeight,
    },
    ImagePos: {
        width: windowWidth,
        height: 300,
        top: 0,
        position: 'relative',
    },
    ViewHeading: {
        color: 'black'
    },
    fitContainer: {
        padding: 20,
        width: windowWidth,
    },
    card: {
        backgroundColor: 'white',
        width: '100%',
        height: 400
    },
    // Input Section Styling
    inputBox: {
        marginTop: 10,
        marginBottom: 10
    },

    StackBetween: {
        justifyContent: 'space-between'
    },

    inputField: {
        fontSize: 14,
        color: 'red',
        backgroundColor: '#ffffff00',
        height: 50,
        alignItems: 'center',
        padding: 0,
        margin: 0,
    },
    iconImageAction: {
        width: 100,
        height: 100,
    },
    cardBox: {
        width: '100%',
        padding: 10,
        borderRadius: 10,
        marginTop: 10,
    },
    actionHeading: {
        margin: 10,
        textAlign: 'center',
        color: Color.dark
    }
})