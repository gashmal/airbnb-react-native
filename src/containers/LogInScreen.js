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
	KeyboardAvoidingView
} from "react-native";
import axios from "axios";

export default class LogInScreen extends Component {
	state = {
		text: "",
		password: ""
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
			<View style={styles.body}>
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
				<Text style={styles.text}>Welcome</Text>
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
			</View>
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
		paddingTop: 60
	},
	text: { color: "white", textAlign: "center", fontSize: 35, paddingTop: 40 },
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
		borderRadius: 25,
		marginBottom: 20
	},
	touchText: {
		color: "#FF5A5F",
		textAlign: "center",
		fontSize: 20,
		paddingVertical: 10,
		paddingHorizontal: 30
	}
});
