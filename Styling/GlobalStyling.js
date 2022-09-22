import { StyleSheet, Dimensions } from 'react-native';
import Color from './Color';
export const windowWidth = Dimensions.get('window').width;
export const windowHeight = Dimensions.get('window').height;

export default StyleSheet.create({
    // Code will be use to make Screen with Fit
    ViewContainer: {
        width: windowWidth,
        padding: 20
    },
    fitContainer: {
        width: '100%',
        height: windowHeight,
        resizeMode: 'contain',
    },
    containerFluid: {
        padding: 20
    },
    Body: {
        backgroundColor: '#fbf8f6',
        height: '100%',
    },

    // TypoGraphy {Heading Styling Props}
    heading_xl: {
        fontSize: 28,
        fontWeight: 'bold',
        marginBottom: 10,
        color: Color.dark
    },
    heading_l: {
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 10,
        color: Color.dark
    },
    heading_sm: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 10,
        color: Color.dark
    },
    heading_xs: {
        fontSize: 12,
        fontWeight: 'bold',
        marginBottom: 10,
        color: Color.dark
    },
    normal_text: {
        color: Color.dark,
        fontSize: 14
    },

    // TypoGraphy {Font-Family Styling Props}
    font_Bold: {
        fontFamily: '',
    },
    font_SemiBold: {
        fontFamily: '',
    },
    font_Regular: {
        fontFamily: '',
    },

    // ImageFluid Styling Props
    fluidContainer: {
        width: '100%',
    },
    imgFluid: {
        width: '100%',
        resizeMode: 'cover',
        height: 250,
        padding: 20
    },
    // Button & Link
    link: {
        width: '100%',
        color: Color.dark,
        marginBottom: 10,
        linkText: {
            fontSize: 14,
            color: Color.primary,
            textDecorationLine: 'underline',
            textAlign: 'center',
            fontWeight: 'bold'
        }
    },
    link2: {
        width: '100%',
        color: Color.dark,
        marginBottom: 10,
        linkText: {
            fontSize: 14,
            color: Color.blue,
            textDecorationLine: 'underline',
            textAlign: 'center',
            fontWeight: 'bold'
        }
    },
    linkTextDrak: {
        fontSize: 14,
        color: Color.dark,
        textDecorationLine: 'underline',
    },
    blockButton: {
        width: '100%',
        backgroundColor: Color.primary,
        padding: 5,
        marginTop: 10,
        fontSize: 14
    },

    //Text Center Prop
    Center: {
        textAlign: 'center'
    },
    // Block Center Prop
    BlockCenter: {
        justifyContent: 'center',
        alignItems: 'center',
        margin: 10
    },
    // Form Styling
    loginGroup: {
        top: '30%',
        marginHorizontal: 20,
        loginText: {
            color: '#181818',
            fontWeight: '300'
        }
    },
    loginTextinput: {
        marginTop: 50,
        borderColor: 'red',
        inputContainer: {
            backgroundColor: 'transparent',
        },
    },
    defaultButton: {
        backgroundColor: 'red',
        padding: 15,
        borderRadius: 5,
        marginTop: 20,
        loginButton: {
            color: 'white',
            fontWeight: "bold",
            textAlign: 'center',
        }
    },
    inputBoxLabel: {
        color: Color.dark
    },
    adultBox: {
        color: '#3a7ec1',
        backgroundColor: '#d3e9ff91',
        borderWidth: 1,
        borderColor: '#3a7ec1',
        borderRadius: 3,
    },
    adultBoxText: {
        fontSize: 10,
        color: '#3a7ec1',
        paddingLeft: 5,
        paddingRight: 5,
        paddingBottom: 2,
        paddingTop: 2
    },
    bottomClicks: {
        bottom: 20,
        position: 'absolute',
        textAlign: 'center',
        width: '100%',
        margin: 20
    },
    bottomClicks2:{
        textAlign: 'center',
        width: '100%',
        maxWidth:'100%'
    },
    spaceAction: {
        padding: 10,
        alignItems: 'center',
        center: {
            alignItems: 'center',
            justifyContent: 'space-between'
        }
    },
    iconImage:{
        width:24,
        height:24,
        marginRight:15
    },
    iconImage_l:{
        width:24,
        height:24,
    },
    iconImage_sm:{
        width:16,
        height:16,
        marginLeft:5,
        marginTop:2
    },
    iconImage_xl:{
        width:34,
        height:34,
    },
    fitBox:{
        marginTop:10,
        padding:10,
        borderRightWidth:0.50,
        borderRightColor:'lightgrey',
        width:'33%',
        last_child:{
            borderRightWidth:0
        }
    },
    fitBox2:{
        marginTop:30,
        padding:10,
        width:'33%',
        justifyContent:'center',
        alignItems:'center'
    },
   
});

export const supportStyles = {
    textCenter: {
        textAlign: 'center'
    }
}

export const colorsProp = {
    white: '#fff',
    primary: '#FF8066',
    secoundry: '#005B75',
    red: '#B02A30',
    body: '#fbf8f6',
    black: '#000',
    main: '#FFBF66',
    dark: '#181818',
    blue:'#06c'
}

