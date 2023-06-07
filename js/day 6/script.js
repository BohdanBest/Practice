//заверешення роботи з промісами
async function loadJson(url) {
  const response = await fetch(url);
  if (response.status === 200) {
    return response.json;
  } else {
    throw new Error(response.status);
  }
}
loadJson("https://javascript.info/no-such-user.json").catch(alert);
