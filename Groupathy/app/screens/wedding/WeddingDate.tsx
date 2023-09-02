import { TextView } from '../../components/atoms/TextView';
import React, { useState } from 'react';
import { Dimensions, ImageBackground, StyleSheet, TextInput, View } from 'react-native';
import { Sizes, getSize } from '../../styles/fonts/sizes';
import { Colors, getColor } from '../../styles/colors';
import { FontStyles, getName } from '../../styles/fonts/names';
import { Spaces, getSpace } from '../../styles/spaces';
import { NavigationProp, useRoute } from '@react-navigation/native';
import navigateTo from '../../navigation/navigateTo';
import { Button } from '../../components/molecules/Button';

type MyComponentProps = {
  navigation: NavigationProp<any>;
};

interface Params {
  name: string;
  eventName: string;
  formData: FormData;
  selectedRole: string;
}

interface FormData {
  guestCount: string;
  location: string;
  date: string;
  budget: string;
}

const WeddingDate: React.FC<MyComponentProps> = ({ navigation }) => {
  const background = require('../../assets/choicebg.png');
  const route = useRoute();
  const { formData,name,eventName,selectedRole } = route.params as Params;
  const [date, setDate] = useState(formData.date);

  const handleNavigate = () => {
    navigateTo({
      navigation,
      path: '/wedding/city',
      params: {
        name: name ,
        eventName: eventName,
        formData: {
          ...formData,
          date: date,
        },
        selectedRole: selectedRole,
      },
      replace: false,
    });
  };

  return (
    <View style={styles.container}>
      <ImageBackground source={background} style={styles.background}>
        <View style={styles.container}>
          <View style={styles.header}>
            <TextView
              style={[styles.logoText, { fontSize: getSize(Sizes.xLarge) }]}
              textColor={{ color: Colors.red }}
              fontFamily={FontStyles.blockBold}>
              LOGO
            </TextView>
          </View>
          <View style={styles.inner}>
            <TextView style={styles.choiceText}>Do you have a wedding date?</TextView>
          </View>
          <View style={styles.textField}>
            <TextInput
              placeholder='DD/MM/YYYY'
              placeholderTextColor={getColor({ color: Colors.grey })}
              style={styles.input}
              value={date}
              onChangeText={(text) => setDate(text)}
            />
          </View>
          <Button
            style={styles.button}
            touchableProps={{
              touchable: 'highLight',
              onPress: handleNavigate,
            }}
            textProps={{
              textColor: { color: Colors.black },
              fontFamily: FontStyles.blockBold,
              fontSize: Sizes.large,
            }}
            text='Set Date'
          />
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: Dimensions.get('screen').width,
    height: Dimensions.get('screen').height,
  },
  background: {
    flex: 1,
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
  logoText: {},
  inner: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '60%',
    paddingVertical: getSpace(Spaces.xLarge),
  },
  choiceText: {
    fontSize: getSize(Sizes.xxLarge),
    textAlign: 'center',
  },
  textField: {
    width: '80%',
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
    width: '100%',
    textAlign: 'center',
  },
  button: {
    backgroundColor: getColor({ color: Colors.white }),
    width: '25%',
    paddingVertical: getSpace(Spaces.small),
    borderRadius: 10,
    borderColor: getColor({ color: Colors.grey }),
    borderWidth: 1,
    marginVertical: getSpace(Spaces.medium),
  },
});

export default WeddingDate;
