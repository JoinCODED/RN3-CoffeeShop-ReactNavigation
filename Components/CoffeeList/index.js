import React, { Component } from "react";

// NativeBase Components
import { List, Content } from "native-base";

//Components
import CoffeeItem from "./CoffeeItem";

// Data
import cafes from "../../data/cafes";

import CartIcon from "../CartIcon";

const CoffeeList = () => {
  let shops;
  if (cafes) {
    shops = cafes.map(cafe => <CoffeeItem cafe={cafe} key={cafe.id} />);
  }
  return (
    <Content>
      <List>{shops}</List>
    </Content>
  );
};

export default CoffeeList;

CoffeeList.navigationOptions = () => {
  return {
    title: "Coffee List",
    headerLeft: null,
    headerRight: <CartIcon />
  };
};
