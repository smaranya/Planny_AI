import React, { useEffect, useState } from 'react';
import { View, StyleSheet, ImageBackground, FlatList, Text, Image, Dimensions, StatusBar, ActivityIndicator } from 'react-native';
import { TextView } from '../../components/atoms/TextView';
import { Colors, getColor } from '../../styles/colors';
import { FontStyles } from '../../styles/fonts/names';
import { Sizes, getSize } from '../../styles/fonts/sizes';
import { getSpace, Spaces } from '../../styles/spaces';
import { TouchableOpacity } from 'react-native-gesture-handler';
import navigateTo from '../../navigation/navigateTo';
import { NavigationProp, useRoute } from '@react-navigation/native';
import { HomeScreenResponse, User } from './api/Models';
import { fetchUserData, loginUser } from './api/ApiCalls';
import TouchableComponent from '../../components/molecules/TouchableComponent';
type MyComponentProps = {
  navigation: NavigationProp<any>;
};
interface Params{
  name:string,
  phone_number:string,
}

const HomeScreen : React.FC<MyComponentProps> = ({navigation}) => {
  const homeScreenImage = require('../../assets/homeScreen.png');
  const route = useRoute();
  const [isLoading, setIsLoading] = useState(true);
  const [categories, setCategories] = useState<HomeScreenResponse | null>();
  const [userData,setUserData] = useState<User>();
  const {name,phone_number}  = route.params as Params;
  var eventName = '';
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data =  await fetchUserData();
        setCategories(data);
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);
  //console.log(userData);
  const handleNavigate = () => {
    if (categories) {
      navigateTo({
        navigation,
        path: '/wedding',
        params: {
          name: name || 'User',
          eventName: eventName
        },
        replace: false,
      });
    }
  };
   return (
    <View style={styles.container}>
      {/* {isLoading  ? (
    <ActivityIndicator size="large"  /> 
       ) : (   */}
        <>
          <View style={styles.header}>
            {/* ... */}
          </View>
          <TouchableOpacity
            style={styles.touchable}
            onPress={() => {
              console.log('Event Pressed!');
            }}>
            <ImageBackground style={styles.imgContainer} source={homeScreenImage}>
              {/* ... */}
            </ImageBackground>
          </TouchableOpacity>
          <View style={styles.mainTextContainer}>
            {/* Use userData here */}
            <TextView
              style={[styles.imgText, { fontSize: getSize(Sizes.largePlus) }]}
              textColor={{ color: Colors.black }}
              fontFamily={FontStyles.bold}>
              Do Events Yourself
            </TextView>
            <TextView
              style={[styles.imgText, { fontSize: getSize(Sizes.medium) }]}
              textColor={{ color: Colors.grey }}
              fontFamily={FontStyles.blockBold}>
             {name}
            </TextView>
          </View>
         
          <View style={styles.categoryContainer}>
        {categories?.results.map((category: { description: string ; image: string; }, index: number) => (
             <TouchableComponent touchable="opacity" 
           
              key={index}
              style={styles.touchableCategory}
              onPress={() => {
               eventName = category.description
               handleNavigate();
              }}>
              <View style={styles.gridItem}>
                <Image source={{ uri: category.image }} style={styles.gridImage}  />
                <TextView style={[styles.categoryText, { fontSize: getSize(Sizes.small) }]}>
                  {category.description}
                </TextView>
              </View>
              </TouchableComponent>
          ))}
      </View>
        </>
      
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
  categoryContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    paddingHorizontal: getSpace(Spaces.medium),
    marginTop: getSpace(Spaces.medium),
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