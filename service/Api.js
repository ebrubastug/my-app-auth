import axios from "axios";

//for all request
export default async function Httper(method, url, data, headers) {
  return axios({ method, url, data, headers })
    .then(function (response) {
      // handle success
      return response.data;
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
    .finally(function () {
      // always executed
      console.log("Done!");
    });
}