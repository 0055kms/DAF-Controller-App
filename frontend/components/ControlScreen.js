import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function ControlScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>컨트롤 화면</Text>
      <Button
        title="농작물 물주기"
        onPress={() => {
          // 아두이노 연결
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
});
