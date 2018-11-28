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
	KeyboardAvoidingView
} from "react-native";
import axios from "axios";

export default class SignUp extends Component {
	state = {
		text: "",
		password: "",
		username: "",
		name: "",
		description: ""
	};

	// Pour ceux qui veulent faire le signup en bonus

	// https://airbnb-api.now.sh/api/user/sign_up
	// POST
	// email, password, username, name, description

	register() {
		// alert(JSON.stringify(this.state));
		axios
			.post(
				"https://airbnb-api.now.sh/api/user/sign_up",
				{
					email: this.state.text,
					password: this.state.password,
					username: this.state.username,
					name: this.state.name,
					description: this.state.description
				},
				{
					headers: {
						"Content-Type": "application/json"
					}
				}
			)
			.then(response => {
				alert(JSON.stringify(response.data));
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
								uri:
									"http://1302802789.rsc.cdn77.org/wp-content/uploads/2016/12/airbnb-white-logo-crop.png"
							}}
							style={{ width: 80, height: 80 }}
						/>
					</View>
					<Text style={styles.text}>Sign Up</Text>
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

					<View>
						<TextInput
							style={styles.input}
							onChangeText={username => this.setState({ username })}
							value={this.state.username}
							placeholder="username"
						/>
					</View>
					<View>
						<TextInput
							style={styles.input}
							onChangeText={name => this.setState({ name })}
							value={this.state.name}
							placeholder="name"
						/>
					</View>
					<View>
						<TextInput
							style={styles.input}
							onChangeText={description => this.setState({ description })}
							value={this.state.description}
							placeholder="description"
						/>
					</View>
					<TouchableOpacity
						onPress={() => {
							this.register();
						}}
					>
						<View style={styles.touch}>
							<Text style={styles.touchText}>Sign Up</Text>
						</View>
					</TouchableOpacity>
					<TouchableOpacity
						onPress={() => this.props.navigation.navigate("LogIn")}
					>
						<View style={styles.touch}>
							<Text style={styles.touchText}>Log In</Text>
						</View>
					</TouchableOpacity>
				</View>
			</ScrollView>
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
		paddingTop: 60,
		paddingBottom: 30
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
		borderRadius: 25
	},
	touchText: {
		color: "#FF5A5F",
		textAlign: "center",
		fontSize: 20,
		paddingVertical: 10,
		paddingHorizontal: 30
	}
});
