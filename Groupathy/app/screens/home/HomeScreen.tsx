import React from 'react';
import { View, StyleSheet, ImageBackground, FlatList, Text, Image, Dimensions } from 'react-native';
import { TextView } from '../../components/atoms/TextView';
import { Colors } from '../../styles/colors';
import { FontStyles } from '../../styles/fonts/names';
import { Sizes, getSize } from '../../styles/fonts/sizes';
import { getSpace, Spaces } from '../../styles/spaces';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Icon } from '../../components/atoms/Icon';

const HomeScreen = () => {
  const homeScreenImage = require('../../assets/homeScreen.png');
  
  interface Item {
    id: string;
    image: any;
    description: string;
  }

  const data: Item[] = [
    { id: '1', image: require('../../assets/wedding.png'), description: 'Wedding' },
    { id: '2', image: require('../../assets/travel.png'), description: 'Travel' },
    { id: '3', image: require('../../assets/career.png'), description: 'Career' },
    { id: '4', image: require('../../assets/birthday.png'), description: 'Birthday' },
    { id: '5', image: require('../../assets/wedding.png'), description: 'Wedding' },
    { id: '6', image: require('../../assets/travel.png'), description: 'Travel' },
  ];  

  const renderItem = ({item}: {item: Item}) => (
    <TouchableOpacity 
    style={styles.touchableCategory}
    onPress={() => console.log("Image Pressed!")}>
      <View style={styles.gridItem}>
      <Image source={item.image} style={styles.gridImage} />
      <TextView style={[styles.categoryText, {fontSize: getSize(Sizes.small)}]}
      fontFamily={FontStyles.blockBold}>{item.description}</TextView>
      </View>
    </TouchableOpacity>
  );

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
            Hello, User</TextView>
          <TouchableOpacity onPress={() => console.log("Menu Pressed!")}>
            <Icon 
              iconName={'menu'}
            />
          </TouchableOpacity>
        </View>
        </View>
        <TouchableOpacity 
            style = {styles.touchable}
            onPress={()=>{console.log("Image Pressed!")}}>
        <ImageBackground style={styles.imgContainer} source={homeScreenImage}>
        <View style={styles.textContainer}>
          <TextView
            style={[styles.imgText, {fontSize: getSize(Sizes.largeMedPlus)}]}
            textColor={{ color: Colors.black }}
            fontFamily={FontStyles.bold}>
            Do Events Yourself
          </TextView>
          <TextView
            style={[styles.imgText, {fontSize: getSize(Sizes.medium)}]}
            textColor={{ color: Colors.black }}
            fontFamily={FontStyles.blockReg}>
            Some Details about the Event
          </TextView>
        </View>
        </ImageBackground>
        </TouchableOpacity>
        <View style={styles.mainTextContainer}>
          <TextView
            style={[styles.imgText, {fontSize: getSize(Sizes.largePlus)}]}
            textColor={{ color: Colors.black }}
            fontFamily={FontStyles.bold}>
            Do Events Yourself
          </TextView>
          <TextView
            style={[styles.imgText, {fontSize: getSize(Sizes.medium)}]}
            textColor={{ color: Colors.grey }}
            fontFamily={FontStyles.blockBold}>
            Some Details about the Event
          </TextView>
        </View>
        <FlatList
          style={styles.categoryList}
          contentContainerStyle={{alignItems: 'flex-start', justifyContent: 'center'}}
          data={data}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          numColumns={3}
        />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-start',
    backgroundColor: '#ffffff',
    maxWidth: Dimensions.get('screen').width,
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
  menuIcon: {
    width: '20%',
    height: '20%',
    resizeMode: 'contain',
  },
  imgContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-start',
    marginTop: getSpace(Spaces.medium),
    width: '100%',
    height: '100%',
  },
  categoryList: {
    width: '100%',
    height: '100%',
  },
  textContainer: {
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    width: '40%',
    marginVertical: getSpace(Spaces.medium),
    paddingLeft: getSpace(Spaces.medium),
    rowGap: 10
  },
  mainTextContainer: {
    height: Dimensions.get('screen').height*0.1,
    justifyContent: 'center',
    paddingHorizontal: getSpace(Spaces.medium) 
  },
  imgText: {
    textAlign: 'left',
  },
  categoryText: {
    textAlign: 'center',
    width: '100%',
    fontWeight: 'bold',
    marginTop: getSpace(Spaces.xSmall)
  },
  touchable: {
    width: Dimensions.get('screen').width,
    paddingHorizontal: getSpace(Spaces.medium),
    height: Dimensions.get('screen').height/3,
  },
  touchableCategory: {
    width: Dimensions.get('screen').width/3,
    height: Dimensions.get('screen').height/6,
    paddingHorizontal: getSpace(Spaces.medium)
  },
  gridItem: {
    // flex: 1,
    width: '100%',
    height: '100%',
    alignItems: 'flex-start',
  },
  gridImage: {
    width: '100%',
    height: '80%',
    borderRadius: 10
  },
});

export default HomeScreen;