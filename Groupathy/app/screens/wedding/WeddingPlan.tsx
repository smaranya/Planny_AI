import React, { useState } from 'react';
import {
  View,
  StyleSheet,
  ImageBackground,
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

import { useRoute } from '@react-navigation/native';

type MyComponentProps = {
  navigation: NavigationProp<any>; // Adjust the type if you have a specific navigator
};

interface Params {
  name: string;
  eventName: string;
}


const WeddingPlan: React.FC<MyComponentProps> = ({ navigation }) => {
  const [formData, setFormData] = useState({
    guestCount: '',
    location: '',
    date: '',
    budget: '',
  });

  const background = require('../../assets/weddingplanbg.png');
  const route = useRoute();
  const { name, eventName } = route.params as Params

  const hideKeyboard = () => {
    Keyboard.dismiss();
  };

  const handleNavigate = () => {
    navigateTo({
      navigation,
      path: '/wedding/role', 
      params: {
        
        formData: formData, 
        userName: name,
        eventName: eventName,
      },
      replace: false, 
    });
  };

  const handleChangeText = (field: string, value: string) => {
    setFormData({
      ...formData,
      [field]: value,
    });
  };

  return (
    <TouchableComponent touchable="withoutFeedBack" onPress={hideKeyboard}>
      <View style={styles.container}>
        <ImageBackground source={background} style={styles.background}>
          <View style={styles.container}>
            <View style={styles.textField}>
              <TextInput
                placeholder="Guest Count"
                placeholderTextColor={getColor({ color: Colors.black })}
                keyboardType="numeric"
                style={styles.input}
                value={formData.guestCount}
                onChangeText={(number) => handleChangeText('guestCount', number)} // Update guestCount in state
              />
              <Icon iconName="group" />
            </View>
            <View style={styles.textField}>
              <TextInput
                placeholder="Location"
                placeholderTextColor={getColor({ color: Colors.black })}
                style={styles.input}
                value={formData.location}
                onChangeText={(text) => handleChangeText('location', text)} // Update location in state
              />
              <Icon iconName="location-on" />
            </View>
            <View style={styles.textField}>
              <TextInput
                placeholder="Date"
                placeholderTextColor={getColor({ color: Colors.black })}
                style={styles.input}
                value={formData.date}
                onChangeText={(text) => handleChangeText('date', text)} // Update date in state
              />
              <Icon iconName="today" />
            </View>
            <View style={styles.textField}>
              <TextInput
                placeholder="Budget Range"
                placeholderTextColor={getColor({ color: Colors.black })}
                keyboardType="numeric"
                style={styles.input}
                value={formData.budget}
                onChangeText={(text) => handleChangeText('budget', text)} // Update budget in state
              />
              <Icon iconName="payments" />
            </View>
            <Button
              style={[styles.button]}
              touchableProps={{
                touchable: 'highLight',
                onPress: () => {
                  handleNavigate();
                },
              }}
              textProps={{
                textColor: { color: Colors.black },
                fontFamily: FontStyles.blockBold,
                // fontSize: Sizes.large,
              }}
              text="Get Started"
            />
          </View>
        </ImageBackground>
      </View>
    </TouchableComponent>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: Dimensions.get('screen').width,
    height: Dimensions.get('screen').height,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    width: Dimensions.get('screen').width,
    height: Dimensions.get('screen').height,
  },
  textField: {
    width: '100%',
    backgroundColor: getColor({ color: Colors.white }),
    borderRadius: 10,
    paddingHorizontal: getSpace(Spaces.medium),
    marginVertical: getSpace(Spaces.small),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
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
});

export default WeddingPlan;
