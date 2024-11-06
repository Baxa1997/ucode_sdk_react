// src/UcodeSdk.js
import Auth from "./Auth.js";
import Items from "./Items.js";

class UcodeSdk {
  static Auth = Auth;
  static Items = Items;

  constructor(config) {
    this.config = config;
  }
}

export default UcodeSdk;
