import { TextView } from '../../components/atoms/TextView';
import React from 'react'
import { Dimensions, ImageBackground, StyleSheet, View } from 'react-native'
import { Sizes, getSize } from '../../styles/fonts/sizes';
import { Colors, getColor } from '../../styles/colors';
import { FontStyles } from '../../styles/fonts/names';
import { Spaces, getSpace } from '../../styles/spaces';
import { Button } from '../../components/molecules/Button';
import { NavigationProp } from '@react-navigation/native';
import navigateTo from '../../navigation/navigateTo';
import { Header } from '../../components/molecules/Header';

type MyComponentProps = {
    navigation: NavigationProp<any>; // Adjust the type if you have a specific navigator
};

const WeddingCity: React.FC<MyComponentProps> = ({navigation}) => {
  const background = require('../../assets/choicebg.png');
  
  const handleNavigate = () => {
    navigateTo({
      navigation,
      path: '/wedding/budget', // Replace with the desired path
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
            <Header />
            <View style={styles.inner}>
                <TextView style={styles.choiceText}>
                Which city is the wedding in?
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
                text='Mumbai'
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
                text='Bangalore'
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
                text='Pune'
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
                text='Delhi'
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
    inner: {
        justifyContent: 'center',
        alignItems: 'center',
        width: '60%',
        paddingVertical: getSpace(Spaces.xLarge)
    },
    choiceText: {
        fontSize: getSize(Sizes.xxLarge),
        textAlign: 'center',
    },
    choices: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
    },
    button: {
        backgroundColor: getColor({color: Colors.white}),
        width: '25%',
        paddingVertical: getSpace(Spaces.small),
        borderRadius: 10,
        borderColor: getColor({color: Colors.grey}),
        borderWidth: 1,
        margin: getSpace(Spaces.small),
    },
})

export default WeddingCity;