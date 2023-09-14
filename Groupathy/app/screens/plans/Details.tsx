import { TextView } from '../../components/atoms/TextView';
import React, { useState } from 'react'
import { Dimensions, Image, ScrollView, StyleSheet, View } from 'react-native'
import { NavigationProp } from '@react-navigation/native';
import navigateTo from '../../navigation/navigateTo';
import { Icon } from '../../components/atoms/Icon';
import TouchableComponent from '../../components/molecules/TouchableComponent';
import { FontStyles, getName } from '../../styles/fonts/names';
import { Colors, getColor } from '../../styles/colors';
import { Sizes, getSize } from '../../styles/fonts/sizes';
import { Spaces, getSpace } from '../../styles/spaces';
import Card from '../../components/compounds/Card';

type MyComponentProps = {
    navigation: NavigationProp<any>;
};

const Details: React.FC<MyComponentProps> = ({navigation}) => {

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

  const [value, setValue] = useState(0);

  const increaseValue = () => {
    setValue(value + 1);
  };

  const decreaseValue = () => {
    if (value > 0) {
      setValue(value - 1);
    }
  };

  return (
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
            Hello, </TextView>
          <TouchableComponent onPress={() => console.log("Menu Pressed!")}>
            <Icon 
              iconName={'menu'}
            />
          </TouchableComponent>
        </View>
        </View>
    {/* <View style={styles.card}> */}
    <View style={styles.card}>
        <Image
        source={require('../../assets/wedding.png')}
        style={styles.image}
        />
       <View style={styles.overlay}>
        <View style={styles.titleDescriptionCard}>
            <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <TextView style={styles.title}>Card Title</TextView>
            <TextView style={[styles.title, {fontSize: getSize(Sizes.large)}]}>{'\u20B9'}50,000</TextView>
            </View>
          <TextView style={styles.description}>Description goes here</TextView>
        </View>
      </View>
    </View>
    <ScrollView style={{width: '100%'}}>
    <View style={{width: '100%', justifyContent: 'center', borderStyle: 'dotted', borderBottomWidth: getSize(Sizes.minimal)}}>
    <View style={styles.valueContainer}>
        <View>
        <TextView style={styles.title}>Recommended</TextView>
        <TextView style={[styles.title, {fontSize: getSize(Sizes.large)}]}>{value} Guests</TextView>
        </View>
        <View style={styles.valueChange}>
        <TouchableComponent touchable="opacity" onPress={decreaseValue} style={styles.button}>
          <Icon iconName="remove" iconSize={getSize(Sizes.medium)}/>
        </TouchableComponent>
        <TextView style={styles.value}>{value}</TextView>
        <TouchableComponent touchable="opacity" onPress={increaseValue} style={styles.button}>
          <Icon iconName="add" iconSize={getSize(Sizes.medium)}/>
        </TouchableComponent>
        </View>
    </View>
      <TouchableComponent touchable="opacity" onPress={()=>(console.log("Send Invitation"))} style={styles.inviteButton}>
        <TextView style={{color: getColor({color: Colors.white})}}>Send Invitation</TextView>
      </TouchableComponent>
    </View>
      <View style={styles.iconContainer}>
        <View style={styles.iconGroup}>
        <TouchableComponent touchable='highLight' style={styles.icon}>
        <Icon iconName={'location-on'} iconColor={{color: Colors.white}}/>
        </TouchableComponent>
        <TextView style={[styles.description, styles.iconText]}>Near Me</TextView>
        </View>
        <View style={styles.iconGroup}>
        <TouchableComponent touchable='highLight' style={styles.icon}>
        <Icon iconName={'percent'} iconColor={{color: Colors.white}}/>
        </TouchableComponent>
        <TextView style={[styles.description, styles.iconText]}>Top Offers</TextView>
        </View>
        <View style={styles.iconGroup}>
        <TouchableComponent touchable='highLight' style={styles.icon}>
        <Icon iconName={'thumb-up'} iconColor={{color: Colors.white}}/>
        </TouchableComponent>
        <TextView style={[styles.description, styles.iconText]}>Popular</TextView>
        </View>
      </View>
      <View style={styles.explore}>
        <TextView style={styles.title}>Vendors to Explore</TextView>
        <Card 
          imageSource={require('../../assets/wedding.png')}
          title={"Sangam event"}
          cost={"30000"}
          guestCount={value.toString()}
          onPress={handleNavigate}
        />
        <Card 
          imageSource={require('../../assets/wedding.png')}
          title={"Sangam event"}
          cost={"30000"}
          guestCount={value.toString()}
          onPress={handleNavigate}
        />
      </View>
      </ScrollView>
    </View>
  )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: '#ffffff',
        width: Dimensions.get('screen').width,
        height: Dimensions.get('screen').height,
        paddingHorizontal: getSize(Sizes.medium)
    },
    card: {
        width: '100%',
        height: Dimensions.get('screen').height/3,
        alignItems: 'center',
        justifyContent: 'space-evenly',
        borderRadius: getSize(Sizes.large),
        backgroundColor: '#FFFFFF',
        margin: getSpace(Spaces.medium),
        elevation: getSize(Sizes.small),
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
      overlay: {
        position: 'absolute',
        width: '98%',
        backgroundColor: getColor({color: Colors.white}),
        padding: getSpace(Spaces.medium),
        bottom: getSpace(Spaces.small),
        borderRadius: getSize(Sizes.small),
        elevation: getSpace(Spaces.large),
      },
      titleDescriptionCard: {
        // marginBottom: 8,
      },
      title: {
        fontFamily: getName(FontStyles.blockBold),
        fontSize: getSize(Sizes.largePlus),
        color: getColor({color: Colors.black}),
      },
      description: {
        fontFamily: getName(FontStyles.blockReg),
        fontSize: getSize(Sizes.medium),
        color: getColor({color: Colors.grey}),
      },
      image: {
        width: '100%',
        height: '100%',
      },
      valueContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
        paddingVertical: getSpace(Spaces.medium)
      },
      valueChange: {
        flexDirection: 'row', 
        alignItems: 'center',
        justifyContent: 'space-evenly',
        backgroundColor: getColor({color: Colors.pink}),
        borderRadius: getSize(Sizes.small),
        height: getSize(Sizes.xxLarge),
        width: getSize(Sizes.mega),
        borderColor: getColor({color: Colors.red}),
        borderWidth: getSize(Sizes.minimal)
      },
      button: {
        width: getSize(Sizes.xLarge),
        height: getSize(Sizes.xLarge),
        justifyContent: 'center',
        alignItems: 'center',
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
      value: {
        fontFamily: getName(FontStyles.blockBold),
        fontSize: getSize(Sizes.largeMedPlus),
        color: getColor({color: Colors.black}),
      },
      iconContainer: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        width: '100%',
        marginVertical: getSpace(Spaces.large),
      },
      icon: {
        backgroundColor: getColor({color: Colors.red}), 
        borderRadius: getSize(Sizes.xLarge), 
        alignItems: 'center', 
        padding: getSpace(Spaces.small)
      },
      iconText: {
        color: getColor({color: Colors.black}), 
        fontFamily: getName(FontStyles.blockBold)
    },
    iconGroup: {
        width: '20%', 
        alignItems: 'center'
    },
    explore: {
      alignItems: 'flex-start',
      width: '100%',
      marginBottom: getSpace(Spaces.medium)
    }
})

export default Details;