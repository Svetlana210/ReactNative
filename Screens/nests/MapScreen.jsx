import React from "react";
import { View, Text } from "react-native";
import MapView, { Marker } from "react-native-maps";

const MapScreen = () => {
  return (
    <View style={{ flex: 1 }}>
      <MapView
        style={{ flex: 1 }}
        initialRegion={{
          longitude: -122.406417,
          latitude: 37.785834,
          latitudeDelta: 0.001,
          longitudeDelta: 0.006,
        }}
      >
        <Marker coordinate={{ longitude: -122.406417, latitude: 37.785834 }} />
      </MapView>
    </View>
  );
};

export default MapScreen;
