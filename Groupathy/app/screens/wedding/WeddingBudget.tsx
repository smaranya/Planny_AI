import { TextView } from '../../components/atoms/TextView';
import React, { useState } from 'react'
import { Dimensions, ImageBackground, StyleSheet, View } from 'react-native'
import { Sizes, getSize } from '../../styles/fonts/sizes';
import { Colors, getColor } from '../../styles/colors';
import { FontStyles } from '../../styles/fonts/names';
import { Spaces, getSpace } from '../../styles/spaces';
import { Button } from '../../components/molecules/Button';
import { NavigationProp, useRoute } from '@react-navigation/native';
import navigateTo from '../../navigation/navigateTo';
import { postUserData } from './api/ApiCall';
import { Header } from '../../components/molecules/Header';
type MyComponentProps = {
    navigation: NavigationProp<any>; // Adjust the type if you have a specific navigator
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
const WeddingBudget: React.FC<MyComponentProps> = ({navigation}) => {
  const [budget,setBudget] = useState('');
  const background = require('../../assets/choicebg.png');
  const route = useRoute();
 
  const { formData,name,eventName,selectedRole } = route.params as Params;
  
 
  const data = {

    formData,name,eventName,selectedRole
  }
 
  const handleNavigate = () => {
    console.log(data);
    postUserData(data);
    navigateTo({
      navigation,
      path: '/plans', // Replace with the desired path
      params: {
        
      },
      replace: false, // Set to true if you want to use replace navigation
    });
  };

  return (
    <View style={styles.container}>
        <ImageBackground source={background} style={styles.background}>
            <View style={styles.container}>
            <Header />
            <View style={styles.inner}>
                <TextView style={styles.choiceText}>
                Budget in Mind?
                </TextView>
            </View>
            <View style={styles.choices}>
            <Button
                style={styles.button}
                touchableProps={{
                    touchable: 'highLight',
                    onPress:() =>{
                        formData.budget = '15 Lakhs'
                        console.log("Budget", budget);
                        handleNavigate()
                    },
                }}
                textProps={{
                  textColor: {color: Colors.black},
                  fontFamily: FontStyles.blockBold,
                  fontSize: Sizes.large,
                }}
                text='15 Lakhs'
            />
            <Button
                style={[styles.button]}
                touchableProps={{
                    touchable: 'highLight',
                    onPress:() =>{
                       formData.budget ='20 Lakhs'
                        handleNavigate()
                    },
                }}
                textProps={{
                  textColor: {color: Colors.black},
                  fontFamily: FontStyles.blockBold,
                  fontSize: Sizes.large,
                }}
                text='20 Lakhs'
            />
            <Button
                style={[styles.button]}
                touchableProps={{
                    touchable: 'highLight',
                    onPress:() =>{
                        formData.budget='25 Lakhs' 
                        handleNavigate()
                    },
                }}
                textProps={{
                  textColor: {color: Colors.black},
                  fontFamily: FontStyles.blockBold,
                  fontSize: Sizes.large,
                }}
                text='25 Lakhs'
            />
            </View>
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
        width: '50%',
        paddingVertical: getSpace(Spaces.xLarge)
    },
    choiceText: {
        fontSize: getSize(Sizes.xxLarge),
        textAlign: 'center',
    },
    choices: {
        flexDirection: 'row',
    },
    button: {
        backgroundColor: getColor({color: Colors.white}),
        width: '25%',
        paddingVertical: getSpace(Spaces.small),
        borderRadius: 10,
        borderColor: getColor({color: Colors.grey}),
        borderWidth: 1,
        marginHorizontal: getSpace(Spaces.small),
    },
})

export default WeddingBudget;


