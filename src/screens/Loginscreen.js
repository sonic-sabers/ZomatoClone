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
import AntDesign from 'react-native-vector-icons/AntDesign';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import Icons from 'react-native-vector-icons/MaterialIcons';
import Material from 'react-native-vector-icons/MaterialCommunityIcons';
import { Splashscreen } from './';

const Logincomponent = () => {
	const [Number, onChangeNumber] = React.useState("");
	const navigation = useNavigation();
	return (
		<ScrollView
			showsVerticalScrollIndicator={false}
			style={{
				flex: 1,
				backgroundColor: colors.white,
			}}
		>

			<LinearGradient
				colors={[colors.start, colors.end]}
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
								style={styles.english}>
								English
							</Text>
						</TouchableOpacity>
						<TouchableOpacity
							style={styles.skip}
							onPress={() => navigation.navigate('Appdrawer')}
						>
							<Text
								style={styles.skiptext}>
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
					style={styles.maintext}>
					India's #1 Food Delivery and Dining App
				</Text>
				<View
					style={{
						flexDirection: 'row',
						alignItems: 'center',
						marginVertical: 20,
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
							fontSize: 12,
							fontWeight: '700',
							fontFamily: 'Inter',
							color: '#6D6D6D',
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
						marginVertical: 10,
						height: 55,
					}}
				>
					<View
						style={[{
							alignItems: 'center',
							justifyContent: 'center',
							paddingHorizontal: 15,
							marginRight: 10,
						}, styles.borders]}
					>
						<Text
							style={{
								fontSize: 15,
								fontWeight: '700',
								fontFamily: 'Inter',
								color: '#a9a9a9',
							}}>
							🇮🇳 {' '}
							<AntDesign name='caretdown' size={10} color='#B4B4B4' />
						</Text>
					</View>
					<View
						style={[styles.input, styles.borders]}>
						<Text
							style={{
								fontSize: 17,
								fontWeight: '600',
								fontFamily: 'Inter',
								color: '#333333',
							}}>
							+91
						</Text>
						<TextInput
							placeholder="Enter Phone Number"
							keyboardType="numeric"
							onChangeNumber={onChangeNumber}
							value={Number}
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
					style={styles.continuetext}
					onPress={() => navigation.navigate('Appdrawer')}
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
						flex: 1,
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
						flex: 1,
					}}
				>
					<TouchableOpacity
						style={[styles.loginitem, {

							marginRight: 10,
						}]}>
						<Image
							source={require('../assets/Images/Google.png')}
							style={{
								height: 26,
								width: 28,
							}}
						/>
					</TouchableOpacity>
					<TouchableOpacity
						style={[styles.loginitem, {
							marginLeft: 10,
						}]}>
						<Ionicons name='ellipsis-horizontal' size={30} color='#00000090' />
					</TouchableOpacity>
					<View>
					</View>
				</View>
				<Text
					style={styles.tnctext}>
					By continuing, you agree to our{'\n'}
					<Text
						style={{
							textDecorationStyle: 'dotted'
						}}>
						Policy Content Policy
					</Text>
					Terms of Services
				</Text>
			</View>
		</ScrollView >
	)
}

export default function Loginscreen({ navigation }) {
	useEffect(() => {
		setTimeout(() => {
			onChangeSplashhide(false);
		}, 3000);
	}, []);

	const [Splashhide, onChangeSplashhide] = React.useState(true);
	return (
		<View style={{ flex: 1 }}>
			{Splashhide ?
				<Splashscreen /> :
				<Logincomponent />
			}
		</View>
	)
}

const styles = StyleSheet.create({
	tnctext: {
		fontSize: 12,
		fontWeight: '200',
		fontFamily: 'Inter',
		color: '#727272',
		alignSelf: 'center',
		marginTop: 5,
		textAlign: 'center',
		paddingHorizontal: 30,
		marginTop: 20,
	},
	continuetext: {
		padding: 15,
		backgroundColor: '#F04F5F',
		borderRadius: 10,
		justifyContent: 'center',
		alignItems: 'center',
		marginVertical: 20,
	}
	, maintext: {
		fontSize: 25,
		fontWeight: 'bold',
		fontFamily: 'Inter',
		color: colors.black,
		alignSelf: 'center',
		marginTop: 5,
		textAlign: 'center',
		paddingHorizontal: 30,
		fontFamily: 'Oswald-Medium',
	},
	skiptext: {
		fontSize: 15,
		fontWeight: '700',
		fontFamily: 'Inter',
		color: '#d1d1d1',
	},
	english: {
		fontSize: 15,
		fontWeight: '700',
		fontFamily: 'Inter',
		color: '#d1d1d1',
		marginLeft: 7,
	},
	skip: {
		paddingHorizontal: 14,
		backgroundColor: '#00000060',
		borderRadius: 20,
		alignItems: 'center',
		marginRight: -20,
		paddingVertical: 7,
	},
	footer: {
		height: imageHeight,
		width: imageHeight,
		alignSelf: "center",
	},
	borders: {
		borderWidth: 1,
		padding: 5,
		borderColor: '#d0d0d0',
		borderRadius: 10,
	},
	input: {

		flex: 1,
		flexDirection: 'row',
		alignItems: 'center',
		paddingLeft: 5,
	},
	loginitem: {
		borderWidth: 1,
		borderColor: '#d0d0d0',
		borderRadius: 50,
		height: 41,
		width: 41,
		justifyContent: 'center',
		alignItems: 'center',
	}

})