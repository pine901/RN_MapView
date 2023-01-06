import React, {useState, useEffect} from 'react';
import {View, Image} from 'react-native';
import styles from './styles';
import {connect} from 'react-redux';
import MapView, {Marker, Geojson, PROVIDER_GOOGLE} from 'react-native-maps';
import {geoData} from '../../const/const';
import PopupDialog from '../../components/PopupDialog';
import PointImage from '../../../assets/images/point.jpg';
import {TouchableOpacity} from 'react-native-gesture-handler';

const LATITUDE_DELTA = 0.09;
const LONGITUDE_DELTA = 0.09;

const MainScreen = props => {
  const [popUp, setPopUp] = useState(false);
  const [region, setRegion] = useState({
    latitude: geoData.features[0].geometry.coordinates[1],
    longitude: geoData.features[0].geometry.coordinates[0],
    latitudeDelta: LATITUDE_DELTA,
    longitudeDelta: LONGITUDE_DELTA,
  });

  const [coordinate, setCoordinate] = useState({
    latitude: geoData.features[0].geometry.coordinates[1],
    longitude: geoData.features[0].geometry.coordinates[0],
  });

  const onUserPressed = event => {
    setPopUp(true);
    setCoordinate(event.nativeEvent.coordinate);
  };

  const onCofirmPressed = () => {
    setPopUp(false);
  };

  const onRegionChange = region => {
    setRegion(region);
  };

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        provider={PROVIDER_GOOGLE}
        loadingEnabled
        region={region}
        onMarkerPress={onUserPressed}
        //onRegionChange={onRegionChange}
      >
        <Geojson
          geojson={geoData}
          strokeColor="red"
          fillColor="green"
          strokeWidth={2}
        />
      </MapView>
      {popUp && (
        <PopupDialog
          visible={popUp}
          onPress={onCofirmPressed}
          coordinate={coordinate}
        />
      )}
    </View>
  );
};

const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = dispatch => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(MainScreen);
