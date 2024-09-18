import MapView, { Marker } from 'react-native-maps';
import { styles } from './styles';

export default function MapComponent(props) {
  return(
    <MapView
      style={styles.map} 
      initialRegion={{
        latitude: 60.200692,
        longitude: 24.934302,
        latitudeDelta: 0.0322,
        longitudeDelta: 0.0221,
      }} 
    >
    <Marker
      coordinate={{
      latitude: props.parameters.latitude, 
      longitude: props.parameters.longitude}}
      title={props.parameters.name}
    />
    </MapView>
  );
}