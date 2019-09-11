import React from 'react';
import { View, Text,Button } from 'react-native';
import { MapView } from 'react-native-amap3d'

export default class MapScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerTitle:'高德热力图组件'
    };
  };

  _coordinates = (new Array(200)).fill(0).map(() => ({
    latitude: 39.5 + Math.random(),
    longitude: 116 + Math.random(),
  }))
  render(){
    return (
      <View style={{flex:1}}>
        <MapView zoomLevel={9} style={{flex:1}}>
          <MapView.HeatMap
              opacity={0.8}
              radius={20}
              coordinates={this._coordinates}
          />
        </MapView>
      </View>
    )
  }
}
