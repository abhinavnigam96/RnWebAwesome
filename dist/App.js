/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import React from 'react';
import { SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, View, Button, } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useLinkTo } from '@react-navigation/native';
// import {
//   // Colors,
//   DebugInstructions,
//   Header,
// } from 'react-native/Libraries/NewAppScreen';
var Colors = {
    white: '#fff',
    black: '#000',
    light: '#ddd',
    dark: '#333',
    lighter: '#eee',
    darker: '#111',
};
function Section(_a) {
    var children = _a.children, title = _a.title;
    var isDarkMode = true;
    return (React.createElement(View, { style: styles.sectionContainer },
        React.createElement(Text, { style: [
                styles.sectionTitle,
                {
                    color: isDarkMode ? Colors.white : Colors.black,
                },
            ] }, title),
        React.createElement(Text, { style: [
                styles.sectionDescription,
                {
                    color: isDarkMode ? Colors.light : Colors.dark,
                },
            ] }, children)));
}
var config = {
    screens: {
        // initialRouteName: 'Home',
        Home: 'home',
        Profile: 'profile',
    },
};
var linking = {
    prefixes: ['http://localhost:8080'],
    config: config,
};
function App() {
    // return <Screen2 />;
    var Stack = createNativeStackNavigator();
    return (React.createElement(NavigationContainer, { linking: linking },
        React.createElement(Stack.Navigator, null,
            React.createElement(Stack.Screen, { name: "Home", component: Home }),
            React.createElement(Stack.Screen, { name: "Profile", component: Profile }))));
}
var Home = function (_a) {
    var navigation = _a.navigation, route = _a.route;
    var isDarkMode = true;
    var backgroundStyle = {
        backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    };
    var move = useLinkTo();
    var st = navigation.getState();
    console.log("Abhinav ".concat(st));
    console.log("".concat(st.toString()));
    return (React.createElement(SafeAreaView, { style: backgroundStyle },
        React.createElement(StatusBar, { barStyle: isDarkMode ? 'light-content' : 'dark-content', backgroundColor: backgroundStyle.backgroundColor }),
        React.createElement(ScrollView, { contentInsetAdjustmentBehavior: "automatic", style: backgroundStyle },
            React.createElement(View, { style: {
                    backgroundColor: isDarkMode ? Colors.black : Colors.white,
                } },
                React.createElement(Section, { title: route.name },
                    "Edit ",
                    React.createElement(Text, { style: styles.highlight }, "App.tsx"),
                    " to change this screen and then come back to see your edits."),
                React.createElement(Section, { title: "See Your Changes" }),
                React.createElement(Section, { title: "Learn More" }, "Read the docs to discover what to do next:"),
                React.createElement(Button, { onPress: function () { return move('/profile'); }, title: 'Go to Profile', color: "#841584", accessibilityLabel: "Learn more about this purple button" })))));
};
var Profile = function (_a) {
    var navigation = _a.navigation, route = _a.route;
    var isDarkMode = true;
    var backgroundStyle = {
        backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    };
    var st = navigation.getState();
    console.log("Abhinav Profile ".concat(st));
    console.log("".concat(st.toString()));
    return (React.createElement(SafeAreaView, { style: backgroundStyle },
        React.createElement(StatusBar, { barStyle: isDarkMode ? 'light-content' : 'dark-content', backgroundColor: backgroundStyle.backgroundColor }),
        React.createElement(ScrollView, { contentInsetAdjustmentBehavior: "automatic", style: backgroundStyle },
            React.createElement(View, { style: {
                    backgroundColor: isDarkMode ? Colors.black : Colors.white,
                } },
                React.createElement(Section, { title: route.name },
                    "Edit ",
                    React.createElement(Text, { style: styles.highlight }, "App.tsx"),
                    " to change this screen and then come back to see your edits."),
                React.createElement(Section, { title: "See Your Changes" }),
                React.createElement(Section, { title: "Learn More" }, "Read the docs to discover what to do next:"),
                React.createElement(Button, { onPress: function () { return navigation.goBack(); }, title: 'Back to home', color: "#841584", accessibilityLabel: "Learn more about this purple button" })))));
};
var styles = StyleSheet.create({
    sectionContainer: {
        marginTop: 32,
        paddingHorizontal: 24,
    },
    sectionTitle: {
        fontSize: 24,
        fontWeight: '600',
    },
    sectionDescription: {
        marginTop: 8,
        fontSize: 18,
        fontWeight: '400',
    },
    highlight: {
        fontWeight: '700',
    },
});
export default App;
