import React, { useState, useEffect } from 'react';
import {
  View,
  StyleSheet,
  Dimensions,
  TextInput,
  Keyboard,
  ActivityIndicator,
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
import {  signUpUser } from './api/ApiCalls';
import { TextView } from '../../components/atoms/TextView';
import { Sizes, getSize } from '../../styles/fonts/sizes';


type MyComponentProps = {
  navigation: NavigationProp<any>; // Adjust the type if you have a specific navigator
};

const SignUp: React.FC<MyComponentProps> = ({ navigation }) => {
  const [name, setUserName] = useState('');
  const [phone_number, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false); // Track loading state
  const [result, setResult] = useState<{ msg: string } | null>(null); // Track API result

  const data = { name, phone_number, password };

  const hideKeyboard = () => {
    Keyboard.dismiss();
  };

  const handleNavigate = async () => {
    setLoading(true); // Set loading to true when the button is clicked

    try {
      console.log(data);
      const response = await signUpUser(data);
      
      if (response.Msg === 'Register successfully!') {
        // If successful, navigate to OTP screen
                navigateTo({
                  navigation,
                  path: '/signup/otp',
                  params: {
                    name:name,
                    phone_number : phone_number
                  },
                  replace: false,
                });
                 
      }
    } catch (error) {
      console.error('Error signing up:', error);
      setResult({msg:"Couldn't Sign Up(Please checkout all fields"});
    } finally {
      setLoading(false); 
    }
  };

  useEffect(() => {
    // Clear the result message after a delay (e.g., 5 seconds)
    if (result) {
      const timer = setTimeout(() => {
        setResult(null);
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [result]);

  return (
    <TouchableComponent touchable="withoutFeedBack" onPress={hideKeyboard}>
      <View style={styles.container}>
        <View style={styles.container}>
          <Header />
          <View style={styles.inner}>
            <TextView
              style={[styles.text, { fontSize: getSize(Sizes.xLarge) }]}
              textColor={{ color: Colors.white }}
              fontFamily={FontStyles.regular}>
              SIGN UP
            </TextView>
            <View style={styles.textFields}>
              <View style={styles.textField}>
                <TextInput
                  placeholder="Username"
                  maxLength={20}
                  placeholderTextColor={getColor({ color: Colors.black })}
                  onChangeText={(text) => {
                    setUserName(text);
                  }}
                  style={styles.input}
                />
                <Icon iconName="person" />
              </View>
              <View style={styles.textField}>
                <TextInput
                  placeholder="Phone Number"
                  placeholderTextColor={getColor({ color: Colors.black })}
                  keyboardType="email-address"
                  style={styles.input}
                  maxLength={10}
                  onChangeText={(text) => {
                    setPhoneNumber(text);
                  }}
                />
                <Icon iconName="phone" />
              </View>
              <View style={styles.textField}>
                <TextInput
                  placeholder="Password"
                  placeholderTextColor={getColor({ color: Colors.black })}
                  secureTextEntry={true}
                  maxLength={20}
                  style={styles.input}
                  onChangeText={(text) => {
                    setPassword(text);
                  }}
                />
                <Icon iconName="password" />
              </View>
            </View>
            {loading ? (
  <ActivityIndicator size="large" />
) : (
  <>
    <Button
      style={[styles.button]}
      touchableProps={{
        touchable: 'highLight',
        onPress: handleNavigate,
      }}
      textProps={{
        textColor: { color: Colors.black },
        fontFamily: FontStyles.blockBold,
        fontSize: Sizes.large,
      }}
      text="Sign Up"
    />
    {/* Log the result to check if it contains the error message */}
    {/* {console.log(result)} */}
    {result && (
      <TextView
        style={styles.errorText}
        textColor={{ color: Colors.red }}
        fontFamily={FontStyles.regular}>
        {result.msg} 
      </TextView>
    )}
  </>
)}
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
    backgroundColor: getColor({ color: Colors.red }),
    width: Dimensions.get('screen').width,
    height: Dimensions.get('screen').height,
    padding: getSpace(Spaces.medium),
  },
  inner: {
    flex: 1,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    width: '60%',
  },
  text: {
    textAlign: 'center',
  },
  textFields: {
    alignItems: 'center',
  },
  textField: {
    width: '100%',
    backgroundColor: getColor({ color: Colors.white }),
    borderRadius: 10,
    paddingHorizontal: getSpace(Spaces.medium),
    marginVertical: getSpace(Spaces.small),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  input: {
    fontFamily: getName(FontStyles.blockBold),
    width: '80%',
  },
  button: {
    backgroundColor: 'white',
    width: '60%',
    padding: getSpace(Spaces.small),
    borderRadius: 10,
  },
  errorText: {
    textAlign: 'center',
    marginTop: 10,
    color:"#000",
  },
});

export default SignUp;
