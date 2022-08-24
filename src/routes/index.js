import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Welcome from '../pages/Welcome';
import Signin from '../pages/Signin';
import Home from '../pages/Home';
import RegisterMotorista from '../pages/RegisterMotorista';
import Loading from '../pages/Loading/Loading';
import ExibicaoFrete from '../pages/Fretes/ExibicaoFrete';
import Suporte from '../pages/Suporte';

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
            <Stack.Screen
                name="Loading"
                component={Loading}
                options={{headerShown: false}}
            />
            <Stack.Screen
                name="ExibicaoFrete"
                component={ExibicaoFrete}
                options={{headerShown: false}}
            />
            <Stack.Screen
                name='Suporte'
                component={Suporte}
                options={{headerShown: false}}
            />

        </Stack.Navigator>
    )
}