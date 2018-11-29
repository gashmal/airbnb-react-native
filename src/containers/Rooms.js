import React, { Component } from "react";
import {
	Text,
	View,
	FlatList,
	Image,
	Dimensions,
	StatusBar
} from "react-native";
import axios from "axios";
import Room from "../components/Room";

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

export default class Rooms extends Component {
	state = {
		rooms: [],
		city: {
			_id: "",
			source: "",
			name: "",
			slug: "",
			loc: []
		},
		count: ""
	};

	getRooms() {
		axios
			.get("https://airbnb-api.now.sh/api/room?city=paris")
			.then(response => {
				this.setState(response.data);
			});
	}

	render() {
		return (
			<View style={{ flex: 1, backgroundColor: "white", position: "relative" }}>
				<StatusBar backgroundColor="#FF5A5F" barStyle="light-content" />
				<Image
					resizeMode="cover"
					source={require("../../assets/parismap.jpg")}
					style={{
						height,
						width,
						zIndex: -1,
						position: "absolute"
					}}
				/>
				<View
					style={{
						// flex: 1,
						flexDirection: "row",
						justifyContent: "center",
						marginTop: 60,
						marginLeft: 130
					}}
				>
					<View
						style={{
							height: 80,
							width: 80,
							borderTopLeftRadius: 40,
							borderBottomLeftRadius: 40,
							backgroundColor: "#FF5A5F"
						}}
					>
						<Image
							style={{
								height: 80,
								width: 80,
								borderRadius: 40,
								borderColor: "#FF5A5F",
								borderWidth: 1
							}}
							source={{
								uri: this.state.city.source
							}}
							resizeMode="cover"
						/>
					</View>
					<View
						style={{
							flex: 1,
							backgroundColor: "#FF5A5F"
						}}
					>
						<Text
							style={{
								color: "white",
								textAlign: "left",
								marginLeft: 20,
								fontSize: 35,
								textShadowColor: "gray",
								textShadowOffset: { width: -1, height: 0 },
								textShadowRadius: 10,
								paddingRight: 2
							}}
						>
							{this.state.city.name}
						</Text>
						<Text
							style={{
								color: "white",
								textAlign: "left",
								marginLeft: 20,
								fontSize: 8,
								textShadowColor: "gray",
								textShadowOffset: { width: -1, height: 0 },
								textShadowRadius: 3,
								paddingRight: 2
							}}
						>
							<Text style={{ fontWeight: "bold" }}> {this.state.count}</Text>{" "}
							appartement(s) disponible(s)
						</Text>
					</View>
				</View>
				<View
					style={{
						flexDirection: "row",
						position: "absolute",
						left: 0,
						bottom: 30
					}}
				>
					<FlatList
						data={this.state.rooms}
						renderItem={({ item }) => (
							// <Image
							// 	style={{ height: 200, width: 200 }}
							// 	source={{
							// 		uri: item.photos[0]
							// 	}}
							// />

							<Room room={item} />
						)}
						keyExtractor={index => {
							return index;
						}}
						horizontal
					/>
				</View>
			</View>
		);
	}

	componentDidMount() {
		this.getRooms();
	}
}
