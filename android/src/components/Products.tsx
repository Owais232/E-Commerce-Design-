import { Image, StyleSheet, View, Text, ScrollView, TouchableOpacity } from "react-native";

const Products = () => {

    const productsdetails = [
        { id: "1", price: '1000', Description: 'Lamp view Items', source: require('../Assets/Images/lamp.jpeg') },
        { id: "2", price: '1000', Description: 'Lamp view Items', source: require('../Assets/Images/shoes.jpeg') },
        { id: "3", price: '1000', Description: 'Lamp view Items', source: require('../Assets/Images/watch.jpeg') },
        { id: "4", price: '1000', Description: 'Lamp view Items', source: require('../Assets/Images/jogger.jpeg') },
        { id: "5", price: '1000', Description: 'Lamp view Items', source: require('../Assets/Images/camera.jpeg') },
        { id: "6", price: '1000', Description: 'Lamp view Items', source: require('../Assets/Images/watch.jpeg') },
        { id: "7", price: '1000', Description: 'Lamp view Items', source: require('../Assets/Images/jogger.jpeg') },
        { id: "8", price: '1000', Description: 'Lamp view Items', source: require('../Assets/Images/shoes.jpeg') },
        { id: "9", price: '1000', Description: 'Lamp view Items', source: require('../Assets/Images/lamp.jpeg') },
    ]
    return (

        <ScrollView style={styles.scrollview} >
            {productsdetails.map(product=>(
                 <TouchableOpacity key={product.id} style={styles.container}>
                 <Image source={product.source} style={styles.image} />
                 <View style={styles.textContainer}>
                     <Text style={styles.price}>Rs, {product.price}</Text>
                     <Text style={styles.description}>{product.Description}</Text>
                 </View>
             </TouchableOpacity>
            ))}
           
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    scrollview: {
        padding: 10
    },
    container: {
        flexDirection: 'row',
        padding: 10,
        alignItems: 'center',
        borderWidth: 1,
        borderRadius: 10,
        marginTop:10
    },
    image: {
        width: 100,
        height: 100,
        marginRight: 10,
        borderRadius: 10
    },
    textContainer: {
        flexDirection: 'column',
        justifyContent: 'center'
    },
    price: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 5
    },
    description: {
        fontSize: 16,
    }
});

export default Products;
