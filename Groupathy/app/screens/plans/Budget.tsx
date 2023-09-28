import { TextView } from '../../components/atoms/TextView';
import React, { useEffect, useState } from 'react'
import { Animated, Dimensions, FlatList, ScrollView, StyleSheet, View } from 'react-native'
import { Sizes, getSize } from '../../styles/fonts/sizes';
import { Colors, getColor } from '../../styles/colors';
import { FontStyles, getName } from '../../styles/fonts/names';
import { Spaces, getSpace } from '../../styles/spaces';
import { NavigationProp } from '@react-navigation/native';
import navigateTo from '../../navigation/navigateTo';
import Loader from '../../components/compounds/Loader';
import { Icon } from '../../components/atoms/Icon';
import TouchableComponent from '../../components/molecules/TouchableComponent';
import Card from '../../components/compounds/Card';

type MyComponentProps = {
    navigation: NavigationProp<any>; // Adjust the type if you have a specific navigator
};

const Budget: React.FC<MyComponentProps> = ({navigation}) => {

  const handleNavigate = () => {
    navigateTo({
      navigation,
      path: '/plans/details', // Replace with the desired path
      params: {
        // Include any additional parameters you need
      },
      replace: false, // Set to true if you want to use replace navigation
    });
  };

  const data = [
    { id: '1', title: 'Venue', cost: '8000' },
    { id: '2', title: 'Clothing', cost: '2000' },
    { id: '3', title: 'Photography', cost: '1000' },
    { id: '4', title: 'DJ', cost: '1000' },
    { id: '5', title: 'Transport', cost: '1000' },
    { id: '6', title: 'Total', cost: '100000' }
  ];


  return (
    // <View style={styles.outer}>
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
          Budget Detailing Out
        </TextView>
        <View style={styles.card}>
            <FlatList
                data={data}
                renderItem={({ item , index}) => (
                    <View style={[styles.row, index===data.length -1 && styles.finalRow]}>
                      <TextView style={[styles.text, index===data.length -1 && styles.textFinal]}>{item.title}</TextView>
                      <TextView style={[styles.text, index===data.length -1 && styles.textFinal]}>{item.cost}</TextView>
                    </View>
                  )}
                keyExtractor={(item) => item.id.toString()}
            />
        </View>
        <TouchableComponent touchable="opacity" onPress={handleNavigate} style={styles.inviteButton}>
        <TextView style={{color: getColor({color: Colors.white})}}>Checkout</TextView>
      </TouchableComponent>
    </View>
    // </View>

  )
};

const styles = StyleSheet.create({
    outer: {
        flex:1,
        justifyContent : 'center', 
        alignItems: 'center',
    },
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
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
    card: {
        flex: 0.8,
        borderColor: getColor({color: Colors.grey}),
        borderWidth: getSize(Sizes.minimal),
        marginHorizontal: getSpace(Spaces.large),
        borderRadius: getSize(Sizes.large)
    },
    text: {
        fontSize: getSize(Sizes.largeMedPlus),
        fontFamily: getName(FontStyles.blockReg)
    },
    textFinal: {
        fontSize: getSize(Sizes.large),
        fontFamily: getName(FontStyles.blockBold)
    },
    finalRow: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: getSpace(Spaces.xxLarge),
        backgroundColor: getColor({color: Colors.critical}),
    },
    row: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: getSpace(Spaces.xxLarge),
        paddingVertical: getSpace(Spaces.medium)
    },
    inviteButton: {
        width: getSize(Sizes.xxMega), 
        backgroundColor: getColor({color: Colors.red}), 
        padding: getSpace(Spaces.medium), 
        borderRadius: getSize(Sizes.large), 
        alignItems: 'center', 
        justifyContent: 'center', 
        marginVertical: getSpace(Spaces.medium)
    },
})

export default Budget;