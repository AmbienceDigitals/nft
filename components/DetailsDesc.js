import { View, Text } from 'react-native';
import {useState} from 'react';

import {EthPrice, NFTTitle} from '../components/SubInfo';
import {COLORS, SIZES, FONTS} from '../constants';

const DetailsDesc = ({data}) => {
    return (
        <>
            <View 
                style={{
                    width: "100%",
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center'
                }}>
                <NFTTitle
                    title={data.name}
                    subTitle={data.creator}
                    titleSize={SIZES.extraLarge}
                    subTitleSize={SIZES.font}/>

                <EthPrice
                    price={data.price}/>
            </View>

            <View
                style={{
                    marginVertical: SIZES.extraLarge * 1.5
                }}>
                    <Text
                    style={{
                        fontSize: SIZES.font,
                        fontFamily: FONTS.semiBold,
                        
                    }}>

                    </Text>
            </View>
        </>
    ) 
}

export default DetailsDesc