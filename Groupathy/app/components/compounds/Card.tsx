import React from 'react';
import { View, Image, StyleSheet, ImageSourcePropType, TextStyle, Dimensions } from 'react-native';
import { TextView } from '../atoms/TextView';
import TouchableComponent from '../molecules/TouchableComponent';
import { Spaces, getSpace } from '../../styles/spaces';
import { FontStyles, getName } from '../../styles/fonts/names';
import { Sizes, getSize } from '../../styles/fonts/sizes';
import { Colors, getColor } from '../../styles/colors';
import { Icon } from '../atoms/Icon';

interface CardProps {
  imageSource: ImageSourcePropType;
  title: string;
  cost: string;
  guestCount: string;
  onPress: () => void;
}

const Card: React.FC<CardProps> = ({ imageSource, title, cost, guestCount, onPress }) => {
  return (
    <View style={styles.card}>
      <Image source={imageSource} style={styles.image} />
      <View style={styles.cardDetails}>
        <TextView style={styles.title}>{title}</TextView>
        <TextView style={styles.description}>{'\u20B9'}{cost}</TextView>
        <TextView style={[styles.description, {color: getColor({color: Colors.grey})}]}>{guestCount}</TextView>
        <TouchableComponent touchable="opacity" style={styles.button} onPress={onPress}>
          <TextView style={styles.buttonText}>More Details</TextView>
          <Icon iconName="navigate-next"/>
        </TouchableComponent>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    borderRadius: getSize(Sizes.small),
    width: '100%',
    height: Dimensions.get('screen').height/5,
    padding: getSpace(Spaces.small),
  },
  image: {
    width: '50%',
    height: '100%',
    borderRadius: getSize(Sizes.small),
    marginRight: getSpace(Spaces.medium)
  },
  cardDetails: {
    flex: 1,
    justifyContent: 'space-evenly'
  },
  title: {
    fontFamily: getName(FontStyles.blockBold),
    fontSize: getSize(Sizes.largePlus),
  },
  description: {
    fontFamily: getName(FontStyles.blockBold),
    fontSize: getSize(Sizes.small)
  },
  button: {
    flexDirection: 'row',
    borderRadius: getSize(Sizes.small),
    borderColor: getColor({color: Colors.black}),
    borderWidth: getSize(Sizes.minimal),
    marginTop: getSpace(Spaces.small),
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonText: {
    fontFamily: getName(FontStyles.blockBold),
    textAlign: 'center',
  },
});

export default Card;
