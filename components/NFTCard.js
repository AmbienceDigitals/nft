import { View, Text, Image } from 'react-native';
import {useNavigation} from '@react-navigation/native';

import {COLORS, SIZES, SHADOWS, assets} from '../constants';
import {CircleButton, RectButton} from './Button'

import {SubInfo, NFTTitle, EthPrice} from './SubInfo'

const NFTCard = ({data}) => {
    // using the useNavigation hook
    const navigation = useNavigation();

    return (
        <View
        style={{
            backgroundColor: COLORS.white,
            borderRadius: SIZES.font,
            marginBottom: SIZES.extraLarge,
            margin: SIZES.base,
            ...SHADOWS.dark
        }}>
            <View
            style={{
                width: "100%",
                height: 250,
            }}>
                <Image
                    source={data.image}
                    resizeMode="cover"
                    style={{
                        width: "100%",
                        height: "100%",
                        borderTopLeftRadius: SIZES.font,
                        borderTopRightRadius: SIZES.font
                    }}/>

                    {/* like component */}
                    {/* properties right and top forces the circle to the right top side */}
                    <CircleButton imgUrl={assets.heart} right={10} top={10}/>
            </View>
            {/* SubInfo component */}
            <SubInfo/>
            
            {/* NFTTitle, EthPrice and RectButton */}
            <View style={{width: "100%", padding: SIZES.font}}>
                {/* using data as props for NFTTitle component */}
                <NFTTitle
                title={data.name}
                subTitle={data.creator}
                titleSize={SIZES.large}
                subTitleSize={SIZES.small}/>

                <View
                style={{
                    marginTop: SIZES.font,
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center"
                }}>
                    <EthPrice price={data.price}/>
                    {/* using navigation to transfer data to Details Page */}
                    <RectButton
                    minWidth={120}
                    fontSize={SIZES.font}
                    handlePress={() => navigation.navigate("Details", { data })}/>
                </View>
            </View>

        </View>
    )
}

export default NFTCard