import { TouchableOpacity, View, Text, Image } from 'react-native'
import {SIZES, COLORS, FONTS, SHADOWS} from '../constants'

export const CircleButton = ({imgUrl, handlePress, ...props}) => {
    return (
        <TouchableOpacity
        style={{
            width: 40,
            height: 40,
            backgroundColor: COLORS.white,
            position: 'absolute',
            borderRadius: SIZES.extraLarge,
            alignItems: 'center',
            justifyContent: 'center',
            ...SHADOWS.light,
            // props 'right' and 'tops'
            ...props,
        }}
        onPress={handlePress}>
            <Image
            source={imgUrl}
            resizeMode="contain"
            style={{
                width: 24,
                height: 24
            }}/>
        </TouchableOpacity>
    )
}

export const RectButton = ({minWidth, fontSize, handlePress, ...props}) => {
    return (
        <TouchableOpacity
        style={{
            backgroundColor: COLORS.primary,
            borderRadius: SIZES.extraLarge,
            alignItems: 'center',
            minWidth: minWidth,
            padding: SIZES.small,
            // props 'right' and 'tops'
            ...props,
        }}
        onPress={handlePress}>
            <Text
            style={{
                fontFamily: FONTS.semiBold,
                fontSize: fontSize,
                color: COLORS.white,
                textAlign: 'center'
            }}>
                Place a bid
            </Text>
        </TouchableOpacity>
    )
}
