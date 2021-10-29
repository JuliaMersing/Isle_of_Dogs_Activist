import ls from "./LocalStorage";

const url = "http://51.38.51.187:5050/api/v1/users";

const getApiData = () => {
  //Recuperar el codigo de autentificacion guardado en login
  const token = ls.get("token");

  return fetch(url, {
    method: "GET",
    credentials: "include",
    headers: {
      Accept: "application/json",
      Authentication: "Bearer Token",
      "X-Custom-Header": token.accessToken,
    },
  })
    .then((response) => {
      console.log(response);
      return response.json();
    })
    .then((data) => {
      const cleanData = data.results.map((user) => {
        return {
          email: user.email,
          password: user.password,
          name: user.name,
          surname: user.surname,
          id: user.id,
        };
      });
      return cleanData;
    })
    .catch((error) => console.log(error));
};

export default getApiData;
