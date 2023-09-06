import React, { FunctionComponent } from 'react'
import { TextView } from '../atoms/TextView'
import { Dimensions, StyleProp, StyleSheet, View, ViewStyle } from 'react-native'
import { Sizes, getSize } from '../../styles/fonts/sizes'
import { Spaces, getSpace } from '../../styles/spaces'
import { Colors } from '../../styles/colors'
import { FontStyles } from '../../styles/fonts/names'

type HeaderProps = {
    imageSrc?: string,
    text?: string,
    style?: StyleProp<ViewStyle>;
}
export const Header: FunctionComponent<HeaderProps> = (props) => {
    const {
        style
    } = props;
  return (
    <View style={[styles.header, style]}>
        <TextView
            style={[styles.logoText, { fontSize: getSize(Sizes.xLarge)}]}
            textColor={{color: Colors.red}}
            fontFamily={FontStyles.blockBold}>
            LOGO
        </TextView>
    </View>
  )
}

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: getSpace(Spaces.medium),
        paddingHorizontal: getSpace(Spaces.medium),
        width: Dimensions.get('screen').width,
      },
      logoText: {
        // Apply logo text styles here
      },
})