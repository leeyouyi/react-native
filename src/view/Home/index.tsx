import {ParamListBase} from '@react-navigation/native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';

type Props = NativeStackScreenProps<ParamListBase, 'Home'>;

const Home = ({navigation}: Props): JSX.Element => {
  console.log({navigation});
  return (
    <View style={styles.flex}>
      <Text>Home</Text>
      <Button
        title="Go to Details"
        onPress={() =>
          navigation.navigate('Details', {
            itemId: 86,
            otherParam: 'anything you want here',
          })
        }
      />
    </View>
  );
};
const styles = StyleSheet.create({
  flex: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Home;
