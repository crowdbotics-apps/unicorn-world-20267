import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import UserProfile101419Navigator from '../features/UserProfile101419/navigator';
import Tutorial101418Navigator from '../features/Tutorial101418/navigator';
import NotificationList101390Navigator from '../features/NotificationList101390/navigator';
import Settings101389Navigator from '../features/Settings101389/navigator';
import Settings101381Navigator from '../features/Settings101381/navigator';
import UserProfile101379Navigator from '../features/UserProfile101379/navigator';
import BlankScreen0101357Navigator from '../features/BlankScreen0101357/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
UserProfile101419: { screen: UserProfile101419Navigator },
Tutorial101418: { screen: Tutorial101418Navigator },
NotificationList101390: { screen: NotificationList101390Navigator },
Settings101389: { screen: Settings101389Navigator },
Settings101381: { screen: Settings101381Navigator },
UserProfile101379: { screen: UserProfile101379Navigator },
BlankScreen0101357: { screen: BlankScreen0101357Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
