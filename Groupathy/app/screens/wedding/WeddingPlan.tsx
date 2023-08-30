import { Sizes, getSize } from '../../styles/fonts/sizes';
import { TextView } from '../../components/atoms/TextView';
import React from 'react';
import { View, StyleSheet, ImageBackground, Dimensions, TextInput, Keyboard} from 'react-native';
import { Colors, getColor } from '../../styles/colors';
import { FontStyles, getName } from '../../styles/fonts/names';
import { Spaces, getSpace } from '../../styles/spaces';
import { Icon } from '../../components/atoms/Icon';
import { Button } from '../../components/molecules/Button';
import TouchableComponent from '../../components/molecules/TouchableComponent';

const WeddingPlan = () => {
  const background = require('../../assets/weddingplanbg.png');

  const hideKeyboard = () => {
    Keyboard.dismiss();
  };
  
  return (
    <TouchableComponent touchable="withoutFeedBack" onPress={hideKeyboard}>
      <View style={styles.container}>
        <ImageBackground source={background} style={styles.background}>
          <View style={styles.container}>
            <View style={styles.header}>
              <TextView
              style={[styles.logoText, { fontSize: getSize(Sizes.xLarge)}]}
              textColor={{color: Colors.white}}
              fontFamily={FontStyles.blockBold}>
              LOGO
              </TextView>
            </View>
            <View style={styles.inner}>
              <TextView
              style={[styles.text, { fontSize: getSize(Sizes.xLarge)}]}
              textColor={{color: Colors.white}}
              fontFamily={FontStyles.regular}>
              Lets Plan the Wedding
              </TextView>
              <View style={styles.textFields}>
                <View style={styles.textField}>
                  <TextInput 
                  placeholder='Guest Count'
                  placeholderTextColor={getColor({color: Colors.black})}
                  keyboardType='numeric'
                  style={styles.input}
                  />
                  <Icon iconName='group'/>
                </View>
                <View style={styles.textField}>
                  <TextInput 
                  placeholder='Location'
                  placeholderTextColor={getColor({color: Colors.black})}
                  style={styles.input}
                  />
                  <Icon iconName='location-on'/>
                </View>
                <View style={styles.textField}>
                  <TextInput 
                  placeholder='Date'
                  placeholderTextColor={getColor({color: Colors.black})}
                  style={styles.input}
                  />
                  <Icon iconName='today'/>
                </View>
                <View style={styles.textField}>
                  <TextInput 
                  placeholder='Budget Range'
                  placeholderTextColor={getColor({color: Colors.black})}
                  keyboardType='numeric'
                  style={styles.input}
                  />
                  <Icon iconName='payments'/>
                </View>
              </View>
              <Button
                style={[styles.button]}
                touchableProps={{
                    touchable: 'highLight',
                    disabled: false,
                }}
                textProps={{
                  textColor: {color: Colors.black},
                  fontFamily: FontStyles.blockBold,
                  fontSize: Sizes.large,
                }}
                text='Get Started'
                />
            </View>
          </View>
        </ImageBackground>
      </View>
    </TouchableComponent>
   );       
};

const styles = StyleSheet.create({
  background: {
    flex : 1, 
    width: Dimensions.get('screen').width,
    height: Dimensions.get('screen').height
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    width: Dimensions.get('screen').width,
    height: Dimensions.get('screen').height
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
    flex: 1,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    width: '60%',
  },
  text: {
    textAlign: 'center'
  },
  textFields: {
    alignItems: 'center'
  },
  textField: {
    width: '100%',
    backgroundColor: getColor({color: Colors.white}),
    borderRadius: 10,
    paddingHorizontal: getSpace(Spaces.medium),
    marginVertical: getSpace(Spaces.small),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  input: {
    fontFamily: getName(FontStyles.blockBold),
    width: '80%'
  },
  button: {
    backgroundColor: 'white',
    width: '60%',
    padding: getSpace(Spaces.small),
    borderRadius: 10
  }
});

export default WeddingPlan;
