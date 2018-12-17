import React, { Component } from "react";
import { observer } from "mobx-react";

// NativeBase Components
import {
  Thumbnail,
  Text,
  Button,
  Left,
  Body,
  Right,
  List,
  ListItem,
  Picker,
  Content
} from "native-base";

// Style
import styles from "./styles";

//Store
import CoffeeStore from "../../store/coffeeStore";

class CoffeeDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      drink: "Coffee",
      option: "Small"
    };
  }

  changeDrink(value) {
    this.setState({
      drink: value
    });
  }

  changeOption(value) {
    this.setState({
      option: value
    });
  }

  render() {
    const coffeeshops = CoffeeStore.coffeeshops;
    if (!coffeeshops) return <Content />;
    const coffeeshop = coffeeshops[0];
    return (
      <Content>
        <List>
          <ListItem style={styles.top}>
            <Left>
              <Text style={styles.text}>
                {coffeeshop.name + "\n"}
                <Text note>{coffeeshop.location}</Text>
              </Text>
            </Left>
            <Body />
            <Right>
              <Thumbnail bordered source={{ uri: coffeeshop.img }} />
            </Right>
          </ListItem>
          <ListItem style={{ borderBottomWidth: 0 }}>
            <Left>
              <Picker
                note
                mode="dropdown"
                style={{ width: 150 }}
                selectedValue={this.state.drink}
                onValueChange={this.changeDrink.bind(this)}
              >
                <Picker.Item label="Coffee" value="Coffee" />
                <Picker.Item label="Lattee" value="Lattee" />
                <Picker.Item label="Espresso" value="Espresso" />
              </Picker>
            </Left>
            <Body>
              <Picker
                note
                mode="dropdown"
                style={{ width: 150 }}
                selectedValue={this.state.option}
                onValueChange={this.changeOption.bind(this)}
              >
                <Picker.Item label="Small" value="Small" />
                <Picker.Item label="Medium" value="Medium" />
                <Picker.Item label="Large" value="Large" />
              </Picker>
            </Body>
          </ListItem>
          <Button full danger>
            <Text>Add</Text>
          </Button>
        </List>
      </Content>
    );
  }
}

export default observer(CoffeeDetail);
