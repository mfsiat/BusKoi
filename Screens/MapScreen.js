import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  TouchableOpacity,
  ActivityIndicator
} from "react-native";
import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";
import Geolocation from "react-native-geolocation-service";
import SearchBox from "./Components/SearchBox";
// import SearchResults from "./Components/SearchResults";


const initialState = {
  latitude: null,
  longitude: null,
  latitudeDelta: 0.0422,
  longitudeDelta: 0.0121
};

const MapScreen = () => {
  const [currentPosition, setCurentPosition] = useState(initialState);

  useEffect(() => {
    Geolocation.getCurrentPosition(
      position => {
        // alert(JSON.stringify(position))
        const { longitude, latitude } = position.coords;
        setCurentPosition({
          ...currentPosition,
          latitude,
          longitude
        });
      },
      error => alert(error.message),
      { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
    );
  }, []);



  // Custom MapStyles

  var mapStyle = [
    {
      elementType: "geometry",
      stylers: [
        {
          color: "#ebe3cd"
        }
      ]
    },
    {
      elementType: "labels.text.fill",
      stylers: [
        {
          color: "#523735"
        }
      ]
    },
    {
      elementType: "labels.text.stroke",
      stylers: [
        {
          color: "#f5f1e6"
        }
      ]
    },
    {
      featureType: "administrative",
      elementType: "geometry.stroke",
      stylers: [
        {
          color: "#c9b2a6"
        }
      ]
    },
    {
      featureType: "administrative.land_parcel",
      elementType: "geometry.stroke",
      stylers: [
        {
          color: "#dcd2be"
        }
      ]
    },
    {
      featureType: "administrative.land_parcel",
      elementType: "labels.text.fill",
      stylers: [
        {
          color: "#ae9e90"
        }
      ]
    },
    {
      featureType: "landscape.natural",
      elementType: "geometry",
      stylers: [
        {
          color: "#dfd2ae"
        }
      ]
    },
    {
      featureType: "poi",
      elementType: "geometry",
      stylers: [
        {
          color: "#dfd2ae"
        }
      ]
    },
    {
      featureType: "poi",
      elementType: "labels.text.fill",
      stylers: [
        {
          color: "#93817c"
        }
      ]
    },
    {
      featureType: "poi.park",
      elementType: "geometry.fill",
      stylers: [
        {
          color: "#a5b076"
        }
      ]
    },
    {
      featureType: "poi.park",
      elementType: "labels.text.fill",
      stylers: [
        {
          color: "#447530"
        }
      ]
    },
    {
      featureType: "road",
      elementType: "geometry",
      stylers: [
        {
          color: "#f5f1e6"
        }
      ]
    },
    {
      featureType: "road.arterial",
      elementType: "geometry",
      stylers: [
        {
          color: "#fdfcf8"
        }
      ]
    },
    {
      featureType: "road.highway",
      elementType: "geometry",
      stylers: [
        {
          color: "#f8c967"
        }
      ]
    },
    {
      featureType: "road.highway",
      elementType: "geometry.stroke",
      stylers: [
        {
          color: "#e9bc62"
        }
      ]
    },
    {
      featureType: "road.highway.controlled_access",
      elementType: "geometry",
      stylers: [
        {
          color: "#e98d58"
        }
      ]
    },
    {
      featureType: "road.highway.controlled_access",
      elementType: "geometry.stroke",
      stylers: [
        {
          color: "#db8555"
        }
      ]
    },
    {
      featureType: "road.local",
      elementType: "labels.text.fill",
      stylers: [
        {
          color: "#806b63"
        }
      ]
    },
    {
      featureType: "transit.line",
      elementType: "geometry",
      stylers: [
        {
          color: "#dfd2ae"
        }
      ]
    },
    {
      featureType: "transit.line",
      elementType: "labels.text.fill",
      stylers: [
        {
          color: "#8f7d77"
        }
      ]
    },
    {
      featureType: "transit.line",
      elementType: "labels.text.stroke",
      stylers: [
        {
          color: "#ebe3cd"
        }
      ]
    },
    {
      featureType: "transit.station",
      elementType: "geometry",
      stylers: [
        {
          color: "#dfd2ae"
        }
      ]
    },
    {
      featureType: "water",
      elementType: "geometry.fill",
      stylers: [
        {
          color: "#b9d3c2"
        }
      ]
    },
    {
      featureType: "water",
      elementType: "labels.text.fill",
      stylers: [
        {
          color: "#92998d"
        }
      ]
    }
  ];

  // Main Code map integration starts from here
  return currentPosition.latitude ? (
    <View style={styles.container}>
      <MapView
        provider={PROVIDER_GOOGLE}
        style={styles.map}
        initialRegion={currentPosition}
        customMapStyle={mapStyle}
        showsUserLocation
        showsMyLocationButton={true}
        showsTraffic={true}
        showsCompass={true}
        rotateEnabled={true}
      >
        <Marker
          draggable
          coordinate={{
            latitude: 23.810331,
            longitude: 90.412521
          }}
          onDragEnd={e => alert(JSON.stringify(e.nativeEvent.coordinate))}
          title={"Test Marker"}
          description={"This is My Location"}
        />

        {/* Sample Bus */}
        <Marker
          draggable
          coordinate={{
            latitude: 23.816848, 
            longitude: 90.411673
          }}
          onDragEnd={e => alert(JSON.stringify(e.nativeEvent.coordinate))}
          title={"বলাকা"}
          description={"This is a Bus"}
        />

        {/* Another Bus */}
        <Marker
          draggable
          coordinate={{
            latitude: 23.818551, 
            longitude: 90.414581
          }}
          onDragEnd={e => alert(JSON.stringify(e.nativeEvent.coordinate))}
          title={"Airport Poribohon"}
          description={"This is a Bus"}
        />
        <Marker
          draggable
          coordinate={{
            latitude: 23.813184, 
            longitude: 90.421080
          }}
          onDragEnd={e => alert(JSON.stringify(e.nativeEvent.coordinate))}
          title={"রাঈদা"}
          description={"This is a Bus"}
        />
        <Marker
          draggable
          coordinate={{
            latitude: 23.820619, 
            longitude: 90.420461
          }}
          onDragEnd={e => alert(JSON.stringify(e.nativeEvent.coordinate))}
          title={"উইনার"}
          description={"This is a Bus"}
        />
        <Marker
          draggable
          coordinate={{
            latitude: 23.815973,  
            longitude: 90.424800
          }}
          onDragEnd={e => alert(JSON.stringify(e.nativeEvent.coordinate))}
          title={"NSU Bus 01"}
          description={"Seat Counter = 00:35"}
        />
        <Marker
          draggable
          coordinate={{
            latitude: 23.813043,   
            longitude: 90.430352
          }}
          onDragEnd={e => alert(JSON.stringify(e.nativeEvent.coordinate))}
          title={"NSU Bus 02"}
          description={"Seat Counter = 00:35"}
        />
        <Marker
          draggable
          coordinate={{
            latitude: 23.816390,    
            longitude: 90.430062
          }}
          onDragEnd={e => alert(JSON.stringify(e.nativeEvent.coordinate))}
          title={"NSU Bus 03"}
          description={"Seat Counter = 00:35"}
        />
      </MapView>
      {/* searchbox to search location  */}
      <SearchBox/> 
      {/* <SearchResults/> */}
    </View>
  ) : (
    <ActivityIndicator style={{ flex: 1 }} animating size="large" />
  );
};


// StyleSheet
const styles = StyleSheet.create({
  container: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    alignItems: "center",
    justifyContent: "flex-end"
  },
  map: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0
  },
  mapButton: {
    width: 75,
    height: 75,
    borderRadius: 85/2,
    backgroundColor: 'rgba(252, 253, 253, 0.9)',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: 'black',
    shadowRadius: 8,
    shadowOpacity: 0.12,
    opacity: .6,
    zIndex: 10,
 }
});

export default MapScreen;
