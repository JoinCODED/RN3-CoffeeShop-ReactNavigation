import { decorate, observable } from "mobx";

class CartStore {
  constructor() {
    this.items = null;
  }
}

decorate(CartStore, {
  items: observable
});

export default new CartStore();
