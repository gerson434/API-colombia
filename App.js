import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet, } from 'react-native';
import BarraNav from './components/BarraNav';

const Stack = createStackNavigator()

export default function App() {
  return (
   <NavigationContainer>
    <BarraNav/>
   </NavigationContainer>
  );
}

<<<<<<< HEAD
=======

>>>>>>> 20c305472f5ff21098fd90b7993bfae0419f6eb8
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
