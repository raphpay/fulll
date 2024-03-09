import React from 'react';
import { SafeAreaView, Text, View } from 'react-native';
import styles from './src/ui/assets/styles/AppStyles';

function App(): React.JSX.Element {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Github Search</Text>
      </View>
    </SafeAreaView>
  );
}

export default App;
