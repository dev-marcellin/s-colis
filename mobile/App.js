import { StatusBar } from 'expo-status-bar';
import React, {userState, useEffect, useState} from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import {BarCodeScanner} from 'expo-barcode-scanner';
import axios from 'axios';

export default function App() {

  const [hasPermission, setHasPermission]= useState(null);
  const [scanned, setScanned] = useState(false);
  const [text, settext]= useState('noot yet scanned')

  const askForCameraPermission = ()=>{
    (async ()=>{
      const {status}= await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status == 'granted')
    })()
  }
  
//request Camera
 //permission
useEffect( ()=>{
  askForCameraPermission();
},[]);
//what happens when scan the bar code
const handleBarCodeScanned = ({type, data})=>{
  setScanned(true);
settext(data);

const user = {
  code: data
};
axios.post('http://192.168.1.104:5000/api/colis/validation', user)
      .then(res => {
        console.log("reponse du serveur "+res);
       
      })

console.log('type: '+type+ '\ndata '+data);
}
 
// check 
if(hasPermission=== null){
  return(
    <View style={styles.container}>
      <Text>requesting for camera permission</Text>
      
    </View>
  )
}
if(hasPermission=== false){
  return(
    <View style={styles.container}>
      <Text style={{margin: 10}}>no access to camera permission</Text>
      <Button title={'Allow Camera'} onPress={()=> askForCameraPermission()}/>
    </View>
  )
}

//return the view
return(
  <View style={styles.container}>
    <View style={styles.barcodebox}>
      <BarCodeScanner
      onBarCodeScanned= {scanned ? undefined : handleBarCodeScanned}
      style={{height: 400, width: 400}} />
   
   </View>
   <Text styles={styles.maintext}>{text}</Text>
   {scanned && <Button title={'scan again?'} onPress={()=> setScanned(false)} color= 'tomato' />}
  </View>
)

  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working one yourou appa!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  barcodebox: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    height: 300,
    width: 300,
    overflow: 'hidden',
    borderRadius: 38,
    backgroundColor: 'tomato'
  },
  maintext: {
    fontSize: 16,
    margin: 28,
  },
});
