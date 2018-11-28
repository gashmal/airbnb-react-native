import React, { Component } from "react";
import { createStackNavigator, createAppContainer } from "react-navigation";
import {
	Text,
	View,
	StyleSheet,
	StatusBar,
	TouchableOpacity,
	TextInput,
	Image,
	ScrollView,
	KeyboardAvoidingView,
	Platform
} from "react-native";
import axios from "axios";

export default class User extends Component {
	state = {
		_id: "",
		account: {
			photos: [],
			favorites: [],
			rooms: [],
			username: "",
			description: ""
		}
	};

	getUser() {
		axios
			.get("https://airbnb-api.now.sh/api/user/58ff73cc1765a998979a338e", {
				headers: {
					Authorization: "Bearer " + "8piJbT3gYzYKgzuo"
				}
			})
			.then(response => {
				this.setState(response.data);
			});
	}

	render() {
		console.log("yes my men");
		return (
			<ScrollView>
				<View style={styles.body}>
					<StatusBar backgroundColor="#FF5A5F" barStyle="light-content" />
					<View>
						<Image
							source={{
								uri: this.state.account.photos[0]
							}}
							style={styles.img}
						/>
					</View>
					<View style={styles.card}>
						<View
							style={{
								flexDirection: "row",
								borderBottomColor: "gray",
								borderBottomWidth: 1,
								height: 25,
								margin: 10
							}}
						>
							<Text style={styles.textInfo}>Name</Text>
							<Text style={styles.textName}>{this.state.account.username}</Text>
						</View>
						<View
							style={{
								borderBottomColor: "gray",
								borderBottomWidth: 1,
								margin: 10
							}}
						>
							<Text style={styles.textInfo2}>Bio</Text>
							<Text style={styles.textBio2}>
								{this.state.account.description}
							</Text>
						</View>
					</View>
					<TouchableOpacity
						onPress={() => {
							this.getUser();
						}}
					>
						<View style={styles.touch}>
							<Text style={styles.touchText}>GetInfo</Text>
						</View>
					</TouchableOpacity>
				</View>
			</ScrollView>
		);
	}

	componentDidMount() {
		this.getUser();
	}
}

const styles = StyleSheet.create({
	scroll: {
		flex: 1
	},

	body: {
		backgroundColor: "#FF5A5F",
		flex: 1,
		alignItems: "center",
		paddingTop: 30,
		paddingBottom: 30
	},
	textName: {
		color: "gray",
		fontSize: 15,

		textAlign: "right"
	},
	textBio: {
		color: "gray",
		fontSize: 15,
		flex: 1
	},
	textBio2: {
		color: "gray",
		fontSize: 15
	},
	textInfo: {
		color: "black",
		fontSize: 15,
		flex: 1
	},
	textInfo2: {
		color: "black",
		fontSize: 15,
		paddingBottom: 6
	},
	input: {
		marginTop: 30,
		color: "white",
		height: 40,
		borderBottomColor: "white",
		borderBottomWidth: 1,
		width: 280
	},
	touch: {
		marginTop: 30,
		backgroundColor: "white",
		borderRadius: 25
	},
	touchText: {
		color: "#FF5A5F",
		textAlign: "center",
		fontSize: 20,
		paddingVertical: 10,
		paddingHorizontal: 30
	},
	card: {
		margin: 30,
		borderRadius: 15,
		backgroundColor: "white"
	},
	img: {
		width: 90,
		height: 90,
		borderRadius: 45,
		backgroundColor: "white",
		borderColor: "white",
		borderWidth: 3
	}
});
