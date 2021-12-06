import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Inicial from './src/views/Inicial/Inicial';
import SobreApp from './src/views/SobreApp/SobreApp';
import Detalhe from './src/views/Detalhes/Detalhe';

const Stack = createStackNavigator();

export default function App() {
return (
<NavigationContainer>
<Stack.Navigator>

<Stack.Screen
name="Inicial"
component={Inicial}
options={
{ cardStyle: StyleSheet.screenInicial,
headerStyle: {backgroundColor: '#800000'},
headerTintColor: '#FFFFFF',
Text: 'bold',
}
}
/>

<Stack.Screen
name="SobreApp"
component={SobreApp}
options={
{ cardStyle: StyleSheet.screenSobreApp,
headerStyle: {backgroundColor: '#800000'},
headerTintColor: '#FFFFFF',
}
}
/>

<Stack.Screen
name="Detalhe"
component={Detalhe}
options={
{ cardStyle: StyleSheet.screenDetalhe,
headerStyle: {backgroundColor: '#800000'},
headerTintColor: '#FFFFFF',
}
}
/>
</Stack.Navigator>
</NavigationContainer>
);
}

