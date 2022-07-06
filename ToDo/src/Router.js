import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Primary from "./pages/Primary";
import Secondary from "./pages/Secondary";

import UserProvider from "./context/Provider";

const Tab = createBottomTabNavigator();

function App() {
  return (
    <UserProvider>
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="Ekleme" component={Primary} options={{ header: () => null }} />
          <Tab.Screen name="Listeleme" component={Secondary} options={{ header: () => null  }} />
        </Tab.Navigator>
      </NavigationContainer>
    </UserProvider>
  );
}

export default App;