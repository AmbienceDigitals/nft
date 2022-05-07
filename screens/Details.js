import React from 'react';
import {View, Text, SafeAreaView, Image, StatusBar, FlatList} from 'react-native';

import {SIZES, FONTS, COLORS, assets, SHADOWS} from '../constants'
import {CircleButton, RectButton, SubInfo, FocusedStatusBar, DetailsBid, DetailsDesc} from '../components'


// Details Header Component
const DetailsHeader = ({data, navigation}) => (
    <View 
    style={{
        width: '100%',
        height: 373,
    }}>
        <Image
            source={data.image}
            resizeMode="cover"
            style={{
                width: '100%',
                height: '100%',
            }}/>

            {/* Icons to navigate back to the homepage */}
            <CircleButton
                imgUrl={assets.left}
                handlePress={() => navigation.goBack()}
                left={15}
                // using the value of the status bar of the specific device to position the icon
                top={StatusBar.currentHeight + 10}/>

            <CircleButton
                imgUrl={assets.heart}
                right={15}
                // using the value of the status bar of the specific device to position the icon
                top={StatusBar.currentHeight + 10}/>

    </View>
)

const Details = ({route, navigation}) => {
    const {data} = route.params

    return (
            <SafeAreaView style={{
                flex: 1, 
                backgroundColor: "white",
                // height: "100%"
            }}>

                {/*light Focused Status Bar */}
                <FocusedStatusBar
                barStyle = "dark-content"
                backgroundColor= "transparent"
                translucent={true}/>
                
                {/* RectButton (Place a bid button) */}
                <View
                style={{
                    width: "100%",
                    position: "absolute",
                    bottom: 0,
                    paddingVertical: SIZES.font,
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: 'rgba(255, 255, 255, 0.5)',
                    zIndex: 1,
                }}>
                    <RectButton
                    minWidth={170}
                    fontSize={SIZES.large}
                    {...SHADOWS.dark}/>
                </View>

                {/* FlatList to display bids history */}
                <FlatList
                    data={data.bids}
                    renderItem={({item}) => <DetailsBid bid={item}/>}
                    keyExtractor={(item) => item.id}
                    showsVerticalScrollIndicator={false}
                    // padding between flatlist and next component
                    contentContainerStyle={{paddingBottom: SIZES.extraLarge * 3}}
                    // component to be displayed on top of the flatlist
                    ListHeaderComponent={() => (
                        // using React fragment to return multiple components
                        <React.Fragment>
                            <DetailsHeader
                            data={data}
                            navigation={navigation}/>
                            <SubInfo/>
                            <View style={{padding: SIZES.font}}>
                                <DetailsDesc data={data}/>
                            </View>
                        </React.Fragment>
                    )}/>
            </SafeAreaView>
    );
}

export default Details;