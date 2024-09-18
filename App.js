import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, TextInput, View } from 'react-native';
import { styles } from './styles';
import MapComponent from './MapComponent';
import axios from 'axios';
export default function App() {

  const [location, setLocation] = useState("")
  const [parameters, setParameters] = useState([
    //latitude:
    //longitude:
    //name:
  ]);

  const API_KEY = 'c54f30a5449de78c1aae4b04dfc1bd57'
  const URL = '`https://api.positionstack.com/v1/forward?access_key=${API_KEY}&query=${location}`'

  const findLocation = () => {
    axios.get(`https://api.positionstack.com/v1/forward?access_key=${API_KEY}&query=${location}`)
    .then( res => {
      console.log(res.data.data[0])
      setParameters(
        //res.data.data[0].name,
        //latitude: res.data.data[0].latitude,
        //longitude: res.data.data[0].longitude NÄMÄ OLISIN HALUNNUT TEHDÄ NÄIN
        res.data.data[0]
      );
    })
    .catch(error => console.log(error))
  }

  return (
    <View style={styles.container}>
      <MapComponent parameters = {parameters}/>
      <TextInput
        placeholder='Enter adress'
        value={location}
        onChangeText={text => setLocation(text)}
      />
      <Button
        title='Show'
        onPress={findLocation}
      />
      <StatusBar style="auto" />
    </View>
  );
}

