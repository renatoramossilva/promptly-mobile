/**
 * @format
 */

import {AppRegistry} from 'react-native';
import Router from 'common/src/Router';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => Router);
