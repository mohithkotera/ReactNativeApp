import {createStackNavigator} from '@react-navigation/stack';
import Landing from '../Files/Landing';
import Signin from '../Files/Signin';

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Landing" component={Landing} />
      <Stack.Screen name="Signin" component={Signin} />
    </Stack.Navigator>
  );
}
export default MyStack;
