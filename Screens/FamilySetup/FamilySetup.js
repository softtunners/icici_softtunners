import { Text, View, StyleSheet, Image, FlatList, TouchableOpacity } from 'react-native'
import React, { Component } from 'react'
import { Stack, TextInput, Box, Button } from "@react-native-material/core";
import { Actionsheet, useDisclose } from "native-base";
import GlobalStyling, { colorsProp, supportStyles } from '../../Styling/GlobalStyling';
import Color from '../../Styling/Color';


const FlatListAction = () => {

    const actionList = [
        {
            id: 'p1',
            iconImage: require('../../Assets/icon/heart.png'),
            actionListContent: 'It is a long established fact that a reader will be distracted by the readable'
        },
        {
            id: 'p2',
            iconImage: require('../../Assets/icon/tost.png'),
            actionListContent: 'It is a long established fact that a reader will be distracted by the readable content of a page'
        },
        {
            id: 'p3',
            iconImage: require('../../Assets/icon/comment.png'),
            actionListContent: 'It is a long established fact that a reader will be distracted by the'
        },
    ];
    return (
        <FlatList
            style={{ maxHeight: 160, marginBottom: 10 }}
            data={actionList}
            renderItem={({ item }) => {
                return (
                    <View style={[GlobalStyling.spaceAction]}>
                        <Stack style={[GlobalStyling.spaceAction.center]} direction='row'>
                            <Stack direction='column'>
                                <Image style={[GlobalStyling.iconImage]} source={item.iconImage} />
                            </Stack>
                            <Stack direction='column'>
                                <Text style={{ color: colorsProp.dark }}>{item.actionListContent}</Text>
                            </Stack>
                        </Stack>
                    </View>
                )
            }} />)
}





function ActionsheetView() {
    const {
        isOpen,
        onOpen,
        onClose
    } = useDisclose();
    return (
        <View>
            <TouchableOpacity style={[GlobalStyling.link]} onPress={onOpen}>
                <Text style={[GlobalStyling.link.linkText]}> How It Works ? </Text>
            </TouchableOpacity>

            <Actionsheet isOpen={isOpen} onClose={onClose}>
                <Actionsheet.Content backgroundColor={Color.body}>
                    <View style={styles.actionContainer}>
                        <Text style={[GlobalStyling.heading_sm, styles.actionHeading]}>Getting Started</Text>
                        <FlatListAction />
                        <View style={styles.cardBox} backgroundColor={Color.white}>
                            <Stack style={styles.StackBetween} direction='row'>
                                <Stack direction='column'>
                                    <Text style={[GlobalStyling.inputBoxLabel, GlobalStyling.heading_sm]}>How it works?</Text>
                                </Stack>
                                <Stack direction='column'>
                                    <Text style={GlobalStyling.link.linkText}>Detailed FAQ's</Text>
                                </Stack>
                            </Stack>
                            <Box>
                                <Text style={{ color: Color.dark, margin: 10 }}>
                                    1.Lorem ipsum odor amet, consectetuer adipiscing elit. Mus lacinia euismod. Mi et felis. {'\n'}  {'\n'}
                                    2.Lorem ipsum odor amet, consectetuer adipiscing elit. Torquent feugiat consectetur felis. Convallis sodales phasellus fusce. {'\n'}  {'\n'}
                                    3.Lorem ipsum odor amet, consectetuer adipiscing elit. Ante hac nulla nisi. {'\n'}  {'\n'}
                                    4.Lorem ipsum odor amet, consectetuer adipiscing elit. Mus lacinia euismod. Mi et felis.pjainnain
                                </Text>
                            </Box>
                        </View>
                    </View>
                    <View style={[GlobalStyling.bottomClicks2]}>
                        <Button style={[GlobalStyling.blockButton]} title="Okay" onPress={onClose} />
                    </View>
                </Actionsheet.Content>
            </Actionsheet>
        </View>
    );
}




function FamilySetup({ navigation }) {
    return (
        <View style={[GlobalStyling.fitContainer, GlobalStyling.containerFluid]}>
             <Box style={styles.headerPart}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Image style={[GlobalStyling.iconImage_l]} source={require('../../Assets/icon/back.png')} />
                </TouchableOpacity>
            </Box>
            <Image style={[GlobalStyling.imgFluid,]} source={require('../../Assets/5.png')} />
            <Text style={[GlobalStyling.heading_l, supportStyles.textCenter]}>Send Invite</Text>

            <Stack>
                <View style={styles.inputBox}>
                    <Stack style={styles.StackBetween} direction='row'>
                        <Stack direction='column'>
                            <Text style={[GlobalStyling.inputBoxLabel]}>Ashwin Sevak</Text>
                        </Stack>
                        <Stack direction='column'>
                            <Box style={GlobalStyling.adultBox}><Text style={GlobalStyling.adultBoxText}>Audult 1</Text></Box>
                        </Stack>
                    </Stack>
                    <TextInput inputContainerStyle={[GlobalStyling.loginTextinput.inputContainer]} style={[GlobalStyling.loginTextinput.inputContainer, styles.inputBox]} label='Mobile Number' variant="outlined" />
                </View>
                <View style={styles.inputBox}>
                    <Stack style={styles.StackBetween} direction='row'>
                        <Stack direction='column'>
                            <Text style={[GlobalStyling.normal_text]}>Prachi Jain</Text>
                        </Stack>
                        <Stack direction='column'>
                            <Box style={GlobalStyling.adultBox}><Text style={GlobalStyling.adultBoxText}>Audult 2</Text></Box>
                        </Stack>
                    </Stack>
                    <TextInput inputContainerStyle={[GlobalStyling.loginTextinput.inputContainer]} style={[GlobalStyling.loginTextinput.inputContainer, styles.inputBox]} label='Mobile Number' variant="outlined" />
                </View>
            </Stack>

            <View style={[GlobalStyling.bottomClicks]}>
                <ActionsheetView />
                <Button style={[GlobalStyling.blockButton]} title="Send Invite" onPress={() => navigation.navigate('InviteSent')} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    text: {
        color: colorsProp.primary
    },
    linkFS: {
        textDecorationColor: colorsProp.primary
    },
    btnColor: {
        backgroundColor: colorsProp.primary
    },
    inviteImage: {
        width: 260,
        margin: 0,
        padding: 0
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
        margin: 0
    },
    actionHeading: {
        margin: 10,
        textAlign: 'center',
        color: Color.dark
    }
})

export default FamilySetup