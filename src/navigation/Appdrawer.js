import 'react-native-gesture-handler';
import React, { Component, useState, useEffect, useRef } from 'react';
import {
    StyleSheet,
    Button,
    Image,
    Text,
    TouchableOpacity,
    View,
    TextInput,
    ScrollView,
    KeyboardAvoidingView,
    SafeAreaView,
    ImageBackground,
    FlatList,
    ViewPropTypes,
    Switch,
    Dimensions,

} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import Octicons from 'react-native-vector-icons/Octicons';
import Icons from 'react-native-vector-icons/MaterialIcons';
import Material from 'react-native-vector-icons/MaterialCommunityIcons';
import LinearGradient from 'react-native-linear-gradient';
import { useNavigation, CommonActions } from '@react-navigation/native';
import { Drawercontent } from '../components';
import { Provider as PaperProvider } from 'react-native-paper';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer, DrawerActions } from '@react-navigation/native';
import { Splashscreen, Loginscreen, Bottomtab } from '../screens';
import { colors } from '../constants';
const url = 'https://cdn.pixabay.com/photo/2020/05/09/13/29/photographer-5149664__340.jpg';

const NavigationDrawerStructure = props => {
    const navigation = useNavigation();

    const toggleDrawer = () => {
        navigation.dispatch(DrawerActions.toggleDrawer());
    };

    return (
        <View style={{ flexDirection: 'row', marginLeft: 10 }}>
            <View
                style={{
                    flexDirection: 'row',
                    alignItems: 'center',

                }}>
                <TouchableOpacity
                    onPress={toggleDrawer}
                >
                    <Ionicons name='ios-location-sharp' size={30} color={colors.primary} />
                </TouchableOpacity>
                <View
                >
                    <Text
                        style={{
                            fontSize: 15,
                            fontWeight: '700',
                            fontFamily: 'Inter',
                            color: '#000'
                        }}>
                        Home
                    </Text>
                    <Text
                        style={{
                            fontSize: 11,
                            fontWeight: '500',
                            fontFamily: 'Inter',
                            color: '#000'
                        }}>
                        9-9,B Block,R K Puram,New Delhi
                    </Text>
                </View>
            </View>
        </View>
    );
};


const Drawer = createDrawerNavigator();

export default function Appdrawer({ navigation }) {
    return (
        <PaperProvider>
            <NavigationContainer independent>
                <Drawer.Navigator
                    drawerContent={props => <Drawercontent {...props} />}
                    screenOptions={{
                        headerShown: true,
                        drawerStyle: {
                            backgroundColor: '#fff',
                            width: '80%',
                        },
                        overlayColor: '#d0000090',
                        drawerStatusBarAnimation: 'fade',
                    }}
                    initialRouteName='Bottomtab'
                >
                    <Drawer.Screen
                        name='Bottomtab' component={Bottomtab}
                        options={{
                            headerShown: true,
                            headerStyle: styles.shadow,
                            title: '',
                            headerTintColor: '#fff',
                            headerStyle: {
                                backgroundColor: '#fff'
                            },
                            headerLeft: (props) => (
                                <NavigationDrawerStructure navigationProps={props.navigation} />
                            ),
                            headerRight: () => (
                                <View style={{ flexDirection: 'row', flex: 1, alignItems: 'center' }}>
                                    <TouchableOpacity
                                        onPress={() =>
                                            alert('navigating To account')
                                        }
                                        style={[styles.header2, { marginRight: 10 }]}>
                                        <Image
                                            source={{ uri: url }}
                                            style={{ width: 33, height: 33, borderRadius: 50 }} />
                                    </TouchableOpacity>
                                </View>
                            ),
                        }}
                    />
                </Drawer.Navigator>
            </NavigationContainer>
        </PaperProvider>
    );
}

const styles = StyleSheet.create({
    header2: {
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 7,
        },
        shadowOpacity: 0.43,
        shadowRadius: 9.51,

        elevation: 15,
    },
    shadow: {
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.36,
        shadowRadius: 6.68,

        elevation: 11,
    },
});