import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView, TextInput, Button } from 'react-native';

const Cat = (props) => {
  const {isHungry, setIsHungry} = useState(true);

  return(
    <View style={styles.container}>
      <Text>
        I am {props.name}, and I am {isHungry ? 'hungry' : 'full'}!
      </Text>
      <Button
        onPress={()=>{
          setIsHungry(true);
        }}
        disabled={!isHungry}
        title={isHungry ? 'Pour me some milk, please!' : 'Thank You'}
      />
    </View>
  );
}

export default function App(){
  return(
    <>
      <Cat name="Pituco" />
      <Cat name="Potchoco" />
    </>
  )
}

const styles = StyleSheet.create({
  container:{
    marginTop: 25
  },
});