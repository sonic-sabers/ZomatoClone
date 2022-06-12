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
	TouchableHighlight
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { colors } from '../constants';
import LinearGradient from 'react-native-linear-gradient';

let dimensions = Dimensions.get('window');
let imageHeight = Math.round((dimensions.width * 278) / 837) / 1.05;
let imageWidth = dimensions.width / 1.05;
let brandWidth = dimensions.width / 5;

import Entypo from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import Icons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';


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
					color: '#00000090'
				}}
				placeholderTextColor='#00000090'
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
		<View
			style={{
				// paddingLeft: 10
			}}
		>
			<ScrollView
				horizontal
				showsHorizontalScrollIndicator={false}
				style={{
					// width: '100%',
					height: 40,
					marginTop: 10,
					paddingHorizontal: 7
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
				<TouchableOpacity style={styles.filterItem} >
					<Text
						style={[{
							marginHorizontal: 3,
						}, styles.filterfont]}>
						Instant
					</Text>
				</TouchableOpacity>
			</ScrollView>
		</View>
	)
}

const Offers = () => {
	return (
		<View
			style={{
				paddingHorizontal: 10,
			}}
		>
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

const Brands = ([
	{
		title: "McDonald's",
		rating: 5,
		Time: '33 ',
		src: require('../assets/Images/Macd.jpg'),
		key: '1'
	},
	{
		title: "Domino's Pizza",
		rating: 4,
		Time: '31 ',
		src: require('../assets/Images/domino.jpg'),
		key: '2',
		Offer: '20% OFF'
	},
	{
		title: "McDonald's",
		rating: 5,
		Time: '38 ',
		src: require('../assets/Images/Macd.jpg'),
		key: '3'
	},
	{
		title: "Domino's Pizza",
		rating: 4,
		Time: '30 ',
		src: require('../assets/Images/domino.jpg'),
		key: '4'
	},
	{
		title: "McDonald's",
		rating: 5,
		Time: '30 ',
		src: require('../assets/Images/Macd.jpg'),
		key: '5',
		Offer: '20% OFF'
	},
	{
		title: "Domino's Pizza",
		rating: 4,
		Time: '39 ',
		src: require('../assets/Images/domino.jpg'),
		key: '6'
	},
	{
		title: "McDonald's",
		rating: 5,
		Time: '34 ',
		src: require('../assets/Images/Macd.jpg'),
		key: '7'
	},
	{
		title: "Domino's Pizza",
		rating: 4,
		Time: '30 ',
		src: require('../assets/Images/domino.jpg'),
		key: '8'
	},

]);


const Topbrands = () => {
	return (
		<View
			style={{
				paddingHorizontal: 10,
			}}>
			<Text
				style={[[styles.texts, {

				}],]}>
				Top brands for you
			</Text>
			<View
				style={styles.gridContainer}
			>
				{Brands.map((brand) => (
					<TouchableOpacity
						key={brand.key}
						style={[{
							marginHorizontal: 2,
							marginBottom: 4,
						}, styles.shadow1]}
						onPress={() => {
							console.log('Hi')
						}}
					>
						<Image
							style={{
								height: brandWidth,
								width: brandWidth,
								borderRadius: 100,
								borderWidth: 1,
								borderColor: '#b9b9b940'
							}}
							source={brand.src}
						/>
						{brand.Offer &&
							<View
								style={{
									backgroundColor: '#2570EC',
									// paddingHorizontal: 1,
									width: brandWidth / 1.4,
									borderRadius: 5,
									alignSelf: 'center',
									justifyContent: 'center',
									alignItems: 'center',
									padding: 2,
									marginTop: -17
								}}
							>
								<Text style={[{
									fontSize: 11,
									fontWeight: '500',
									fontFamily: 'Inter',
									color: '#ffffff',

								}]}>
									{brand.Offer}</Text>
							</View>
						}
						<Text style={[styles.brandtext, {
							color: '#000',
						}]}>{brand.title}</Text>
						<Text style={[styles.brandtext, {

							color: '#00000090',
							justifyContent: 'center',
							alignItems: 'center',
						}]}>
							<Ionicons name='md-timer' size={12} color='#00000090' />
							{' '}{brand.Time} mins</Text>
					</TouchableOpacity>
				))}
			</View>
		</View >
	)
}

const Fooditems = ([
	{
		title: 'ji'
	},
	{
		title: 'ji'
	},
]);

const Foodcomponent = () => {
	return (
		<TouchableWithoutFeedback
			style={[styles.shadow1, {
				borderRadius: 10,
				backgroundColor: '#fff',
				marginHorizontal: 5,
				marginVertical: 10,
			}]}
		>
			<Image
				style={{
					height: 140,
					width: 210,
					borderTopRightRadius: 10,
					borderTopLeftRadius: 10,

				}}
				source={require('../assets/Images/Food.jpg')}
			/>
			<View style={{
				padding: 5,
				// backgroundColor: 'green',
				borderBottomRightRadius: 10,
				borderBottomLeftRadius: 10,
			}}>

				<View
					style={{
						width: 200,
						flexDirection: 'row',
						justifyContent: 'space-between',
						marginTop: 5,
						alignItems: 'center',

					}}
				>
					<Text
						style={{
							fontSize: 14,
							fontWeight: '700',
							fontFamily: 'Inter',
							color: '#00000090'
						}}>
						McDonald's
					</Text>
					<View
						style={{
							backgroundColor: '#257E3C',
							padding: 3,
							borderRadius: 5,
						}}
					>
						<Text
							style={{
								fontSize: 11,
								fontWeight: '700',
								fontFamily: 'Inter',
								color: '#fff'
							}}>
							4.5{' '}
							<Ionicons name='star' size={12} color='#fff' />
						</Text>
					</View>
				</View>
				<View
					style={{
						width: 200,
						flexDirection: 'row',
						justifyContent: 'space-between',
						marginTop: 5,
						alignItems: 'center',

					}}
				>
					<Text
						style={{
							fontSize: 12,
							fontWeight: '700',
							fontFamily: 'Inter',
							color: '#00000099'
						}}>
						1 x McAloo Tikki Burger
					</Text>

					<Text
						style={{
							fontSize: 11,
							fontWeight: '700',
							fontFamily: 'Inter',
							color: '#00000099'
						}}>
						$48
					</Text>
				</View>
				<View
					style={{
						width: 200,
						flexDirection: 'row',
						justifyContent: 'space-between',
						marginTop: 5,
						alignItems: 'center',

					}}
				>
					<Text
						style={{
							fontSize: 14,
							fontWeight: '700',
							fontFamily: 'Inter',
							color: '#00000099'
						}}>
						$88
					</Text>
					<TouchableOpacity
						style={{
							backgroundColor: colors.primary,
							paddingVertical: 7,
							borderRadius: 8,
							paddingHorizontal: 10,
						}}
					>
						<Text
							style={{
								fontSize: 11,
								fontWeight: '700',
								fontFamily: 'Inter',
								color: '#fff'
							}}>
							Checkout{' '}
							<AntDesign name='caretright' size={8} color='#fff' />
						</Text>
					</TouchableOpacity>
				</View>
			</View>
		</TouchableWithoutFeedback>
	)
}
const url = 'https://image.similarpng.com/very-thumbnail/2020/04/Craft-beef-burger-with-cheese-png.png'
export default function Homescreen() {

	return (
		<View
			style={{
				flex: 1,
				backgroundColor: '#fff',
				// mariginTop: -15,
				paddingHorizontal: 10,
			}}>
			<Search />
			<View
				style={{
					marginHorizontal: -10
				}}
			>
				<Filters />
			</View>
			<ScrollView style={{
				flex: 1,
				marginHorizontal: -10
			}}>

				<Offers />
				<Topbrands />
				<View>
					<Text
						style={[styles.texts, {
							marginLeft: 10,
						}]}>
						Quick checkout munchies
					</Text>
					<ScrollView
						style={{ paddingHorizontal: 10, }}
						horizontal showsHorizontalScrollIndicator={false}>
						<Foodcomponent />
						<Foodcomponent />
						<Foodcomponent />
						<Foodcomponent />
						<Foodcomponent />
					</ScrollView>
				</View>
			</ScrollView>
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
		// marginTop: 10,
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

	},
	gridContainer: {
		margin: 5,
		flexDirection: "row",
		flexWrap: "wrap",
		alignItems: "flex-start",
		justifyContent: "space-between",
	},
	brandtext: {
		fontSize: 11,
		fontWeight: '500',
		fontFamily: 'Inter',
		marginTop: 4,
		alignSelf: 'center',
		textAlign: 'center',
	},
	shadow1: {
		shadowColor: "#000",
		shadowOffset: {
			width: 0,
			height: 3,
		},
		shadowOpacity: 0.27,
		shadowRadius: 4.65,

		elevation: 6,
	}

});