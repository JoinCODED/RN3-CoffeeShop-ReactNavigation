import React, { Component } from "react";
import { observer } from "mobx-react";

// NativeBase Components
import { List, Content } from "native-base";

// Store
import coffeeStore from "../../store/coffeeStore";

// Component
import CoffeeItem from "./CoffeeItem";

class CoffeeList extends Component {
  render() {
    const coffeeshops = coffeeStore.coffeeshops;
    let shops;
    if (coffeeshops) {
      shops = coffeeshops.map(coffeeShop => (
        <CoffeeItem coffeeShop={coffeeShop} key={coffeeShop.id} />
      ));
    }
    return (
      <Content>
        <List>{shops}</List>
      </Content>
    );
  }
}

export default observer(CoffeeList);
