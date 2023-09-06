import { Sizes, getSize } from '../../styles/fonts/sizes';
import { TextView } from '../../components/atoms/TextView';
import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Dimensions, TextInput, Keyboard} from 'react-native';
import { Colors, getColor } from '../../styles/colors';
import { FontStyles, getName } from '../../styles/fonts/names';
import { Spaces, getSpace } from '../../styles/spaces';
import { Icon } from '../../components/atoms/Icon';
import { Button } from '../../components/molecules/Button';
import TouchableComponent from '../../components/molecules/TouchableComponent';
import { NavigationProp, useRoute } from '@react-navigation/native';
import navigateTo from '../../navigation/navigateTo';
import { Header } from '../../components/molecules/Header';
import { getOTP, verifyOTP } from './api/ApiCalls';

type MyComponentProps = {
  navigation: NavigationProp<any>; 
};

const OTP : React.FC<MyComponentProps> = ({navigation}) => {
  interface Params {
    name:string,
    phone_number:string  
  }
  const [OTPN, setOTP] = useState('');
  const [otpInvalid, setOTPInvalid] = useState(false);
  const route = useRoute();
  const {name,phone_number} = route.params as Params;
  getOTP(phone_number);
  const hideKeyboard = () => {
    Keyboard.dismiss();
  };
  
  const handleNavigate = async() => {
    const value = await verifyOTP(phone_number,OTPN);
    if (value.data.Details === "OTP Matched") {
      navigateTo({
        navigation,
        path: '/home',
        params: {
          name: name,
          phone_number: phone_number,
        },
        replace: false,
      });
    }
  };
    

 
  return (
    <TouchableComponent touchable="withoutFeedBack" onPress={hideKeyboard}>
      <View style={styles.container}>
          <View style={styles.container}>
            <Header />
            <View style={styles.inner}>
              <TextView
              style={[styles.text, { fontSize: getSize(Sizes.xLarge)}]}
              textColor={{color: Colors.white}}
              fontFamily={FontStyles.regular}>
              Enter OTP
              </TextView>
              <View style={styles.textField}>
                  <TextInput 
                  placeholder='XXXX'
                  placeholderTextColor={getColor({color: Colors.black})}
                  keyboardType='numeric'
                  onChangeText={(text) => {
                    setOTP(text);
                    setOTPInvalid(false);
                  }}
                  style={styles.input}
                  />
              </View>
              {otpInvalid && (
              <TextView
                style={{ color: 'red', fontSize: getSize(Sizes.medium) }}
                fontFamily={FontStyles.regular}>
                Invalid OTP
              </TextView>
            )}
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
                text='Enter'
                />
            </View>
          </View>
      </View>
    </TouchableComponent>
   );       
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: getColor({color: Colors.red}),
    width: Dimensions.get('screen').width,
    height: Dimensions.get('screen').height,
    padding: getSpace(Spaces.medium)
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
  textField: {
    width: '100%',
    backgroundColor: getColor({color: Colors.white}),
    borderRadius: 10,
    paddingHorizontal: getSpace(Spaces.medium),
    alignItems: 'center',
    justifyContent: 'center'
  },
  input: {
    fontFamily: getName(FontStyles.blockBold),
    width: '80%',
    textAlign: 'center'
  },
  button: {
    backgroundColor: 'white',
    width: '60%',
    padding: getSpace(Spaces.small),
    borderRadius: 10
  }
});

export default OTP;