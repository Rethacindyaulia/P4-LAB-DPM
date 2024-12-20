import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const ScoreBoard = ({ teamName, score, increment, decrement }) => {
  return (
    <View style={styles.scoreBoard}>
      <Text style={styles.teamName}>{teamName}</Text>
      <Text style={styles.score}>{score}</Text>
      <View style={styles.buttonContainer}>
        <Button title="+" onPress={increment} />
        <Button title="-" onPress={decrement} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  scoreBoard: {
    alignItems: 'center',
    marginBottom: 20,
  },
  teamName: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  score: {
    fontSize: 48,
    marginVertical: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '60%',
  },
});

export default ScoreBoard;
