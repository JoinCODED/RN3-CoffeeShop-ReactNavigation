import { decorate, observable } from "mobx";

class CartStore {
  constructor() {
    this.list = null;
  }
}

decorate(CartStore, {
  list: observable
});

export default new CartStore();
