import React, { Component } from "react";
import { observer } from "mobx-react";

// NativeBase Components
import { Text, List, Button } from "native-base";
// Component
import CartItem from "./CartItem";
//Store
import CartStore from "../../store/CartStore";

class CoffeeCart extends Component {
  render() {
    const list = CartStore.list;
    let content;
    if (list) {
      content = list.map((item, index) => <CartItem item={item} key={index} />);
    }

    return (
      <List>
        {content}
        <Button full danger>
          <Text>Checkout</Text>
        </Button>
      </List>
    );
  }
}

export default observer(CoffeeCart);
