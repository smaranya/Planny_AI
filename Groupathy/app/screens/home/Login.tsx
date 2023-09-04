import { Sizes, getSize } from '../../styles/fonts/sizes';
import { TextView } from '../../components/atoms/TextView';
import React from 'react';
import { View, StyleSheet, Dimensions, TextInput, Keyboard} from 'react-native';
import { Colors, getColor } from '../../styles/colors';
import { FontStyles, getName } from '../../styles/fonts/names';
import { Spaces, getSpace } from '../../styles/spaces';
import { Icon } from '../../components/atoms/Icon';
import { Button } from '../../components/molecules/Button';
import TouchableComponent from '../../components/molecules/TouchableComponent';
import { NavigationProp } from '@react-navigation/native';
import navigateTo from '../../navigation/navigateTo';

type MyComponentProps = {
  navigation: NavigationProp<any>; // Adjust the type if you have a specific navigator
};

const Login : React.FC<MyComponentProps> = ({navigation}) => {

  const hideKeyboard = () => {
    Keyboard.dismiss();
  };

  const handleNavigate = () => {
    navigateTo({
      navigation,
      path: '/home', // Replace with the desired path
      params: {
        // Include any additional parameters you need
      },
      replace: false, // Set to true if you want to use replace navigation
    });
  };
  
  return (
    <TouchableComponent touchable="withoutFeedBack" onPress={hideKeyboard}>
      <View style={styles.container}>
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
              LOGIN
              </TextView>
              <View style={styles.textFields}>
                <View style={styles.textField}>
                  <TextInput 
                  placeholder='Email'
                  placeholderTextColor={getColor({color: Colors.black})}
                  keyboardType='email-address'
                  style={styles.input}
                  />
                  <Icon iconName='email'/>
                </View>
                <View style={styles.textField}>
                  <TextInput 
                  placeholder='Password'
                  placeholderTextColor={getColor({color: Colors.black})}
                  secureTextEntry={true}
                  maxLength={20}
                  style={styles.input}
                  />
                  <Icon iconName='password'/>
                </View>
              </View>
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
