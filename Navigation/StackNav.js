import { createStackNavigator } from "react-navigation-stack";

import CoffeeList from "../Components/CoffeeList";
import CoffeeDetail from "../Components/CoffeeDetail";
import Login from "../Components/Login";
import CoffeeCart from "../Components/CoffeeCart";

const StackNav = createStackNavigator(
  {
    ListScreen: CoffeeList,
    DetailScreen: CoffeeDetail,
    LoginScreen: Login,
    CoffeeCartScreen: CoffeeCart
  },
  {
    initialRouteName: "LoginScreen",
    defaultNavigationOptions: {
      headerTintColor: "black",
      headerStyle: {
        backgroundColor: "pink",
        fontWeight: "bold"
      }
    }
  }
);

export default StackNav;
