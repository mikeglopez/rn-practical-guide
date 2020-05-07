import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const GoalItem = (props) => {
  return (
    <View style={styles.listItem}>
      <Text>{props.title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  listItem: {
    padding: 10,
    marginVertical: 10,
    backgroundColor: '#CCCCCC',
    borderColor: '#000000',
    borderWidth: 1
  }
});

export default GoalItem;
