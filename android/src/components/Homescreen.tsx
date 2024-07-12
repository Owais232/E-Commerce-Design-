import React, { useState } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import Imagedesing from './Imagedesign';
import Productimage from './Productimage';
import Tabnavigation from '../Navigation/tabnavigations';

const Homescreen = ({ navigation }) => {
  React.useLayoutEffect(() => {
    navigation.setOptions({ headerShown: false });
}, [navigation]);
  const [btcolor, setcolor] = useState('#fff');
  const [bt1color, set1color] = useState('#fff');

  const handleshoppress = () => {
    setcolor('#E9EFF2');
    set1color('#fff');
  };

  const handleexploreprocess = () => {
    set1color('#E9EFF2');
    setcolor('#fff');
    navigation.navigate("allproducts");
  };

  return (
    <View style={styles.container}>
      <View style={styles.upperScreenContainer}>
        <UpperScreen
          btcolor={btcolor}
          bt1color={bt1color}
          handleshoppress={handleshoppress}
          handleexploreprocess={handleexploreprocess}
        />
      </View>
      <View style={styles.productsContainer}>
        <Products />
      </View>
      <View style={styles.footerContainer}>
        <Footer />
      </View>
      
    </View>
  );
};

const UpperScreen = ({ btcolor, bt1color, handleshoppress, handleexploreprocess }) => (
  <View style={styles.Upperscreen}>
    <View style={styles.upperRow}>
      <View style={styles.locationContainer}>
        <Icon name="map-marker" size={30} color="black" />
        <View style={styles.textContainer}>
          <Text style={styles.discoverText}>Discovering in</Text>
          <Text style={styles.locationText}>Set Your Location</Text>
        </View>
      </View>
      <View style={styles.rightside}>
        <Icon name="shopping-basket" size={25} color="black" />
        <Icon name="bell" size={25} color="black" />
      </View>
    </View>
    <View style={styles.buttonContainer}>
      <TouchableOpacity style={[styles.button, { backgroundColor: btcolor }]} onPress={handleshoppress}>
        <Text style={styles.buttonText}>Shop</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.button, { backgroundColor: bt1color }]} onPress={handleexploreprocess}>
        <Text style={styles.buttonText}>Explore</Text>
      </TouchableOpacity>
    </View>
  </View>
);

const Products = () => (
  <View style={styles.Lowerscreen}>
    <Imagedesing />
    <Productimage />
  </View>
);

const Footer = () => (
  <View style={styles.footer}>
    <Image source={require('../Assets/Images/shopping-bag-cart.jpg')} style={styles.footerImage} />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 7,
    paddingTop: 5,
  },
  upperScreenContainer: {
    flex: 1,
  },
  productsContainer: {
    flex: 4,
  },
  footerContainer: {
    flex: 1,
  },
  Upperscreen: {
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    paddingVertical: 10,
    borderRadius: 15,
  },
  upperRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  Lowerscreen: {
    flex: 1,
  },
  locationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rightside: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  textContainer: {
    marginLeft: 10,
  },
  discoverText: {
    fontSize: 16,
  },
  locationText: {
    fontSize: 14,
    color: 'grey',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  button: {
    paddingVertical: 12,
    paddingHorizontal: 50,
    borderRadius: 25,
    borderWidth: 0.5,
  },
  buttonText: {
    color: 'black',
    fontSize: 18,
  },
  footer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  footerImage: {
    height: '100%',
    width: '100%',
    borderRadius: 10,
  },
});

export default Homescreen;
