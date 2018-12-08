import React, { Component } from "react";

// NativeBase Components
import { Text, Left, Body, Right, Button, ListItem, Icon } from "native-base";

class CartItem extends Component {
  render() {
    return (
      <ListItem style={{ borderBottomWidth: 0 }}>
        <Left>
          <Text style={{ color: "white", marginLeft: 16 }}>
            {" "}
            {this.props.item.drink}{" "}
          </Text>
          <Text note style={{ marginLeft: 16 }}>
            {this.props.item.option}
          </Text>
        </Left>
        <Body>
          <Text style={{ color: "white" }}>{this.props.item.quantity}</Text>
        </Body>
        <Right>
          <Button transparent>
            <Icon name="trash" style={{ color: "white", fontSize: 21 }} />
          </Button>
        </Right>
      </ListItem>
    );
  }
}

export default CartItem;
