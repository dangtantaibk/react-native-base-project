"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_navigation_1 = require("react-navigation");
const AccountScreen_1 = __importDefault(require("../../screens/containers/AccountScreen"));
exports.App = react_navigation_1.createStackNavigator({
    AccountScreen: AccountScreen_1.default
}, {
    headerMode: "none",
    initialRouteName: 'AccountScreen',
    navigationOptions: {
        swipeEnabled: false
    }
});
