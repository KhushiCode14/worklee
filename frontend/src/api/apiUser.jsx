import apiClient from "./apiClient";

apiClient
  .get("/auth")
  .then((response) => {
    console.log(response.data); // Handle the response
  })
  .catch((error) => {
    console.error(error); // Handle any errors
  });
