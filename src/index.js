import UcodeSdk from "./UcodeSdk.js";

const config = {
  baseURL: "https://api.client.u-code.io",
};

const auth = new UcodeSdk.Auth(config);

const loginData = {
  username: "integrationtestgo",
  password: "integrationtestgo",
  project_id: "f05fdd8d-f949-4999-9593-5686ac272993",
  client_type: "10debeef-b5b9-415d-bfe8-dbd8646e2fd4",
};

const headers = {
  "Resource-Id": "b74a3b18-6531-45fc-8e05-0b9709af8faa",
  "Environment-Id": "e8b82a93-b87f-4103-abc4-b5a017f540a4",
};

auth
  .login(loginData, headers)
  .then((response) => {
    if (response.status === "done") {
      console.log("Login successful:", response.data);
    } else {
      console.error("Login failed:", response.data);
    }
  })
  .catch((error) => {
    console.error("Error during login:", error);
  });
