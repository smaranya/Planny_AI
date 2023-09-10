import { TextView } from '../../components/atoms/TextView';
import React, { useEffect, useState } from 'react'
import { Animated, Dimensions, FlatList, ScrollView, StyleSheet, View } from 'react-native'
import { Sizes, getSize } from '../../styles/fonts/sizes';
import { Colors, getColor } from '../../styles/colors';
import { FontStyles } from '../../styles/fonts/names';
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

  const data = [
    { id: '1', title: 'Haldi', cost: '100', guestCount: '2', imageSource: require('../../assets/wedding.png') },
    { id: '2', title: 'Mehendi', cost: '150', guestCount: '3', imageSource: require('../../assets/wedding.png') },
    { id: '3', title: 'Sangeet', cost: '200', guestCount: '4', imageSource: require('../../assets/wedding.png')}
  ];

  const [loading, setLoading] = useState(true);

  const [visibleCards, setVisibleCards] = useState<number>(-1);

  useEffect(() => {
    const loadingTimer = setTimeout(() => {
      setLoading(false);
      setVisibleCards(0);
    }, 6000);

    return () => clearTimeout(loadingTimer);
  }, []);

  useEffect(() => {
    if (visibleCards >= 0 && visibleCards < data.length - 1) {
      const timer = setTimeout(() => {
        setVisibleCards((prevCount) => prevCount + 1);
      }, 500);

      return () => {
        clearTimeout(timer);
      };
    }
  }, [visibleCards]);

  return (
    <View style={styles.outer}>
        <View style={styles.container}>
        {loading? 
        (<Loader />) :(
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
        {/* <ScrollView contentContainerStyle={styles.scrollContainer}> */}
        <View style={styles.cards}>
        {/* <FlatList
        data={data.slice(0, visibleCards + 1)}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Card
            imageSource={item.imageSource}
            title={item.title}
            cost={item.cost}
            guestCount={item.guestCount}
            onPress={() => {
              // Handle card press
            }}
          />
        )}
        /> */}
         <FlatList
              data={data.slice(0, visibleCards + 1)}
              keyExtractor={(item) => item.id}
              renderItem={({ item, index }) => (
                  <Card
                    imageSource={item.imageSource}
                    title={item.title}
                    cost={item.cost}
                    guestCount={item.guestCount}
                    onPress={handleNavigate}
                  />
                )}
          />
        </View>
        {/* </ScrollView> */}
        </View>)}
        </View>
    </View>

  )
};

const styles = StyleSheet.create({
    outer: {
        flex:1,
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
      margin: getSpace(Spaces.medium),
      width: '100%',
      height: '100%',
    }
})

export default Plans;