import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Welcome from '../pages/Welcome';
import Signin from '../pages/Signin';
import Home from '../pages/Home';
import RegisterMotorista from '../pages/RegisterMotorista';

const Stack = createNativeStackNavigator();

export default function Routes(){
    return(
        <Stack.Navigator>
            <Stack.Screen 
                name="Welcome" 
                component={Welcome} 
                options={{headerShown: false}}
            />
            <Stack.Screen 
                name="Signin"
                component={Signin} 
                options={{headerShown: false}}
            />
            <Stack.Screen
                name="Home"
                component={Home}
                options={{headerShown: false}}
            />
            <Stack.Screen
                name="RegisterMotorista"
                component={RegisterMotorista}
                options={{headerShown: false}}
            />
        </Stack.Navigator>
    )
}