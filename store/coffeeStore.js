import { decorate, observable } from "mobx";
import axios from "axios";

class CoffeeStore {
  coffeeshops = null;
  coffeeshop = null;
  loading = true;

  fetchAllCoffeeShops = async () => {
    try {
      let res = await axios.get("http://coffee.q8fawazo.me/api/?format=json");
      let coffeeshops = res.data;
      this.coffeeshops = coffeeshops;
      this.loading = false;
    } catch (err) {
      console.error(err);
    }
  };
}

decorate(CoffeeStore, {
  coffeeshops: observable,
  coffeeshop: observable,
  loading: observable
});

let coffeeStore = new CoffeeStore();
coffeeStore.fetchAllCoffeeShops();

export default coffeeStore;
