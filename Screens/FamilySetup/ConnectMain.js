// import { Stack } from '@react-native-material/core';
// import React from 'react';
// import { SafeAreaView, Image, StyleSheet, FlatList, View, Text, StatusBar, TouchableOpacity, Dimensions, ImageBackground } from 'react-native';
// import GlobalStyling, { colorsProp } from '../../Styling/GlobalStyling';



// const windowWidth = Dimensions.get('window').width;
// const windowHeight = Dimensions.get('window').height;

// // OnBoarding Main Slides
// const slides = [
//     {
//         id: '1',
//         mainIcon:  require('../../Assets/onBoard3.png'),
//         mainIcon2: require('../../Assets/onBoard3.png'),
//         mainIcon3: require('../../Assets/onBoard3.png'),
//         mainIcon4: require('../../Assets/onBoard3.png'),
//     },
//     {
//         id: '2',
//         image: require('../../Assets/onBoard2.png'),
//         title: 'Achieve Your Goals',
//         subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
//     },
// ];

// // OnBoarding Slides JSX Structure
// const Slide = ({ item }) => {
//     return (
//         <View style={styles.darkScreen}>
//             <Image style={styles.iconWidth} source={item.mainIcon} />
//             <Text>Track Your Activities</Text>
//             <View>
//                 <Text>{item.paragraph}</Text>
//                 <Stack direction='row'>
//                     <Stack direction='column'>
//                         <Image style={styles.iconWidth}  source={item.mainIcon2} />
//                     </Stack>
//                     <Stack direction='column'>
//                         <Image style={styles.iconWidth} source={item.mainIcon3} />
//                     </Stack>
//                     <Stack direction='column'>
//                         <Image style={styles.iconWidth} source={item.mainIcon4} />
//                     </Stack>
//                 </Stack>
//             </View>
//         </View>
//     );
// };





// // This Code is Written to Mavigation to the Screen or for Slide Buttons 
// const ConnectMain = ({ navigation }) => {
//     const [currentSlideIndex, setCurrentSlideIndex] = React.useState(0);
//     const ref = React.useRef();
//     const updateCurrentSlideIndex = e => {
//         const contentOffsetX = e.nativeEvent.contentOffset.x;
//         const currentIndex = Math.round(contentOffsetX / windowWidth);
//         setCurrentSlideIndex(currentIndex);
//     };

//     // GoToNextSlide code is used for Next Button in Slider -- //
//     const GoToNextSlide = () => {
//         const nextSlideIndex = currentSlideIndex + 1;
//         if (nextSlideIndex != slides.length) {
//             const offset = nextSlideIndex * windowWidth;
//             ref?.current.scrollToOffset({ offset });
//             setCurrentSlideIndex(currentSlideIndex + 1);
//         }
//     };
//     function GoNext() {
//         return (
//             <TouchableOpacity onPress={GoToNextSlide} style={styles.boardBtn.NextBtn}>
//                 <Text style={styles.boardBtn.NextBtn.innerText}>
//                     NEXT
//                 </Text>
//             </TouchableOpacity>
//         )
//     }
//     // GoNext Ends Here ----------------------------------------- // 

//     // Skip Button code is used to Skip OnBoarding Slides ------- //
//     const SkipBtn = () => {
//         const lastSlideIndex = slides.length - 1;
//         const offset = lastSlideIndex * windowWidth;
//         ref?.current.scrollToOffset({ offset });
//         setCurrentSlideIndex(lastSlideIndex);
//     };
//     function Skip() {
//         return (
//             <TouchableOpacity style={styles.boardBtn.SkipBtn} onPress={SkipBtn}>
//                 <Text Skip={styles.boardBtn.SkipBtn.innerText}>
//                     SkipBtn
//                 </Text>
//             </TouchableOpacity>
//         )
//     }
//     // Skip button Code Ends here ------------------------------ //

//     // GetStarted Component Code used in last index to navigate to the Family section ------ //
//     const GetStarted = () => {
//         return (
//             <TouchableOpacity style={styles.boardBtn.mainNav} onPress={() => navigation.replace('FamilySetup')}>
//                 <Text style={styles.boardBtn.textBoardNav}>
//                     Get Started
//                 </Text>
//             </TouchableOpacity>
//         )
//     }
//     // GetStarted Code end here -------------------------------------------------------------------------------------------- //


//     // This code is used for navigation button Such as Skip,Next and Get Started  --------------------------------------------//
//     const Pagination = () => {
//         return (
//             <View style={styles.pageIndictaor}>
//                 <View style={styles.pageRow}>
//                     {slides.map((_, index) => (<View key={index} style={[styles.pagination, currentSlideIndex == index && styles.activePagination]} />))}
//                 </View>

//                 <View style={styles.slidesBtn}>
//                     {currentSlideIndex == slides.length - 1 ? (<GetStarted />) : (
//                         <View style={styles.boardBtn}>
//                             <GoNext />
//                             <Skip />
//                         </View>
//                     )}
//                 </View>
//             </View>
//         );
//     };

//     return (
//         <SafeAreaView>
//             <StatusBar />
//             <FlatList ref={ref} onMomentumScrollEnd={updateCurrentSlideIndex} showsHorizontalScrollIndicator={false} horizontal data={slides} pagingEnabled renderItem={({ item }) => <Slide item={item} />} />
//             <Pagination />
//         </SafeAreaView>
//     );
// };


// // OnBoarding Slides Styles
// const styles = StyleSheet.create({
//     darkScreen: {
//         backgroundColor: '#181818'
//     },
//     iconWidth: {
//         width: 40,
//         height: 40
//     },
//     onBoardSlide: {
//         width: windowWidth,
//         height: windowHeight
//     },
//     onBoardView: {
//         paddingTop: 100,
//         paddingLeft: 30,
//         paddingRight: 30
//     },
//     onBoardtitle: {
//         fontSize: 28,
//         fontWeight: 'bold'
//     },
//     onBoardBoxed: {
//         padding: 10,
//         borderWidth: 1,
//         borderColor: colorsProp.white,

//     },

//     // Pagination Style
//     pagination: {
//         height: 10,
//         width: 10,
//         borderRadius: 100,
//         backgroundColor: 'grey',
//         marginHorizontal: 3,
//     },
//     pageIndictaor: {
//         justifyContent: 'space-between',
//         paddingHorizontal: 30,
//         // position: 'absolute',
//         paddingVertical: 60,
//         height: windowHeight
//     },
//     pageRow: {
//         flexDirection: 'row',
//         justifyContent: 'center',
//         marginTop: 0
//     },
//     activePagination: {
//         backgroundColor: '#fff',
//         width: 30
//     },

//     // Slider Button Styling
//     slidesBtn: {
//         position: 'absolute',
//         bottom: 0,
//     },
//     boardBtn: {
//         justifyContent: 'space-between',
//         display: 'flex',
//         flexDirection: 'row-reverse',
//         width: windowWidth,
//         padding: 20,
//         mainNav: {
//             width: windowWidth,
//             justifyContent: 'center',
//         },
//         textBoardNav: {
//             backgroundColor: colorsProp.white,
//             padding: 15,
//             borderRadius: 10,
//             borderWidth: 2,
//             borderColor: 'white',
//             textAlign: 'center',
//             color: colorsProp.black,
//         },
//         SkipBtn: {
//             width: '48%',
//             backgroundColor: 'transparent',
//             padding: 15,
//             borderRadius: 10,
//             borderWidth: 2,
//             borderColor: 'white',
//             innerText: {
//                 color: colorsProp.white,
//                 fontSize: 16,
//                 fontWeight: 'bold'
//             }
//         },
//         NextBtn: {
//             width: '48%',
//             backgroundColor: 'white',
//             borderWidth: 2,
//             borderColor: 'white',
//             padding: 15,
//             borderRadius: 10,
//             innerText: {
//                 color: 'black',
//                 fontSize: 16,
//                 fontWeight: 'bold'
//             }
//         }
//     }
// })



// export default ConnectMain;