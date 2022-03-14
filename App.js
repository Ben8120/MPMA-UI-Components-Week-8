import React,{ useState} from 'react';

import { SafeAreaView, StyleSheet, View, Image, TouchableOpacity, Text } from 'react-native';
import { Icon, CheckBox, Slider } from 'react-native-elements';

const App = () => {
  const [isSelected, setIsSelected] = useState(false);
  const [slider, setSlider] = useState(0);

  const showAlert = () => {
    alert('FAB Clicked');
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <Text style={styles.textStyle}> Instruction : Click on FAB </Text>

        <CheckBox 
          title={isSelected}
          checked={isSelected}
          onPress={() => setIsSelected(!isSelected)}
        />

        <Text>CheckBox: {isSelected? "Yes": "No"}</Text>
        
        <Slider 
          value={slider}
          onValueChange={setSlider}
          maximumValue={100}
          minimumValue={0}
          step={1}
        />
        <Text>Slider Value: {slider}</Text>

        <TouchableOpacity
          activeOpacity={0.7}
          onPress={showAlert}
          style={styles.touchableOpacityStyle}>
          <Icon name={"arrow-circle-down"}
            style={styles.floatingButtosnStyle}
            />
          {/* <Image source = { require('./assets/iconFAB.png')}
            style={styles.floatingButtonStyle}
          /> */}
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 10,
  },
  textStyle: {
    fontSize: 30,
    textAlign: 'center',
    padding: 10,
  },
  touchableOpacityStyle: {
    position: 'absolute',
    width: 100,
    height: 100,
    alignItems: 'center',
    justifyContent: 'center',
    right: 30,
    bottom: 30,
  },
  floatingButtonStyle: {
    resizeMode: 'contain',
    width: 50,
    height: 50,
  },
});
