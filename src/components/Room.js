import React, { Component } from "react";
import { Text, View, StyleSheet, Image, Dimensions } from "react-native";

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

export default class Room extends Component {
	renderStars = num => {
		const result = [];
		const maxNum = 5;
		for (let i = 0; i < num; i++) {
			result.push("❤️");
		}
		for (let j = 0; j < maxNum - num; j++) {
			result.push("🖤");
		}
		return result;
	};

	renderPrice = num => {
		let viewPrice = [];
		if (num) {
			viewPrice.push("💲");
		}
		if (num > 50) {
			viewPrice.push("💲");
		}
		if (num > 100) {
			viewPrice.push("💲");
		}
		if (num > 200) {
			viewPrice = [];
			viewPrice.push("💰💰");
		}
		if (num > 400) {
			viewPrice = [];
			viewPrice.push("💰");
		}

		return viewPrice;
	};

	render() {
		// alert(JSON.stringify(this.props.room));

		const {
			title,
			price,
			description,
			photos,
			user,
			ratingValue
		} = this.props.room;

		return (
			<View
				style={{
					height: height * 0.3,
					width: width - 60,
					margin: 30,
					tintColor: "black",
					borderRadius: 20,
					backgroundColor: "black",
					zIndex: 1,
					position: "relative",
					elevation: 5
				}}
			>
				<Image
					style={{
						flex: 1,
						zIndex: 2,
						opacity: 0.7,
						borderRadius: 20
						// borderColor: "white",
						// borderWidth: 1
					}}
					source={{
						uri: photos[1]
					}}
					resizeMode="cover"
				/>
				<Text
					style={{
						color: "white",
						zIndex: 2,
						position: "absolute",
						top: 20,
						left: 10,
						fontSize: 16,
						textShadowColor: "black",
						textShadowOffset: { width: -1, height: 0 },
						textShadowRadius: 10,
						paddingRight: 15
					}}
					numberOfLines={1}
				>
					{title}
				</Text>
				<Text
					style={{
						color: "white",
						zIndex: 2,
						position: "absolute",
						top: 50,
						left: 10,
						fontSize: 10,
						textShadowColor: "black",
						textShadowOffset: { width: -1, height: 0 },
						textShadowRadius: 10,
						paddingRight: 15
					}}
					numberOfLines={2}
				>
					{description}
				</Text>
				<Image
					style={{
						flex: 1,
						zIndex: 3,
						position: "absolute",
						bottom: -20,
						right: -20,
						height: 80,
						width: 80,
						borderRadius: 40,

						borderColor: "white",
						borderWidth: 1
					}}
					source={{
						uri: user.account.photos[0]
					}}
					resizeMode="cover"
				/>
				<Text
					style={{
						zIndex: 5,
						position: "absolute",
						top: -10,
						color: "black",
						// opacity: 1,
						left: 20
					}}
				>
					{this.renderStars(ratingValue)}
				</Text>
				<Text
					style={{
						zIndex: 5,
						position: "absolute",
						bottom: -10,
						// opacity: 1,
						left: 15,
						fontSize: 20,
						color: "black"
					}}
				>
					{this.renderPrice(Number(price))}
				</Text>
			</View>
		);
	}
}

const styles = StyleSheet.create({});
