import { StyleSheet, Text, View, Image, ScrollView, FlatList } from 'react-native'
import React from 'react'
import { Button, Stack, Box } from '@react-native-material/core'
import { ImageBackground } from 'react-native'
import Color from '../../Styling/Color'
import GlobalStyling, { supportStyles, windowWidth } from '../../Styling/GlobalStyling'
import { TouchableOpacity } from 'react-native-gesture-handler'


const SlideCard = () => {
    const slideCardList = [
        {
            id: 'p1',
            iconImage: require('../../Assets/cards/Portfolio.png'),
            actionListContent: 'Stay Consisitant, inactivity can cost you your earned points'
        },
        {
            id: 'p2',
            iconImage: require('../../Assets/cards/Portfolio.png'),
            actionListContent: 'It is a long established fact that a reader will be distracted by the readable content of a page'
        },
        {
            id: 'p3',
            iconImage: require('../../Assets/cards/Portfolio.png'),
            actionListContent: 'It is a long established fact that a reader will be distracted by the readable content of a page'
        },
    ];
    return (
        <FlatList
            horizontal
            data={slideCardList}
            renderItem={({ item }) => {
                return (
                    <View style={styles.sliderView}>
                        <ImageBackground imageStyle={{borderRadius:20}} style={styles.slideCard} resizeMode='contain' source={item.iconImage}>
                            <Text style={[GlobalStyling.BlockCenter]}>{item.actionListContent}</Text>
                        </ImageBackground>
                    </View>
                )
            }}
        />
    )
}

const SetUpWinFit = ({ navigation }) => {
    return (
        <View style={[GlobalStyling.fitContainer, GlobalStyling.containerFluid]}>
            <Box style={styles.headerPart}>
                <TouchableOpacity onPress={()=>navigation.navigate('FamilySetup')}>
                    <Image style={[GlobalStyling.iconImage_l]} source={require('../../Assets/icon/close.png')} />
                </TouchableOpacity>
            </Box>

            <View style={styles.googleFit}>
                <Image style={styles.googleIcon} source={require('../../Assets/google_fit.png')} />
                <Text style={[GlobalStyling.heading_sm, { marginBottom: 2 }]}>Google Fit</Text>
                <Text style={[GlobalStyling.normal_text, supportStyles.textCenter]}>By Google</Text>
            </View>
            <View>
                <Text style={[GlobalStyling.normal_text, supportStyles.textCenter]}> Sync your fitness Activites with your wyn Fit</Text>
                <View style={[{ marginTop: 30 }]}>
                    <Text style={[GlobalStyling.heading_sm, supportStyles.textCenter, { color: Color.dark }]}>Activity Bucket</Text>
                    <Stack style={{ width: '100%' }} direction='row'>
                        <Stack style={[GlobalStyling.fitBox,]} direction='column'>
                            <Image style={[GlobalStyling.iconImage_l]} source={require('../../Assets/icon/heart.png')} />
                            <Text style={{ color: Color.grey }}>Daily Steps to stay healthy</Text>
                        </Stack>
                        <Stack style={[GlobalStyling.fitBox,]} direction='column'>
                            <Image style={[GlobalStyling.iconImage_l]} source={require('../../Assets/icon/factory.png')} />
                            <Text style={{ color: Color.grey }}>Fitness Challange</Text>
                        </Stack>
                        <Stack style={[GlobalStyling.fitBox, GlobalStyling.fitBox.last_child]} direction='column'>
                            <Image style={[GlobalStyling.iconImage_l]} source={require('../../Assets/icon/sticks.png')} />
                            <Text style={{ color: Color.grey }}>Health Quiz to win in lakhs</Text>
                        </Stack>
                    </Stack>
                </View>
            </View>
            <View style={{ height: '45%', marginBottom: -30, marginTop:30 }}>
                <Text style={[GlobalStyling.heading_l, { color: Color.dark, fontSize: 20 }]}>Game-Changing Tips</Text>
                <SlideCard />
            </View>
            <View style={[GlobalStyling.bottomClicks]}>
                <Button style={[GlobalStyling.blockButton]} title="Connect" onPress={() => navigation.navigate('Connect')} />
            </View>
        </View>
    )
}

export default SetUpWinFit

const styles = StyleSheet.create({
    googleFit: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },

    googleIcon: {
        width: 80,
        height: 80,
        alignSelf: 'center'
    },
    sliderView: {
        shadowColor: 'red',
        shadowOffset: { width: 100, height: 100 },
        shadowOpacity: 1,
        shadowRadius: 6,
    },
    slideCard: {
        width: 250,
        marginRight: 20,
        height: 150,
        padding: 15,
    },
    headerPart:{
        width:'100%',
        height:50,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'flex-end'
    }
})
