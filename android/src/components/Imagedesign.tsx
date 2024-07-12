import React from "react";
import { Image, ScrollView, StyleSheet, Text, View, TouchableOpacity } from "react-native";

const Imagedesing = () => {
  const images = [
    {id:"1", name: 'Garden', source: require('../Assets/Images/first.jpeg') },
    {id:"2", name: 'Beach', source: require('../Assets/Images/second.jpeg') },
    {id:"3", name: 'Mountains', source: require('../Assets/Images/third.jpeg') },
    {id:"4", name: 'Garden', source: require('../Assets/Images/second.jpeg') },
    {id:"5", name: 'Mountains', source: require('../Assets/Images/first.jpeg') },
  ];

  const handleImagePress = (name:any) => {
    console.log(`Pressed image: ${name}`);
  };

  return (
    <ScrollView horizontal contentContainerStyle={styles.scrollView}>
      {images.map((image, index) => (
        <TouchableOpacity key={index} style={styles.category} onPress={() => handleImagePress(image.name)}>
          <Image source={image.source} style={styles.categoryImage} />
          <Text style={styles.categoryText}>{image?.name ||""}</Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({

  scrollView: {
    paddingVertical: 10,
  },
  category: {
    marginTop: 15,
    marginRight: 16,
  },
  categoryImage: {
    width: 100,
    height: 100,
    borderRadius: 20,
  },
  categoryText: {
    marginTop: 8,
    fontSize: 14,
    textAlign: 'center',
  },
});

export default Imagedesing;
