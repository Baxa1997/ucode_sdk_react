export default class Items {
  constructor(config) {
    this.config = config;
  }

  async getList() {
    return this.config.baseURL;
  }
}
