import React from 'react';
import { View, Text,Button } from 'react-native';

export default class CountScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerTitle:'计数器',
      headerRight: (
        <Button
          onPress={navigation.getParam('increaseCount')}
          title="+1"
          color="#fff"
        />
      ),
    };
  };

  componentDidMount() {
    console.log('componentDidMount');
    this.props.navigation.setParams({ increaseCount: this._increaseCount });
  }

  state = {
    count: 0,
  };

  _increaseCount = () => {
    this.setState({ count: this.state.count + 1 });
  };
  
  /* later in the render function we display the count */
  render(){
    return (
      <View>
        <Text>{this.state.count}</Text>
      </View>
    )
  }
}