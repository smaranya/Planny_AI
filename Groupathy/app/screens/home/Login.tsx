import React, { useState } from 'react';
import {
  View,
  StyleSheet,
  Dimensions,
  TextInput,
  Keyboard,
} from 'react-native';
import { Colors, getColor } from '../../styles/colors';
import { FontStyles, getName } from '../../styles/fonts/names';
import { Spaces, getSpace } from '../../styles/spaces';
import { Icon } from '../../components/atoms/Icon';
import { Button } from '../../components/molecules/Button';
import TouchableComponent from '../../components/molecules/TouchableComponent';
import { NavigationProp } from '@react-navigation/native';
import navigateTo from '../../navigation/navigateTo';
import { Header } from '../../components/molecules/Header';
import { getOTP, loginUser, verifyOTP } from './api/ApiCalls';
import { TextView } from '../../components/atoms/TextView';
import { Sizes, getSize } from '../../styles/fonts/sizes';
import { handleScheduleNotification } from '../wedding/notification.android';
type MyComponentProps = {
  navigation: NavigationProp<any>; // Adjust the type if you have a specific navigator
};

const Login: React.FC<MyComponentProps> = ({ navigation }) => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');

  const hideKeyboard = () => {
    Keyboard.dismiss();
  };

  const handleNavigate = () => {
    navigateTo({
      navigation,
      path: '/signup/otp', 
      params: {
        phone_number : phoneNumber
      },
      replace: false, 
    });
  };

  const goToSignup = () => {
    navigateTo({
      navigation,
      path: '/signup',
      params: {},
      replace: false,
    });
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
              LOGIN
              </TextView>
              <View style={styles.textFields}>
                <View style={styles.textField}>
                  <TextInput 
                  placeholder='Phone Number'
                  placeholderTextColor={getColor({color: Colors.black})}
                  keyboardType='phone-pad'
                  style={styles.input}
                  onChangeText={setPhoneNumber}
                  maxLength={10}
                  />
                  <Icon iconName='phone'/>
                </View>
                {/* <View style={styles.textField}>
                  <TextInput 
                  placeholder='Password'
                  placeholderTextColor={getColor({color: Colors.black})}
                  secureTextEntry={true}
                  maxLength={20}
                  onChangeText={setPassword}
                  style={styles.input}
                  />
                  <Icon iconName='password'/>
                </View> */}
              </View>
              <TouchableComponent touchable="opacity" onPress={goToSignup}>
                <TextView style={[styles.input, {color: getColor({color: Colors.white}), textDecorationLine: 'underline'}]}>
                  New User?
                </TextView>
              </TouchableComponent>
              <Button
                style={[styles.button]}
                touchableProps={{
                    touchable: 'highLight',
                    onPress: async()=>{
                      
                      handleNavigate()
                    },
                }}
                textProps={{
                  textColor: {color: Colors.black},
                  fontFamily: FontStyles.blockBold,
                  fontSize: Sizes.large,
                }}
                text='Login'
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
    justifyContent: 'space-evenly'
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

export default Login;
