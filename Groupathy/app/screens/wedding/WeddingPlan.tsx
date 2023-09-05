import { Sizes, getSize } from '../../styles/fonts/sizes';
import { TextView } from '../../components/atoms/TextView';
import React, { useState } from 'react';
import { View, StyleSheet, ImageBackground, Dimensions, TextInput, Keyboard} from 'react-native';
import { Colors, getColor } from '../../styles/colors';
import { FontStyles, getName } from '../../styles/fonts/names';
import { Spaces, getSpace } from '../../styles/spaces';
import { Icon } from '../../components/atoms/Icon';
import { Button } from '../../components/molecules/Button';
import TouchableComponent from '../../components/molecules/TouchableComponent';
import { NavigationProp } from '@react-navigation/native';
import navigateTo from '../../navigation/navigateTo';
import RNDateTimePicker from '@react-native-community/datetimepicker';
import { Header } from '../../components/molecules/Header';

type MyComponentProps = {
  navigation: NavigationProp<any>; // Adjust the type if you have a specific navigator
};

const WeddingPlan : React.FC<MyComponentProps> = ({navigation}) => {
  const background = require('../../assets/weddingplanbg.png');

  const [date, setDate] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);

  const showDatepicker = () => {
    setShowDatePicker(true);
  };
  
  const handleDateChange = (event: any, selectedDate: Date | undefined) => {
    if (selectedDate !== undefined) {
      setDate(selectedDate);
    }
    setShowDatePicker(false);
  };

  const formatDate = (date: Date) => {
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear();
    return `${day}-${month}-${year}`;
  };

  const hideKeyboard = () => {
    Keyboard.dismiss();
  };


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
    <TouchableComponent touchable="withoutFeedBack" onPress={hideKeyboard}>
      <View style={styles.container}>
        <ImageBackground source={background} style={styles.background}>
          <View style={styles.container}>
            <Header />
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
                <View style={[styles.textField, {paddingVertical: getSpace(Spaces.small)}]}>
                  <TouchableComponent touchable="highLight" onPress={showDatepicker} style={styles.input}>
                    <TextView style={styles.input}>{formatDate(date)}</TextView>
                  </TouchableComponent>
                  {showDatePicker && (
                    <RNDateTimePicker
                      mode="date"
                      value={date}
                      display="calendar"
                      onChange={(event: any, selectedDate: Date | undefined) => {
                        handleDateChange(event, selectedDate);
                      }}
                    />
                  )}
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
                    onPress: handleNavigate,
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
