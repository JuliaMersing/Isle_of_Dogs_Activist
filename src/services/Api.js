const getApiData = () => {
  return fetch(
    "http://51.38.51.187:5050/api/v1/docs/#/users/UsersController_getMe"
  )
    .then((response) => response.json())
    .then((data) => {
      const cleanData = data.results.map((user) => {
        return {};
      });
      return cleanData;
    });
};

export default getApiData;
