import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { Button, TextInput } from 'react-native-paper';
import Header from './components/Header';

export default function LoginScreen() {
  return (
    <>
      <Header title="Coucou" />
      <View style={styles.container}>
        <TextInput placeholder="Email" />
        <TextInput placeholder="Password" />
        <Button mode="contained">Login</Button>
        <StatusBar style="auto" />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    gap: 10,
    padding: 10,
  },
});
