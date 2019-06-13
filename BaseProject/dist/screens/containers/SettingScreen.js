"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
const react_native_1 = require("react-native");
const TextChangeFontSize_1 = __importDefault(require("../../components/TextChangeFontSize"));
const instructions = react_native_1.Platform.select({
    android: 'Double tap R on your keyboard to reload,\n' +
        'Shake or press menu button for dev menu',
    ios: 'Press Cmd+R to reload,\n' +
        'Cmd+D or shake for dev menu',
});
class SettingScreen extends react_1.Component {
    render() {
        return (react_1.default.createElement(react_native_1.View, { style: styles.container },
            react_1.default.createElement(TextChangeFontSize_1.default, { style: styles.welcome }, "Welcome to React Native!"),
            react_1.default.createElement(TextChangeFontSize_1.default, { style: styles.instructions }, "To get started, edit App.js"),
            react_1.default.createElement(TextChangeFontSize_1.default, { style: styles.instructions }, instructions)));
    }
}
exports.default = SettingScreen;
const styles = react_native_1.StyleSheet.create({
    container: {
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
        flex: 1,
        justifyContent: 'center',
    },
    instructions: {
        color: '#333333',
        marginBottom: 5,
        textAlign: 'center',
    },
    welcome: {
        fontSize: 20,
        margin: 10,
        textAlign: 'center',
    },
});
