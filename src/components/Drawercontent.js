import React from 'react';
import {
    View,
    StyleSheet,
    ImageBackground,
    TouchableOpacity,
    Image,
    Text,
} from 'react-native';
import {
    Drawer,

} from 'react-native-paper';
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import Entypo from 'react-native-vector-icons/Entypo';
import Feather from 'react-native-vector-icons/Feather';
import Icons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

export default function Drawercontent(props) {

    return (
        <View style={{ flex: 1 }}>
            <DrawerContentScrollView {...props}>
                <View style={[{
                    // backgroundColor: 'green',
                    flex: 1,
                    // height: '100%',
                    justifyContent: 'space-evenly',
                }]}>
                    <Drawer.Section style={styles.drawerSection}>
                        <View
                            onPress={() => {
                                alert('Hi');
                            }}>
                            <View
                                style={{
                                    marginTop: 12,

                                }}>
                                <Image source={{
                                    uri: 'https://cdn.pixabay.com/photo/2020/05/09/13/29/photographer-5149664__340.jpg',
                                }}
                                    style={{
                                        width: 100,
                                        height: 100,
                                        alignSelf: 'center',
                                        borderWidth: 6,
                                        borderColor: "#d0000090",
                                        borderRadius: 100,
                                    }}
                                />
                                <TouchableOpacity
                                    onPress={() => {
                                        props.navigation.navigate('Bottomtab');
                                    }}
                                >
                                    <Text
                                        style={{
                                            fontSize: 19,
                                            fontWeight: '700',
                                            fontFamily: 'Poppins-regular',
                                            color: '#000',
                                            alignSelf: 'center',
                                            marginTop: 5,
                                        }}>
                                        User Name
                                    </Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                        <DrawerItem
                            style={{ marginTop: 12, }}
                            icon={({ color, size }) => (
                                <Icon
                                    name="home"
                                    color={color}
                                    size={size}
                                />
                            )}
                            label={({ color, size }) => (
                                <>
                                    <Text
                                        style={{
                                            fontSize: 16,
                                            fontWeight: '800',
                                            fontFamily: 'Poppins-regular',
                                            color: '#000',
                                        }}>
                                        My Profile
                                    </Text>
                                </>
                            )}
                            onPress={() => {
                                props.navigation.navigate('Bottomtab');
                            }}
                        />

                        <DrawerItem
                            style={{ marginTop: 12, }}
                            icon={({ color, size }) => (
                                <Icon
                                    name="key-variant"
                                    color={color}
                                    size={size}
                                    style={{ transform: [{ rotate: "45deg" }] }}
                                />
                            )}
                            label={({ color, size }) => (
                                <>
                                    <Text
                                        style={{
                                            fontSize: 16,
                                            fontWeight: '800',
                                            fontFamily: 'Poppins-regular',
                                            color: '#000',
                                        }}>
                                        Notification
                                    </Text>
                                </>
                            )}
                            onPress={() => {
                                props.navigation.navigate('Bottomtab');
                            }}
                        />
                        <DrawerItem
                            style={{ marginTop: 12, }}
                            icon={({ color, size }) => (
                                <FontAwesome
                                    name="rupee"
                                    color={color}
                                    size={size}
                                    style={{
                                        marginLeft: 5
                                    }}
                                />
                            )}
                            label={({ color, size }) => (
                                <>
                                    <Text
                                        style={{
                                            fontSize: 16,
                                            fontWeight: '800',
                                            fontFamily: 'Poppins-regular',
                                            color: '#000',
                                            marginLeft: 5,
                                        }}>
                                        My Orders
                                    </Text>
                                </>
                            )}
                            onPress={() => {
                                props.navigation.navigate('Bottomtab');
                            }}
                        />

                        <DrawerItem
                            style={{ marginTop: 12, }}
                            icon={({ color, size }) => (
                                <Icon
                                    name="bookmark"
                                    color={color}
                                    size={size}
                                />
                            )}
                            label={({ color, size }) => (
                                <>
                                    <Text
                                        style={{
                                            fontSize: 16,
                                            fontWeight: '800',
                                            fontFamily: 'Poppins-regular',
                                            color: '#000',
                                        }}>
                                        Favourite Order
                                    </Text>
                                </>
                            )}
                            onPress={() => {
                                props.navigation.navigate('Bottomtab');
                            }}
                        />
                        <DrawerItem
                            style={{ marginTop: 12, }}
                            icon={({ color, size }) => (
                                <Icon
                                    name="badge-account-horizontal"
                                    color={color}
                                    size={size}
                                />
                            )}
                            label={({ color, size }) => (
                                <>
                                    <Text
                                        style={{
                                            fontSize: 16,
                                            fontWeight: '800',
                                            fontFamily: 'Poppins-regular',
                                            color: '#000',
                                        }}>
                                        Contact US
                                    </Text>
                                </>
                            )}
                            onPress={() => {
                                props.navigation.navigate('Bottomtab');
                            }}
                        />

                        <DrawerItem
                            style={{ marginTop: 12, }}
                            icon={({ color, size }) => (
                                <Icon
                                    name="heart"
                                    color="#000"
                                    size={size}
                                />
                            )}
                            label={({ color, size }) => (
                                <>
                                    <Text
                                        style={{
                                            fontSize: 16,
                                            fontWeight: '800',
                                            fontFamily: 'Poppins-regular',
                                            color: '#000',
                                        }}>
                                        Settings
                                    </Text>
                                </>
                            )}
                            onPress={() => {
                                props.navigation.navigate('Bottomtab');
                            }}
                        />
                        <DrawerItem
                            style={{ marginTop: 12, }}
                            icon={({ color, size }) => (
                                <AntDesign
                                    name="copy1"
                                    color="#000"
                                    size={size}
                                // style={{
                                //   marginLeft: 5
                                // }}
                                />
                            )}
                            label={({ color, size }) => (
                                <>
                                    <Text
                                        style={{
                                            fontSize: 16,
                                            fontWeight: '800',
                                            fontFamily: 'Poppins-regular',
                                            color: '#000',
                                        }}>
                                        Help & FAQs
                                    </Text>
                                </>
                            )}
                            onPress={() => {
                                props.navigation.navigate('Bottomtab');
                            }}
                        />
                        <DrawerItem
                            style={{ marginTop: 12, }}
                            icon={({ color, size }) => (
                                <Icon
                                    name="shield-lock"
                                    color="#d0000090"
                                    size={size}
                                />
                            )}
                            label={({ color, size }) => (
                                <>
                                    <Text
                                        style={{
                                            fontSize: 16,
                                            fontWeight: '800',
                                            fontFamily: 'Poppins-regular',
                                            color: "#d0000090",
                                        }}>
                                        SIGN IN
                                    </Text>
                                </>
                            )}
                            onPress={() => {
                                props.navigation.navigate('Bottomtab');
                            }}
                        />
                    </Drawer.Section>
                </View>
            </DrawerContentScrollView>

        </View>
    );
}

const styles = StyleSheet.create({
    row: {
        marginTop: 12,
        flexDirection: 'row',
        alignItems: 'center',
    },
    section: {
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 15,
    },
    drawerSection: {
        marginTop: 15,
    },

});
