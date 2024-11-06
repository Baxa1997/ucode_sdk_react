// class UcodeSDK {
//   constructor(config) {
//     this.config = config;
//   }

//   Items(collection) {
//     return new Items(this.config, collection);
//   }

//   Auth() {
//     return new Auth(this.config);
//   }

//   Files() {
//     return new Files(this.config);
//   }

//   Function(path) {
//     return new Function(this.config, path);
//   }

//   async doRequest(url, method, data = {}, headers = {}) {
//     try {
//       const response = await fetch(`${this.config.baseUrl}${url}`, {
//         method,
//         headers: {
//           "Content-Type": "application/json",
//           Authorization: `Bearer ${this.config.token}`,
//           ...headers,
//         },
//         body: method !== "GET" ? JSON.stringify(data) : null,
//       });

//       if (!response.ok) {
//         const errorData = await response.json();
//         throw new Error(
//           `Request failed: ${errorData.message || response.statusText}`
//         );
//       }

//       return await response.json();
//     } catch (error) {
//       console.error("Error in SDK request:", error.message);
//       throw error;
//     }
//   }
// }

// class Items {
//   constructor(config, collection) {
//     this.config = config;
//     this.collection = collection;
//   }

//   async create(data) {
//     const url = `/collections/${this.collection}/items`;
//     return await new UcodeSDK(this.config).doRequest(url, "POST", data);
//   }
// }

// const config = {
//   baseUrl: "https://api.example.com",
//   token: localStorage.getItem("token"),
// };

// const sdk = new UcodeSDK(config);

// sdk
//   .Items("your_collection_name")
//   .create({name: "Sample Item"})
//   .then((response) => {
//     console.log("Item created:", response);
//   })
//   .catch((error) => {
//     console.error("Error creating item:", error);
//   });
