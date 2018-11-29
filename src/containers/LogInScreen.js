import React, { Component } from "react";
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
	Dimensions
} from "react-native";
import axios from "axios";

const width = Dimensions.get("window").width;

export default class LogInScreen extends Component {
	state = {
		text: "arno@airbnb-api.com",
		password: "password01"
	};

	register() {
		axios
			.post(
				"https://airbnb-api.now.sh/api/user/log_in",
				{
					email: this.state.text,
					password: this.state.password
				},
				{
					headers: {
						"Content-Type": "application/json"
					}
				}
			)
			.then(response => this.props.navigation.navigate("User", response.data));
	}

	render() {
		console.log("yes my men");

		return (
			<KeyboardAvoidingView style={styles.body} behavior="padding" enabled>
				<StatusBar backgroundColor="#FF5A5F" barStyle="light-content" />
				<View>
					<Image
						source={{
							uri:
								"http://1302802789.rsc.cdn77.org/wp-content/uploads/2016/12/airbnb-white-logo-crop.png"
						}}
						style={{ width: 80, height: 80 }}
					/>
				</View>
				<Text style={styles.text}>Welcome !</Text>
				<View>
					<TextInput
						style={styles.input}
						onChangeText={text => this.setState({ text })}
						value={this.state.text}
						keyboardType="email-address"
						placeholder="email"
					/>
				</View>
				<View>
					<TextInput
						style={styles.input}
						secureTextEntry
						onChangeText={password => this.setState({ password })}
						value={this.state.password}
						placeholder="password"
					/>
				</View>

				<TouchableOpacity
					onPress={() => {
						this.register();
					}}
				>
					<View style={styles.touch}>
						<Text style={styles.touchText}>Login</Text>
					</View>
				</TouchableOpacity>
			</KeyboardAvoidingView>
		);
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
		justifyContent: "center",
		paddingTop: 60
	},
	text: {
		color: "white",
		textAlign: "center",
		fontSize: 35,
		marginTop: 20,
		marginBottom: 40
	},
	input: {
		marginBottom: 30,
		color: "white",
		height: 40,
		borderBottomColor: "white",
		borderBottomWidth: 1,
		width: width * 0.75
	},
	touch: {
		backgroundColor: "white",
		borderRadius: 25,
		marginBottom: 30
	},
	touchText: {
		color: "#FF5A5F",
		textAlign: "center",
		fontSize: 20,
		paddingVertical: 10,
		paddingHorizontal: 30
	}
});
