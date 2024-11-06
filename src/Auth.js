export default class Auth {
  constructor(config) {
    this.config = config;
  }

  async login(data, headers = {}) {
    // const url = `${this.config.baseURL}/v2/login`;
    const url = `${"https://api.client.u-code.io"}/v2/login`;
    if (!data.project_id) data.project_id = this.config.projectId;
    return this.request(url, "POST", data, headers);
  }

  async request(url, method, data, headers = {}) {
    const defaultHeaders = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${this.config.token || ""}`,
    };

    const response = await fetch(url, {
      method,
      headers: {...defaultHeaders, ...headers},
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      const errorData = await response.json();
      return {
        status: "error",
        data: {
          description: errorData,
          message: `Error ${method} ${url}`,
          error: response.statusText,
        },
      };
    }

    return {
      status: "done",
      data: await response.json(),
    };
  }
}
