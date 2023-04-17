import { AppRegistry } from 'react-native';
import App from './App.tsx';
AppRegistry.registerComponent('App', function () { return App; });
AppRegistry.runApplication('App', {
    rootTag: document.getElementById('root'),
});
