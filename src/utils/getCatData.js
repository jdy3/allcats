const checkResponse = response => {
  if (response.status !== 200) {
    console.log(`Error with the api request! ${response.status}`);
    return;
  }
  return response.json();
};

export const getCatData = url => {
  return fetch(`${url}`)
    .then(checkResponse)
    .catch(err => {
      throw new Error(`Fetch getCatData failed ${err}`);
    });
};
