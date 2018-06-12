const usersUrl = "http://localhost:3000/api/v1/users";

function getUser(){
  return fetch(usersUrl)
  .then(response => response.json())
  .then(usersData => {
    const user = usersData[0];
    return user;
  });
}
