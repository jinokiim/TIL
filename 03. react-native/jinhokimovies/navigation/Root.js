import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Tabs from './Tabs';
import Stack from './Stack';

// Tab과 Stack Nav 를 결합하기 위한 Root
const Nav = createNativeStackNavigator();

const Root = () => (
  // screenOptions={{headerShown: false}} : 맨위 Tabs의 헤더 제거
  <Nav.Navigator screenOptions={{headerShown: false}}>
    <Nav.Screen name="Tabs" component={Tabs}></Nav.Screen>
    <Nav.Screen name="Stack" component={Stack}></Nav.Screen>
  </Nav.Navigator>
);

export default Root;