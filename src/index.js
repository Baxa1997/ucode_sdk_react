import UcodeSdk from "./UcodeSdk.js";

// const config = {
//   baseURL: "https://api.client.u-code.io",
//   project_id: "0f111e78-3a93-4bec-945a-2a77e0e0a82d",
// };
// const sdk = new UcodeSdk(config);

// const loginData = {
//   username: "",
//   password: "",
//   project_id: "f05fdd8d-f949-4999-9593-5686ac272993",
//   client_type: "10debeef-b5b9-415d-bfe8-dbd8646e2fd4",
// };

// const headers = {
//   "Resource-Id": "b74a3b18-6531-45fc-8e05-0b9709af8faa",
//   "Environment-Id": "e8b82a93-b87f-4103-abc4-b5a017f540a4",
// };
// const loginButton = document.querySelector("#loginButton");
// const responseContainer = document.querySelector("#response");

// const handleLogin = async () => {
//   const username = document.querySelector("#login").value;
//   const password = document.querySelector("#password").value;

//   loginData.username = username;
//   loginData.password = password;

//   try {
//     const response = await sdk.Auth().login(loginData, headers);
//     if (response.status === "done") {
//       responseContainer.innerHTML = `<p style="color: green;">Login successful: ${
//         response?.data?.data?.user?.login
//       }</p><p style="color: green;">Login successful: ${JSON.stringify(
//         response?.data?.data?.user
//       )}</p>`;
//     } else {
//       responseContainer.innerHTML = `<p style="color: red;">Login failed: ${JSON.stringify(
//         response.data
//       )}</p>`;
//     }
//   } catch (error) {
//     responseContainer.innerHTML = `<p style="color: red;">Error: ${error.message}</p>`;
//     console.error("Login error:", error);
//   }
// };

// loginButton.addEventListener("click", handleLogin);

const config = {
  authBaseUrl: "https://api.client.u-code.io",
  baseURL: "https://admin-api.ucode.run",
  project_id: "c1240467-739b-4c07-b8c8-6c49546dbf87",
  appId: "P-nATQnKQJkLczhcdrDIcNfLze4CzfvaCZ",
  resource_id: "dafce275-f1e6-4108-917b-4bec30621452",
  env_id: "a4a5fb93-764c-456c-8bbf-a922594f79f0",
  // Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjbGllbnRfcGxhdGZvcm1faWQiOiIiLCJjbGllbnRfdHlwZV9pZCI6IjY5ZWU3ZWJmLTAyZmUtNDk5MC05ODMwLTQ4YWQ4OTViMzVmOSIsImRhdGEiOiJhZGRpdGlvbmFsIGpzb24gZGF0YSIsImV4cCI6MTczMTEyMzE4MywiaWF0IjoxNzMxMDM2NzgzLCJpZCI6IjMxMDBlZDExLTMxYzMtNDRmNi04MTEyLTk5YmIxN2M2NGIyNiIsImlwIjoiYWRkaXRpb25hbCBqc29uIGRhdGEiLCJsb2dpbl90YWJsZV9zbHVnIjoiXCJ1c2VyXCIiLCJwcm9qZWN0X2lkIjoiYzEyNDA0NjctNzM5Yi00YzA3LWI4YzgtNmM0OTU0NmRiZjg3Iiwicm9sZV9pZCI6IjJlN2VkYzQ0LTQ5NjQtNGUyNy05Y2FjLTc4MWVkYmExODhmNiIsInRhYmxlcyI6bnVsbCwidXNlcl9pZCI6ImFiZWVhOTRmLWJmNTUtNDkxNy1hZWVhLWY5NzdhOTU3OWE2OSIsInVzZXJfaWRfYXV0aCI6ImFiZWVhOTRmLWJmNTUtNDkxNy1hZWVhLWY5NzdhOTU3OWE2OSJ9.RUy0SkbKWHGNrQjcRcY_QUlZM460Y_ItzTzazOgOuXU`,
};

const headers = {
  "Resource-Id": "dafce275-f1e6-4108-917b-4bec30621452",
  "Environment-Id": "a4a5fb93-764c-456c-8bbf-a922594f79f0",
};
const loginData = {
  data: {
    limit: 10,
    offset: 0,
    view_fields: ["title"],
    search: "",
    additional_request: {
      additional_field: ["guid"],
      additional_values: [null],
    },
    '"user"_ids': ["abeea94f-bf55-4917-aeea-f977a9579a69"],
  },
};

const sdk = new UcodeSdk(config);

// sdk.Items().create("customer", data, headers);
// sdk.Items().create("customer", loginData, headers);
// sdk.Items().getList("customer", loginData);

sdk.Items().getList("customer", loginData);
