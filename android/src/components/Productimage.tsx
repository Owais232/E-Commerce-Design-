import React, { useState } from 'react';
import { FlatList, Image, Modal, StyleSheet, Text, TouchableOpacity, View } from "react-native";

const Productimage = () => {


  const[image,setimage]=useState(null);
  const[name,setname]=useState(null);
  const images = [
    { id: 1, name: 'Camera', source: require('../Assets/Images/camera.jpeg') },
    { id: 2, name: 'Jogger', source: require('../Assets/Images/jogger.jpeg') },
    { id: 3, name: 'lamp', source: require('../Assets/Images/lamp.jpeg') },
    { id: 4, name: 'shoes', source: require('../Assets/Images/shoes.jpeg') },
    { id: 5, name: 'Jogger', source: require('../Assets/Images/jogger.jpeg') },

    { id: 12, name: 'search', source: require('../Assets/Images/search.png') },

  ];

  const renderImageItem = ({item}) => (
    <TouchableOpacity style={styles.category} onPress={() => handleImagePress(item)}>
      <Image source={item.source} style={styles.categoryImage} />
      <Text style={styles.categoryText}>{item.name}</Text>
    </TouchableOpacity>
  );

  const handleImagePress = (items: any) => {
    
    setimage(items.source);
    setname(items.name);
  };

  return (
    <View>
    <FlatList
      data={images}
      renderItem={renderImageItem}
      keyExtractor={item => item.id.toString()}
      horizontal={false} 
      numColumns={3}    
      contentContainerStyle={styles.flatListContainer}
    />
    {image && (
      <Modal
      transparent={true}
      animationType="fade"
      visible={true}
      onRequestClose={() =>setimage(null)} 
    >
      <View style={styles.modalBackground}>
        <View style={styles.modalContainer}>
          <Image source={image} style={styles.fullImage} />
          <Text style={styles.categoryText}>{name}</Text>
          <TouchableOpacity style={styles.closeButton} onPress={() => setimage(null)}>
            <Text style={styles.closeButtonText}>Close</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
    )}
    </View>
  );
};

const styles = StyleSheet.create({
  flatListContainer: {
    marginTop: 15,
    paddingHorizontal: 8,
  },
  category: {
    flex: 1,
    alignItems: 'center',
    marginBottom: 20,
    borderRadius:10
  },
  categoryImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  categoryText: {
    marginTop: 8,
    fontSize: 14,
    textAlign: 'center',
  },
  modalBackground: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
    width: '80%',
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
  fullImage: {
    width: '100%',
    height: 200,
    resizeMode: 'contain',
  },
  closeButton: {
    marginTop: 10,
    padding: 10,
    backgroundColor: '#007BFF',
    borderRadius: 5,
  },
  closeButtonText: {
    color: 'white',
    fontSize: 16,
  },
});

export default Productimage;
