import { decorate, observable } from "mobx";
import axios from "axios";

class CoffeeStore {
  cafes = null;
  cafe = null;
  loading = true;

  fetchAllcafes = async () => {
    try {
      let res = await axios.get("http://coffee.q8fawazo.me/api/?format=json");
      let cafes = res.data;
      this.cafes = cafes;
      this.loading = false;
    } catch (err) {
      console.error(err);
    }
  };
}

decorate(CoffeeStore, {
  cafes: observable,
  cafe: observable,
  loading: observable
});

let coffeeStore = new CoffeeStore();
coffeeStore.fetchAllcafes();

export default coffeeStore;
