import { TextView } from '../../components/atoms/TextView';
import React, { useEffect, useState } from 'react'
import { Dimensions, ScrollView, StyleSheet, View } from 'react-native'
import { Sizes, getSize } from '../../styles/fonts/sizes';
import { Colors, getColor } from '../../styles/colors';
import { FontStyles } from '../../styles/fonts/names';
import { Spaces, getSpace } from '../../styles/spaces';
import { NavigationProp } from '@react-navigation/native';
import navigateTo from '../../navigation/navigateTo';
import Loader from '../../components/compounds/Loader';
import { Icon } from '../../components/atoms/Icon';
import TouchableComponent from '../../components/molecules/TouchableComponent';
import HalfCard from '../../components/wrappers/HalfCard';
import Card from '../../components/compounds/Card';

type MyComponentProps = {
    navigation: NavigationProp<any>; // Adjust the type if you have a specific navigator
};

const Plans: React.FC<MyComponentProps> = ({navigation}) => {

  const handleNavigate = () => {
    navigateTo({
      navigation,
      path: '/wedding/date', // Replace with the desired path
      params: {
        // Include any additional parameters you need
      },
      replace: false, // Set to true if you want to use replace navigation
    });
  };

  return (
    <View style={styles.outer}>
        <Loader />
        <View style={styles.container}>
        <View style={styles.header}>
        <View>
          <TextView
            style={[styles.logoText, { fontSize: getSize(Sizes.large)}]}
            textColor={{color: Colors.red}}
            fontFamily={FontStyles.blockBold}>
            LOGO
          </TextView>
        </View>
        <View style={styles.right}>
          <TextView 
          style={[styles.username, {fontSize: getSize(Sizes.large)}]}
          textColor={{color: Colors.black}}
          fontFamily={FontStyles.blockReg}>
            Hello, User</TextView>
          <TouchableComponent touchable="opacity" onPress={() => console.log("Menu Pressed!")}>
            <Icon 
              iconName={'menu'}
            />
          </TouchableComponent>
        </View>
        </View>
        <TextView style={styles.title}>
          Let's Plan the Wedding
        </TextView>
        <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.cards}>
        <Card
        imageSource={require('../../assets/wedding.png')}
        title="Haldi"
        cost="30000"
        guestCount="100 Guests"
        onPress={() => {
          // Handle the "More Details" button click here
        }}
      />
        </View>
        </ScrollView>
        </View>
    </View>

  )
};

const styles = StyleSheet.create({
    outer: {
        flex: 1,
        justifyContent : 'center', 
        alignItems: 'center'
    },
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        width: Dimensions.get('screen').width,
        height: Dimensions.get('screen').height
    },
    scrollContainer: {
      flexGrow: 1,
      justifyContent: 'flex-start',
      width: Dimensions.get('screen').width,
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
        // Apply logo text styles here
    },
    right: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    username: {
        // Username styles here
    },
    title: {
      width: '50%',
      fontSize: getSize(Sizes.xxLarge),
      textAlign: 'center',
      color: getColor({color: Colors.red}),
      marginVertical: getSpace(Spaces.largePlus)
    },
    cards: {
      margin: getSpace(Spaces.small),
    }
})

export default Plans;