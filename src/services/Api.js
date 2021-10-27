import ls from "./LogalStorage";

const getApiData = () => {
  const token= ls.get("resultAccess")
  return fetch("http://51.38.51.187:5050/api/v1/users")
  , {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`
    },
    .then((response) => response.json())
    .then((data) => {
      const cleanData = data.results.map((user) => {
        return {
          email: items.email,
          password: items.password,
          name: items.name,
          surname: items.surname,
          id: items.id
        };
      });
      return cleanData;
    });
};

export default getApiData;
