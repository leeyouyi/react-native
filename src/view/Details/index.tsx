import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import {RootStackParamList} from '../../Router';

export interface DetailsProps
  extends NativeStackScreenProps<RootStackParamList, 'Details'> {}

// type Props = NativeStackScreenProps<ParamListBase, 'Details'>;

const Details = ({route, navigation}: DetailsProps): JSX.Element => {
  console.log(route.params);
  const {itemId, otherParam} = route.params;
  return (
    <View style={styles.flex}>
      <Text>Details</Text>
      <Text>itemId: {JSON.stringify(itemId)}</Text>
      <Text>otherParam: {JSON.stringify(otherParam)}</Text>
      <Button
        title="Go to Details... again"
        onPress={() =>
          navigation.push('Details', {
            itemId: itemId,
            otherParam: otherParam,
          })
        }
      />

      <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
      <Button title="Go back" onPress={() => navigation.goBack()} />
      <Button
        title="Go back to first screen in stack"
        onPress={() => navigation.popToTop()}
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

export default Details;
