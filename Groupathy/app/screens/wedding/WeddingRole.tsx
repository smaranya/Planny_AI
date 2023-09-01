import { TextView } from '../../components/atoms/TextView';
import React, { useState } from 'react'
import { Dimensions, ImageBackground, StyleSheet, View } from 'react-native'
import { Sizes, getSize } from '../../styles/fonts/sizes';
import { Colors, getColor } from '../../styles/colors';
import { FontStyles, getName } from '../../styles/fonts/names';
import { Spaces, getSpace } from '../../styles/spaces';
import { Button } from '../../components/molecules/Button';
import { NavigationProp } from '@react-navigation/native';
import navigateTo from '../../navigation/navigateTo';

type MyComponentProps = {
    navigation: NavigationProp<any>; // Adjust the type if you have a specific navigator
};

const WeddingRole: React.FC<MyComponentProps> = ({navigation}) => {
  const background = require('../../assets/choicebg.png');
  
  const handleNavigate = () => {
    navigateTo({
      navigation,
      path: '/wedding/role', // Replace with the desired path
      params: {
        // Include any additional parameters you need
      },
      replace: false, // Set to true if you want to use replace navigation
    });
  };

  return (
    <View style={styles.container}>
        <ImageBackground source={background} style={styles.background}>
            <View style={styles.container}>
            <View style={styles.header}>
              <TextView
              style={[styles.logoText, { fontSize: getSize(Sizes.xLarge)}]}
              textColor={{color: Colors.red}}
              fontFamily={FontStyles.blockBold}>
              LOGO
              </TextView>
            </View>
            <View style={styles.inner}>
                <TextView style={styles.choiceText}>
                Tell us who you are
                </TextView>
            </View>
            <View style={styles.choices}>
            <Button
                style={styles.button}
                touchableProps={{
                    touchable: 'highLight',
                    onPress: handleNavigate,
                }}
                textProps={{
                  textColor: {color: Colors.black},
                  fontFamily: FontStyles.blockBold,
                  fontSize: Sizes.large,
                }}
                text='Bride'
            />
            <Button
                style={[styles.button]}
                touchableProps={{
                    touchable: 'highLight',
                    onPress: handleNavigate,
                }}
                textProps={{
                  textColor: {color: Colors.black},
                  fontFamily: FontStyles.blockBold,
                  fontSize: Sizes.large,
                }}
                text='Groom'
            />
            <Button
                style={[styles.button]}
                touchableProps={{
                    touchable: 'highLight',
                    onPress: handleNavigate,
                }}
                textProps={{
                  textColor: {color: Colors.black},
                  fontFamily: FontStyles.blockBold,
                  fontSize: Sizes.large,
                }}
                text='Other'
            />
            </View>
            </View>
        </ImageBackground>
    </View>
  )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        width: Dimensions.get('screen').width,
        height: Dimensions.get('screen').height
    },
    background: {
        flex : 1, 
        width: Dimensions.get('screen').width,
        height: Dimensions.get('screen').height,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: getSpace(Spaces.medium),
        paddingHorizontal: getSpace(Spaces.medium),
        width: Dimensions.get('screen').width,
    },
    logoText: {
    
    },
    inner: {
        justifyContent: 'center',
        alignItems: 'center',
        width: '50%',
        paddingVertical: getSpace(Spaces.xLarge)
    },
    choiceText: {
        fontSize: getSize(Sizes.xxLarge),
        textAlign: 'center',
    },
    choices: {
        flexDirection: 'row',
    },
    button: {
        backgroundColor: getColor({color: Colors.white}),
        width: '25%',
        paddingVertical: getSpace(Spaces.small),
        borderRadius: 10,
        borderColor: getColor({color: Colors.grey}),
        borderWidth: 1,
        marginHorizontal: getSpace(Spaces.small),
    },
})

export default WeddingRole;