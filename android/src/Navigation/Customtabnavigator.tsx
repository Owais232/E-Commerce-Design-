import { View, TouchableOpacity, StyleSheet } from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';

const CustomTabNavigator = ({ state, descriptors, navigation }) => {
    return (
        <View style={styles.tabContainer}>
            {state.routes.map((route, index) => {
                const { options } = descriptors[route.key];
                const label =
                    options.tabBarLabel !== undefined
                        ? options.tabBarLabel
                        : options.title !== undefined
                            ? options.title
                            : route.name;

                const isFocused = state.index === index;

                const onPress = () => {
                    const event = navigation.emit({
                        type: 'tabPress',
                        target: route.key,
                    });

                    if (!isFocused && !event.defaultPrevented) {
                        navigation.navigate(route.name);
                    }
                };

                const onLongPress = () => {
                    navigation.emit({
                        type: 'tabLongPress',
                        target: route.key,
                    });
                };

                let iconName;
                if (route.name === 'Home') {
                    iconName = 'home';
                } else if (route.name === 'Settings') {
                    iconName = 'cog';
                } else if (route.name === 'Compass') {
                    iconName = 'compass';
                } else if (route.name === 'Plus') {
                    iconName = 'plus';
                } else {
                    iconName = 'circle';
                }

                const isMiddle = route.name === 'Plus';

                return (
                    <TouchableOpacity
                        key={route.key}
                        accessibilityRole="button"
                        accessibilityState={isFocused ? { selected: true } : {}}
                        accessibilityLabel={options.tabBarAccessibilityLabel}
                        testID={options.tabBarTestID}
                        onPress={onPress}
                        onLongPress={onLongPress}
                        style={isMiddle ? styles.middleButton : styles.tabButton}
                    >
                        <Icon
                            name={iconName}
                            size={35}
                            style={isMiddle && styles.middleIcon}
                            color={isFocused ? '#673ab7' : '#222'}
                        />
                    </TouchableOpacity>
                );
            })}
        </View>
    );
};

const styles = StyleSheet.create({
    tabContainer: {
        width: '90%',
        height: 70,
        backgroundColor: '#dadada',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf:'center',
        paddingHorizontal: 20,
        marginBottom: 15,
        borderRadius: 20,
    },
    tabButton: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    middleButton: {
        width: 60,
        height: 60,
        borderRadius: 30,
        backgroundColor: 'grey',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 50,
        elevation: 5,
    },
    middleIcon: {
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default CustomTabNavigator;
