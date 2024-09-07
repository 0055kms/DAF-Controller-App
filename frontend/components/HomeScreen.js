import React from 'react';
import { View, Text, Button, StyleSheet, ScrollView } from 'react-native';

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>기록</Text>
          {/* 최근 5개 농작물 기록 미리보기 */}
          <Button
            title="더보기"
            onPress={() => {/* 상세 페이지 이동 */}}
          />
        </View>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>영상</Text>
          {/* 최근 5개 영상 미리보기 */}
          <Button
            title="더보기"
            onPress={() => {/* 상세 페이지 이동 */}}
          />
        </View>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>QnA</Text>
          {/* 최근 5개 QnA 미리보기 */}
          <Button
            title="더보기"
            onPress={() => {/* 상세 페이지 이동 */}}
          />
        </View>
      </ScrollView>
      <Button
        title="컨트롤러"
        onPress={() => navigation.navigate('Control')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  section: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 24,
    marginBottom: 10,
  },
});
