import React,
{
    Component,
    useState,
    useEffect,
    useRef
} from 'react';
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
    StatusBar,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { colors } from '../constants';
import LinearGradient from 'react-native-linear-gradient';

let dimensions = Dimensions.get('window');
let imageHeight = Math.round((dimensions.width * 278) / 837) / 1.05;
let imageWidth = dimensions.width / 1.05;

import Entypo from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import Icons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


const Header = () => {
    return (
        <View style={{
            width: '100%',
            flexDirection: 'row',
            justifyContent: 'space-between',
        }}>
            <View
                style={{
                    // width: '100%',
                    flexDirection: 'row',
                    alignItems: 'center',

                }}>
                <Ionicons name='ios-location-sharp' size={30} color={colors.primary} />
                <View
                    style={{
                        // marginLeft: 5,
                    }}
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
            <Image
                source={{ uri: 'https://www.placecage.com/640/360' }}
                style={{
                    width: 40,
                    height: 40,
                    borderRadius: 40,

                }}
            />
        </View>
    )
}

const Search = () => {
    const [number, onChangeNumber] = React.useState(null);
    return (
        <View
            style={styles.input}
        >

            <Ionicons name='md-search' size={26} color={colors.primary} />
            <TextInput
                onChangeText={onChangeNumber}
                value={number}
                placeholder="Restararaunt name or dish"
                style={{
                    fontSize: 16.5,
                    flex: 1,
                }}
                placeholderTextStyle=
                {{
                    fontWeight: 400,

                }}
            />
            <View style={{
                alignSelf: 'center',
                borderLeftWidth: 1,
                borderColor: '#d9d9d9',
                height: 30,
                alignItems: 'center',
                justifyContent: 'center',
                marginVertical: 10,
            }}>
                <FontAwesome
                    name='microphone'
                    size={20}
                    color={colors.primary}
                    style={{
                        marginHorizontal: 10,
                    }}
                />
            </View>
        </View>
    )
}

const Filters = () => {
    return (
        <View>
            <ScrollView
                horizontal
                style={{
                    // width: '100%',
                    height: 40,
                    marginTop: 10,
                }}>
                <TouchableOpacity
                    style={styles.filterItem}
                >
                    <FontAwesome name='slack' size={14} color={colors.black} />
                    <Text
                        style={[{
                            marginHorizontal: 3,
                        }, styles.filterfont]}>
                        Sort
                    </Text>
                    <AntDesign name='caretdown' size={10} color={colors.black} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.filterItem} >
                    <Text
                        style={[{
                            marginHorizontal: 3,
                        }, styles.filterfont]}>
                        MAX Safety
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.filterItem} >
                    <Text
                        style={[{
                            marginHorizontal: 3,
                        }, styles.filterfont]}>
                        Fast Delivery
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.filterItem} >
                    <Text
                        style={[{
                            marginHorizontal: 3,
                        }, styles.filterfont]}>
                        Great Offers
                    </Text>
                </TouchableOpacity>
            </ScrollView>
        </View>
    )
}

const Offers = () => {
    return (
        <View>
            <Text
                style={styles.texts}>
                Check this out!
            </Text>

            <Image
                style={{
                    height: imageHeight,
                    width: imageWidth,
                    borderRadius: 10,
                }}
                source={require('../assets/Images/Offer.png')}
            />
        </View>
    )
}

export default function Homescreen() {

    return (
        <View
            style={{
                flex: 1,
                backgroundColor: '#fff',
                padding: 10,
            }}>
            <Header />
            <Search />
            <Filters />
            <Offers />
            <View>

                <Text
                    style={styles.texts}>
                    Top brands for you
                </Text>
            </View>
            <Text>Homescreen</Text>
            <Text>Homescreen</Text>
        </View >
    )
}

const styles = StyleSheet.create({

    input: {
        height: 45,
        // margin: 12,
        borderRadius: 10,
        backgroundColor: '#efefef',
        flexDirection: 'row',
        paddingHorizontal: 8,
        alignItems: 'center',
    },
    filterItem: {
        borderWidth: 2,
        borderRadius: 10,
        padding: 3,
        borderColor: '#b9b9b980',
        flexDirection: 'row',
        alignItems: 'center',
        marginHorizontal: 3,
        height: 34,
    },
    filterfont: {
        fontSize: 13,
        fontWeight: '700',
        fontFamily: 'Inter',
        color: '#00000090',
    },
    texts: {
        fontSize: 20,
        fontWeight: '800',
        fontFamily: 'Inter',
        color: '#000',
        marginVertical: 7,
    }

});