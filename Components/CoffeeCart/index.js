import React from "react";
import { observer } from "mobx-react";

// NativeBase Components
import { Text, List, Button } from "native-base";

// Component
import CartItem from "./CartItem";

//Store
import cartStore from "../../store/cartStore";

const CoffeeCart = () => {
  const { items } = cartStore;
  let cartItems;
  if (items) {
    cartItems = items.map(item => <CartItem item={item} key={item.id} />);
  }

  return (
    <List>
      {cartItems}
      <Button full danger>
        <Text>Checkout</Text>
      </Button>
    </List>
  );
};

export default observer(CoffeeCart);
