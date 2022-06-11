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

let dimensions = Dimensions.get('window');
let imageHeight = Math.round((dimensions.width * 2010) / 2243) / 2.5;
let imageWidth = dimensions.width / 2.5;

export default function Splashscreen() {
    return (
        <View
            style={{
                flex: 1,
                backgroundColor: colors.primary,
                padding: 25,
            }}
        >
            <StatusBar
                animated={true}
                backgroundColor={colors.primary}
            />
            <View
                style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    flex: 1,
                }}>
                <Text
                    style={{
                        fontSize: 70,
                        fontWeight: '900',
                        fontFamily: 'Inter',
                        color: colors.white
                    }}>
                    zomato
                </Text>
                <Text
                    style={{
                        fontSize: 19,
                        fontWeight: '300',
                        fontFamily: 'Inter',
                        color: colors.white,
                        textAlign: 'center',

                    }}>
                    100% Plastic Neutral Deliveries
                </Text>
                <Text
                    style={{
                        fontSize: 13,
                        fontWeight: '300',
                        fontFamily: 'Inter',
                        color: '#f1f1f1',
                        textAlign: 'center',
                    }}>
                    IN INDIA
                </Text>
            </View>
            <Image
                source={require('../assets/Images/Recycle.png')}
                style={styles.footer} />
        </View>
    )
}

const styles = StyleSheet.create({
    footer: {
        position: 'absolute',
        height: imageHeight,
        alignSelf: "center",
        top: dimensions.height - imageHeight - 40,
        width: imageWidth,
    }
})