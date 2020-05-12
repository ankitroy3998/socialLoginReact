import React from 'react';
import {StyleSheet, SafeAreaView, View, Text} from 'react-native';
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';

class map extends React.Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.mapView}>
          <MapView
            provider={PROVIDER_GOOGLE}
            style={styles.map}
            region={{
              latitude: 37.78825,
              longitude: -122.4324,
              latitudeDelta: 0.015,
              longitudeDelta: 0.0121,
            }}>
            <Marker
              coordinate={{latitude: 37.782259, longitude: -122.4351431}}
              title={'California'}
            />
          </MapView>
          <View style={styles.view}>
            <Text style={styles.viewTxt}> MapView</Text>
          </View>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  mapView: {
    flex: 1,
    backgroundColor: '#e0e0eb',
    marginVertical: 15,
  },
  view: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 60,
  },
  viewTxt: {
    fontFamily: 'futura-medium',
    fontSize: 30,
    color: '#47476b',
  },

  map: {
    flex: 0.75,
    height: '90%',
    borderWidth: 1,
    borderColor: '#000',
  },
});

export default map;
