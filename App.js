
import { StyleSheet, Text, View } from 'react-native';
import FetchData from './src/index'
export default function App() {
  return (
    <View style={styles.container}>
     <FetchData/>
    
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
