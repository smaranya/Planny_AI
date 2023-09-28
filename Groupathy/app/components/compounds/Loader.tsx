import { FontStyles, getName } from '../../styles/fonts/names';
import { Sizes, getSize } from '../../styles/fonts/sizes';
import React, { useState, useEffect } from 'react';
import { View, Image, StyleSheet, Dimensions, ActivityIndicator } from 'react-native';
import * as Animatable from 'react-native-animatable';
import { TextView } from '../atoms/TextView';
import { Colors, getColor } from '../../styles/colors';
import { Spaces, getSpace } from '../../styles/spaces';

const Loader: React.FC = () => {
  const loadingTexts: string[] = ['Crafting the Perfect Day, Piece by Piece...','Going through your choices...', 'Fetching the perfect plan for you...'];
  const [loadingText, setLoadingText] = useState<string>(loadingTexts[0]);
  const [showLoader, setShowLoader] = useState<boolean>(true);

  useEffect(() => {


    const intervalId = setInterval(() => {
      setLoadingText((prevText) => {
        const nextIndex = (loadingTexts.indexOf(prevText) + 1) % loadingTexts.length;
        return loadingTexts[nextIndex];
      });
    }, 2000);

    const timeoutId = setTimeout(() => {
        setShowLoader(false);
      }, 6000);

      return () => {
        clearInterval(intervalId);
        clearTimeout(timeoutId);
      };
    }, []);

  return (
    <View style={{width: Dimensions.get('screen').width}}>
      {
        showLoader && (
        <View style={styles.container}>
            <ActivityIndicator size='large'/>
            <Animatable.View animation="fadeIn" style={styles.loaderContainer}>
                <TextView style={styles.loaderText}>{loadingText}</TextView>
            </Animatable.View>
        </View>
      )
      }
    </View> 
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'absolute',
    width: Dimensions.get('screen').width,
    height: Dimensions.get('screen').height,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: getColor({color: Colors.white}),
    zIndex: 999
  },
  logoText: {
    color: getColor({color: Colors.red}),
    fontSize: getSize(Sizes.xxxLarge),
    fontFamily: getName(FontStyles.regular),
    textAlign: 'center',
    margin: getSpace(Spaces.medium)
  },
  loaderContainer: {
    padding: 20,
    borderRadius: 10,
    width: '60%',
    alignItems: 'center',
  },
  loaderText: {
    color: getColor({color: Colors.red}),
    fontSize: getSize(Sizes.medium),
    fontFamily: getName(FontStyles.blockBold),
    textAlign: 'center'
  },
});

export default Loader;