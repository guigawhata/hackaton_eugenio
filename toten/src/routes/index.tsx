import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Idle from '../pages/Idle'
import Home from '../pages/Home'
import ListProducts from '../pages/ListProducts'
import ProductDetails from '../pages/ProductDetails'
import Voucher from '../pages/Voucher'

const Stack = createStackNavigator();

function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode="none">
        <Stack.Screen name="Idle" component={Idle} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="ListProducts" component={ListProducts} />
        <Stack.Screen name="ProductDetails" component={ProductDetails} />
        <Stack.Screen name="Voucher" component={Voucher} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Routes;