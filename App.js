import { createAppContainer, createStackNavigator } from "react-navigation";
import LogInScreen from "./src/containers/LogInScreen";
import SignUpScreen from "./src/containers/SignUpScreen";
import UserScreen from "./src/containers/UserScreen";

const App = createStackNavigator({
	SignUp: {
		screen: SignUpScreen,
		navigationOptions: {
			header: null
		}
	},
	User: {
		screen: UserScreen,
		navigationOptions: {
			header: null
		}
	},
	LogIn: {
		screen: LogInScreen,
		navigationOptions: {
			header: null
		}
	}
});

export default createAppContainer(App);
