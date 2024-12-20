import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, View, Text, Button, Alert } from 'react-native';
import ScoreBoard from './src/components/ScoreBoard';

export default function App() {
  const [teamAScore, setTeamAScore] = useState(0);
  const [teamBScore, setTeamBScore] = useState(0);

  const incrementScore = (team) => {
    if (team === 'A') {
      setTeamAScore(teamAScore + 1);
      if (teamAScore + 1 === 10) {
        Alert.alert("Kemenangan!", "Tim A Menang!");
      }
    } else {
      setTeamBScore(teamBScore + 1);
      if (teamBScore + 1 === 10) {
        Alert.alert("Kemenangan!", "Tim B Menang!");
      }
    }
  };

  const decrementScore = (team) => {
    if (team === 'A' && teamAScore > 0) {
      setTeamAScore(teamAScore - 1);
    } else if (team === 'B' && teamBScore > 0) {
      setTeamBScore(teamBScore - 1);
    }
  };

  const resetScores = () => {
    setTeamAScore(0);
    setTeamBScore(0);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.header}>Pertandingan Futsal</Text>
        <ScoreBoard
          teamName="Tim A"
          score={teamAScore}
          increment={() => incrementScore('A')}
          decrement={() => decrementScore('A')}
        />
        <ScoreBoard
          teamName="Tim B"
          score={teamBScore}
          increment={() => incrementScore('B')}
          decrement={() => decrementScore('B')}
        />
        <Button title="Reset Pertandingan" onPress={resetScores} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'salmon',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});
