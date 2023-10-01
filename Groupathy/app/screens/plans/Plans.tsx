import { TextView } from '../../components/atoms/TextView';
import React, { useEffect, useState } from 'react'
import { Animated, Dimensions, FlatList, ScrollView, Share, StyleSheet, View } from 'react-native'
import { Sizes, getSize } from '../../styles/fonts/sizes';
import { Colors, getColor } from '../../styles/colors';
import { FontStyles } from '../../styles/fonts/names';
import { Spaces, getSpace } from '../../styles/spaces';
import { NavigationProp, useRoute } from '@react-navigation/native';
import navigateTo from '../../navigation/navigateTo';
import Loader from '../../components/compounds/Loader';
import { Icon } from '../../components/atoms/Icon';
import TouchableComponent from '../../components/molecules/TouchableComponent';
import Card from '../../components/compounds/Card';
import { gptData } from '../wedding/api/ApiCall';
import routes from 'app/navigation/routes';
import { WeddingEvent, WeddingPlanningResponse } from '../wedding/api/Model';

type MyComponentProps = {
    navigation: NavigationProp<any>; // Adjust the type if you have a specific navigator
};
interface Params{
  budget : string,
  name : string
}


const Plans: React.FC<MyComponentProps> = ({navigation}) => {
 
    


  const handleNavigate = (event: WeddingEvent) => {
   
    navigateTo({
      navigation,
      path: '/plans/details', // Replace with the desired path
      params: {
        name : name,
       event : event,
       jsonData : data
      },
      replace: false, // Set to true if you want to use replace navigation
    });
  };
  const route = useRoute();
  const { budget,name } = route.params as Params;
  
  const [loading, setLoading] = useState(true);
  const [visibleCards, setVisibleCards] = useState<number>(-1);
  const [data, setData] = useState<WeddingPlanningResponse>();
  const events = data?.events;
  useEffect(() => {
    const loadDataAndTimer = async () => {
      // Simulate loading the data asynchronously
      await new Promise((resolve) => setTimeout(resolve, 2000)); // Adjust the delay as needed
  
      // Fetch data when the timeout is working
      // const jsonData = gptData(budget);
      const jsonData = {

        events: [
          {
            key: 1,
            event: "Sangeet Ceremony",
            date: "2023-11-10",
            venue: "Grand Banquet Hall",
            time: "6:00 PM",
            budget: 800000
          },
          {
            key: 2,
            event: "Mehndi Ceremony",
            date: "2023-11-11",
            venue: "Outdoor Garden",
            time: "2:00 PM",
            budget: 600000
          },
          {
            key: 3,
            event: "Haldi Ceremony",
            date: "2023-11-12",
            venue: "Family Home",
            time: "10:00 AM",
            budget: 400000
    
          }
        ]
      }
      // Update the 'data' state with the fetched data
      setData( await jsonData);
  
      setLoading(false);
      setVisibleCards(0);
  
      if (visibleCards >= 0 && visibleCards <  ( await jsonData).events.length - 1) {
        const timer = setTimeout(() => {
          setVisibleCards((prevCount) => prevCount + 1);
        }, 500);
  
        return () => {
          clearTimeout(timer);
        };
      }
    };
  
    loadDataAndTimer();
  }, [budget, visibleCards]);

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
     
        </View>
        <TextView style={styles.title}>
          Let's Plan the Wedding
        </TextView>
        {/* <ScrollView contentContainerStyle={styles.scrollContainer}> */}
        <View style={styles.cards}>
              <FlatList
                data={events}
                keyExtractor={(item) => item.key.toString()} // Using key as a string
                renderItem={({ item }) => (
                  <Card
                    imageSource={require('../../assets/wedding.png')} // Assuming a common image for all events
                    title={item.event}
                    cost={item.budget.toString() } // Converting budget to string
                    guestCount={item.date} // Using date as guest count for demonstration
                    onPress={()=> {
                      handleNavigate(item)
                    }}
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