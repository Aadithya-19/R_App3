import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import SplashScreen from '../screens/SplashScreen';
import HomeScreen from '../screens/HomeScreen'
import LogIn from '../screens/LogIn';

const stackNavigatorOptions = {
    headerShown:false,
}

const Screens = createStackNavigator({
    Splash : {
        screen : SplashScreen,
    },
    LogIn : {
        screen : LogIn,
    },
    Home:{
        screen:HomeScreen
    }
},
    {
        defaultNavigationOptions : stackNavigatorOptions,
    }
);

export default createAppContainer(Screens);