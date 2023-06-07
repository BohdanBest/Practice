class HttpError extends Error {
  constructor(response) {
    super(`${response.status} for ${response.url}`);
    this.name = "HttpError";
    this.response = response;
  }
}
async function loadJson(url) {
  let response = await fetch(url);
  if (response.status == 200) {
    return response.json();
  }
}
async function demoGithubUser() {
  let user;
  while (!user) {
    let name = prompt("Enter the name", "iliakan");
    try {
      user = await loadJson(`https://api.github.com/users/${name}`);
      alert(`Ім’я та прізвище: ${user.name}.`);
    } catch (err) {
      if (err instanceof HttpError && err.response.status == 404) {
        alert("User not found");
      } else {
        throw err;
      }
    }
  }
  return user;
}
demoGithubUser();
