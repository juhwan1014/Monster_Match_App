import React from 'react';
import { StyleSheet, Text, View, Image, Button } from 'react-native';



const MonsterDetail = (props) => {
 
    return (
        <View>
      <Image source={props.imageSrc} style={styles.image} />
     
    </View>

  
    )
}

const styles = StyleSheet.create({
    image: {
        width: 300,
        height: 200
      }

})

export default MonsterDetail