import { decorate, observable } from "mobx";

class CartStore {
  items = [];
}

decorate(CartStore, {
  items: observable
});

export default new CartStore();
