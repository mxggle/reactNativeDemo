// In App.js in a new project

import React from 'react';
import { View, Text,Button,Image } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import CountScreen from './components/CountScreen'
import DetailScreen from './components/DetailScreen'
import MapScreen from './components/MapScreen'
class LogoTitle extends React.Component {
  render() {
    return (
      <Image
        source={{uri:'http://img.51miz.com/Element/00/89/14/19/d5f05300_E891419_3e1e1907.png'}}
        style={{ width: 30, height: 30 }}
      />
    );
  }
}
class HomeScreen extends React.Component {
  static navigationOptions = ({ navigation }) =>  {
    return {
      title: 'Home',
      headerTitle:'首页',
      headerRight: (
        <Button
          onPress={() => alert('This is a button!')}
          title="Info"
          color="#fff"
        />
      ),
      headerLeft: (
        <Button
          onPress={() => navigation.navigate('MyModal')}
          title="Info"
          color="#fff"
        />
      )
    }
  };
  componentDidMount(){
    console.log('HomeScreen did mount');
  }
  componentWillUnmount(){
    console.log('HomeScreen will unmount');
  }
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>
        <Button
          title="Go to Details"
          onPress={() => {
            /* 1. Navigate to the Details route with params */
            this.props.navigation.navigate('Details', {
              itemId: 86,
              otherParam: '详情页的标题'
            });
          }}
        />
        <Button
        title="Go to Count"
        onPress={() => {
          /* 1. Navigate to the Details route with params */
          this.props.navigation.navigate('Count');
        }}
      />
      <Button
        title="Go to Map"
        onPress={() => {
          /* 1. Navigate to the Details route with params */
          this.props.navigation.navigate('Map');
        }}
      />
      </View>
    );
  }
}
class ModalScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text style={{ fontSize: 30 }}>This is a modal!</Text>
        <Button
          onPress={() => this.props.navigation.goBack()}
          title="Dismiss"
        />
      </View>
    );
  }
}
class ModalScree2 extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text style={{ fontSize: 30 }}>This is a MainStack modal!</Text>
        <Button
          onPress={() => this.props.navigation.goBack()}
          title="Dismiss"
        />
      </View>
    );
  }
}
const MainStack = createStackNavigator({
  Home: HomeScreen,
  Details: DetailScreen,
  Count:CountScreen,
  MyModal:ModalScree2,
  Map:MapScreen
}, {
  initialRouteName: 'Home',
  defaultNavigationOptions: {
    headerStyle: {
      backgroundColor: '#f4511e',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  },
  mode: 'card', // modal
  headerMode: 'float',
});

const RootStack = createStackNavigator(
  {
    Main: {
      screen: MainStack,
    },
    MyModal: {
      screen: ModalScreen,
    },
  },
  {
    mode: 'modal', // modal
    headerMode: 'none'
  }
);

export default createAppContainer(RootStack);
