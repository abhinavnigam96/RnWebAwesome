/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  Button,
} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useLinkTo } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
// import {
//   // Colors,
//   DebugInstructions,
//   Header,
// } from 'react-native/Libraries/NewAppScreen';

const Colors = {
  white: '#fff',
  black: '#000',
  light: '#ddd',
  dark: '#333',
  lighter: '#eee',
  darker: '#111',
};

type SectionProps = PropsWithChildren<{
  title: string;
}>;

type NavProps = {
  navigate: (arg0: string) => void;
  goBack: () => void;
  getState(): () => void;
};

type RouteProps = {
  name: string;
};

type Props = {
  navigation: NavProps;
  route: RouteProps;
};

function Section({children, title}: SectionProps): JSX.Element {
  const isDarkMode = true;
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
}

const config = {
  screens: {
    // initialRouteName: 'Home',
    Home: 'home',
    Profile: 'profile',
  },
};

const linking = {
  prefixes: ['http://localhost:8080'],
  config,
};

function App(): JSX.Element {
  // return <Screen2 />;
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer linking={linking}>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Profile" component={Profile} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const Home = ({ navigation, route }: Props) => {
  const isDarkMode = true;

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };
  const move = useLinkTo();

  const st = navigation.getState();
  console.log(`Abhinav ${st}`);
  console.log(`${st.toString()}`);
  
  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        {/* <Header /> */}
        <View
          style={{
            backgroundColor: isDarkMode ? Colors.black : Colors.white,
          }}>
          <Section title={route.name}>
            Edit <Text style={styles.highlight}>App.tsx</Text> to change this
            screen and then come back to see your edits.
          </Section>
          <Section title="See Your Changes">
            {/* <ReloadInstructions /> */}
          </Section>
          <Section title="Learn More">
            Read the docs to discover what to do next:
          </Section>
          {/* <LearnMoreLinks /> */}
          <Button
            onPress={() => move('/profile')}
            title={'Go to Profile'}
            color="#841584"
            accessibilityLabel="Learn more about this purple button"
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const Profile = ({ navigation, route }: Props) => {
  const isDarkMode = true;

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const st = navigation.getState();
  console.log(`Abhinav Profile ${st}`);
  console.log(`${st.toString()}`);

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        {/* <Header /> */}
        <View
          style={{
            backgroundColor: isDarkMode ? Colors.black : Colors.white,
          }}>
          <Section title={route.name}>
            Edit <Text style={styles.highlight}>App.tsx</Text> to change this
            screen and then come back to see your edits.
          </Section>
          <Section title="See Your Changes">
            {/* <ReloadInstructions /> */}
          </Section>
          <Section title="Learn More">
            Read the docs to discover what to do next:
          </Section>
          {/* <LearnMoreLinks /> */}
          <Button
            onPress={() => navigation.goBack()}
            title={'Back to home'}
            color="#841584"
            accessibilityLabel="Learn more about this purple button"
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
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
