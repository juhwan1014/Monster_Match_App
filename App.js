
import React, {useState} from 'react';
import { StyleSheet, Text, ScrollView, SafeAreaView, Button, RefreshControl } from 'react-native';
import Mon from './src/components/MonsterDetail'
import Constants from 'expo-constants';


export const images = {
  head: {
    0: require('./assets/monster1_head.png'),
    1: require('./assets/monster2_head.png'),
    2: require('./assets/monster3_head.png'),
  },
  body: {
    0: require('./assets/monster1_body.png'),
    1: require('./assets/monster2_body.png'),
    2: require('./assets/monster3_body.png'),
  },
  feet: {
    0: require('./assets/monster1_feet.png'),
    1: require('./assets/monster2_feet.png'),
    2: require('./assets/monster3_feet.png'),
  }
}



export default function App() {


  

  return (
    
    
    <SafeAreaView style={styles.container}>
      <ScrollView>
       {/* <Text>Monster Match Application</Text> */}
    <Mon imageSrc={images.head[Math.floor(Math.random() * 3)]} />
    <Mon imageSrc={images.body[Math.floor(Math.random() * 3)]} />
    <Mon imageSrc={images.feet[Math.floor(Math.random() * 3)]} />
  
   

    <Button
        title="Match Monster!"
        onPress={() => {
       
        }}  
        />
  
  
    </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
 
});
