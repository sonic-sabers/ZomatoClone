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
let imageHeight = Math.round((dimensions.width)) / 1.3;
let imageWidth = imageHeight;
import Entypo from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import Icons from 'react-native-vector-icons/MaterialIcons';
import Material from 'react-native-vector-icons/MaterialCommunityIcons';

export default function Loginscreen() {
  const [text, onChangeText] = React.useState("");
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={{
        flex: 1,
        backgroundColor: colors.white,
        // padding: 25,
      }}
    >

      <LinearGradient
        colors={[colors.start, colors.end]}
      // style={{ flex: 1 }}
      >
        <ImageBackground
          source={require('../assets/Images/ZomatoLogin.png')}
          style={styles.footer} >
          <View style={{
            width: '100%',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginTop: 10,
            flexDirection: 'row',
            // backgroundColor: 'green',
          }}>
            <TouchableOpacity
              style={{
                padding: 7,
                flexDirection: 'row',
                backgroundColor: '#00000060',
                borderRadius: 20,
                alignItems: 'center',
                marginLeft: -20,
              }}
            >
              <SimpleLineIcons name='globe' size={15} color='#d1d1d1' />
              <Text
                style={{
                  fontSize: 15,
                  fontWeight: '700',
                  fontFamily: 'Inter',
                  color: '#d1d1d1',
                  marginLeft: 7,
                }}>
                English
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                paddingHorizontal: 14,
                backgroundColor: '#00000060',
                borderRadius: 20,
                alignItems: 'center',
                marginRight: -20,
                paddingVertical: 7,
              }}
            >
              <Text
                style={{
                  fontSize: 15,
                  fontWeight: '700',
                  fontFamily: 'Inter',
                  color: '#d1d1d1',
                }}>
                Skip
              </Text>
            </TouchableOpacity>
          </View>
        </ImageBackground>
      </LinearGradient>
      <View style={{
        padding: 20,
      }}>
        <Text
          style={{
            fontSize: 25,
            fontWeight: 'bold',
            fontFamily: 'Inter',
            color: colors.black,
            alignSelf: 'center',
            marginTop: 5,
            textAlign: 'center',
            // maxWidth: '75%',
            paddingHorizontal: 30,
          }}>
          India's #1 Food Delivery and Dining App
        </Text>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginVertical: 15,
          }}>
          <View style={{
            height: 1,
            flex: 1,
            backgroundColor: '#d0d0d0',
            borderRadius: 10,
            alignSelf: 'center',
          }} />
          <Text
            style={{
              fontSize: 15,
              fontWeight: '700',
              fontFamily: 'Inter',
              color: '#a9a9a9',
              marginHorizontal: 10,
            }}>
            Log In or Sign up
          </Text>
          <View style={{
            height: 1,
            flex: 1,
            backgroundColor: '#d0d0d0',
            borderRadius: 10,
            alignSelf: 'center',
          }}
          />
        </View>
        <View
          style={{
            flexDirection: 'row',
            marginVertical: 5,
          }}
        >
          <View
            style={[{
              alignItems: 'center',
              justifyContent: 'center',
              paddingHorizontal: 20,
              marginRight: 10,
            }, styles.borders]}
          >
            <Text
              style={{
                fontSize: 15,
                fontWeight: '700',
                fontFamily: 'Inter',
                color: '#a9a9a9',
                // marginHorizontal: 10,
              }}>
              🇮🇳
            </Text>
          </View>
          <View
            style={[styles.input, styles.borders]}>
            <Text
              style={{
                fontSize: 17,
                fontWeight: '700',
                fontFamily: 'Inter',
                color: '#303030',
                // marginHorizontal: 10,
              }}>
              +91
            </Text>
            <TextInput
              placeholder="Enter Phone Number"
              keyboardType="numeric"
              onChangeText={onChangeText}
              value={text}
              placeholderTextColor='#a0a0a0'
              placeholderStyle={{
                backgroundColor: 'green',
                color: 'green',
              }}
              style={{
                fontSize: 17,
                fontWeight: '900',
                fontFamily: 'Inter',
                color: '#303030',
                flex: 1,
              }}
            />
          </View>
        </View>
        <TouchableOpacity
          style={{
            padding: 15,
            backgroundColor: colors.start,
            borderRadius: 10,
            justifyContent: 'center',
            alignItems: 'center',
            marginVertical: 15,
          }}
        >
          <Text
            style={{
              fontSize: 18,
              fontWeight: '700',
              fontFamily: 'Inter',
              color: '#FFF4F5',
            }}
          >Continue</Text>
        </TouchableOpacity>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginVertical: 10,
          }}>
          <View style={{
            height: 1,
            flex: 1,
            backgroundColor: '#d0d0d0',
            borderRadius: 10,
            alignSelf: 'center',
          }} />
          <Text
            style={{
              fontSize: 15,
              fontWeight: '700',
              fontFamily: 'Inter',
              color: '#a9a9a9',
              marginHorizontal: 10,
            }}>
            or
          </Text>
          <View style={{
            height: 1,
            flex: 1,
            backgroundColor: '#d0d0d0',
            borderRadius: 10,
            alignSelf: 'center',
          }}
          />
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            // backgroundColor: 'green',
          }}
        >
          <TouchableOpacity
            style={{
              borderWidth: 1,
              borderColor: '#d0d0d0',
              borderRadius: 50,
              // padding: 10,
              height: 45,
              width: 45,
              justifyContent: 'center',
              alignItems: 'center',
              marginRight: 10,
            }}>
            <Text
              style={{
                fontSize: 20,
                fontWeight: '700',
                fontFamily: 'Inter',
                color: '#a9a9a9',

              }}
            >G</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              borderWidth: 1,
              borderColor: '#d0d0d0',
              borderRadius: 50,
              // padding: 10,
              height: 45,
              width: 45,
              justifyContent: 'center',
              alignItems: 'center',
              marginLeft: 10,
            }}>
            <Text
              style={{
                fontSize: 20,
                fontWeight: '700',
                fontFamily: 'Inter',
                color: '#a9a9a9',

              }}
            >G</Text>
          </TouchableOpacity>
          <View>

          </View>
        </View>
        <Text
          style={{
            fontSize: 12,
            fontWeight: '200',
            fontFamily: 'Inter',
            color: '#d0d0d0',
            alignSelf: 'center',
            marginTop: 5,
            textAlign: 'center',
            // maxWidth: '75%',
            paddingHorizontal: 30,
            marginTop: 20,
          }}>
          By continuin, you agree to our{'\n'} Terms of Services Policy Content Policy
        </Text>
      </View>
    </ScrollView >
  )
}

const styles = StyleSheet.create({

  footer: {
    // position: 'absolute',
    height: imageHeight,
    // alignSelf: "center",
    // top: dimensions.height - imageHeight - 40,
    width: imageHeight,
    alignSelf: "center",
    // backgroundColor: 'blue',
  },
  borders: {
    borderWidth: 1,
    padding: 5,
    borderColor: '#d0d0d0',
    borderRadius: 10,
  },
  input: {
    // height: 50,
    // margin: 12,

    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 5,
  },

})