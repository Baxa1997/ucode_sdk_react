import UcodeSdk from "./UcodeSdk.js";

const config = {
  baseURL: "https://api.client.u-code.io",
  project_id: "0f111e78-3a93-4bec-945a-2a77e0e0a82d",
};
const sdk = new UcodeSdk(config);

const loginData = {
  username: "",
  password: "",
  project_id: "f05fdd8d-f949-4999-9593-5686ac272993",
  client_type: "10debeef-b5b9-415d-bfe8-dbd8646e2fd4",
};

const headers = {
  "Resource-Id": "b74a3b18-6531-45fc-8e05-0b9709af8faa",
  "Environment-Id": "e8b82a93-b87f-4103-abc4-b5a017f540a4",
};
const loginButton = document.querySelector("#loginButton");
const responseContainer = document.querySelector("#response");

const handleLogin = async () => {
  const username = document.querySelector("#login").value;
  const password = document.querySelector("#password").value;

  loginData.username = username;
  loginData.password = password;

  try {
    const response = await sdk.Auth().login(loginData, headers);
    if (response.status === "done") {
      responseContainer.innerHTML = `<p style="color: green;">Login successful: ${
        response?.data?.data?.user?.login
      }</p><p style="color: green;">Login successful: ${JSON.stringify(
        response?.data?.data?.user
      )}</p>`;
    } else {
      responseContainer.innerHTML = `<p style="color: red;">Login failed: ${JSON.stringify(
        response.data
      )}</p>`;
    }
  } catch (error) {
    responseContainer.innerHTML = `<p style="color: red;">Error: ${error.message}</p>`;
    console.error("Login error:", error);
  }
};

loginButton.addEventListener("click", handleLogin);
// integrationtestgo
