import ls from "./LocalStorage";

const url = "http://51.38.51.187:5050/api/v1/users";

const getApiData = () => {
  //Recuperar el codigo de autentificacion guardado en login
  const token = ls.get("resultAccess");
  return fetch(url, {
    method: "GET",
    credentials: "include",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.json())
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
    });
};

export default getApiData;
