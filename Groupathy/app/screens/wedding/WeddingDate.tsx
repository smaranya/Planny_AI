import { TextView } from '../../components/atoms/TextView';
import React, { useState } from 'react'
import { Dimensions, ImageBackground, StyleSheet, View } from 'react-native'
import { Sizes, getSize } from '../../styles/fonts/sizes';
import { Colors, getColor } from '../../styles/colors';
import { FontStyles, getName } from '../../styles/fonts/names';
import { Spaces, getSpace } from '../../styles/spaces';
import { NavigationProp } from '@react-navigation/native';
import navigateTo from '../../navigation/navigateTo';
import { Button } from '../../components/molecules/Button';
import RNDateTimePicker from '@react-native-community/datetimepicker';
import TouchableComponent from '../../components/molecules/TouchableComponent';
import { Header } from '../../components/molecules/Header';

type MyComponentProps = {
    navigation: NavigationProp<any>; // Adjust the type if you have a specific navigator
};

const WeddingDate: React.FC<MyComponentProps> = ({navigation}) => {
  const background = require('../../assets/choicebg.png');
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

  const handleNavigate = () => {
    navigateTo({
      navigation,
      path: '/wedding/city', // Replace with the desired path
      params: {
        // Include any additional parameters you need
      },
      replace: false, // Set to true if you want to use replace navigation
    });
  };

  const formatDate = (date: Date) => {
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear();
    return `${day}-${month}-${year}`;
  };

  return (
    <View style={styles.container}>
        <ImageBackground source={background} style={styles.background}>
            <View style={styles.container}>
            <Header />
            <View style={styles.inner}>
                <TextView style={styles.choiceText}>
                Do you have a wedding date?
                </TextView>
            </View>
            <View style={styles.textField}>
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
            </View>
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
                text='Set Date'
            />
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
    textField: {
        width: '80%',
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
        width: '100%',
        padding: getSpace(Spaces.small),
        textAlign: 'center'
    },
    button: {
        backgroundColor: getColor({color: Colors.white}),
        width: '25%',
        paddingVertical: getSpace(Spaces.small),
        borderRadius: 10,
        borderColor: getColor({color: Colors.grey}),
        borderWidth: 1,
        marginVertical: getSpace(Spaces.medium),
    },
})

export default WeddingDate;