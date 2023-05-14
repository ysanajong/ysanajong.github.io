const api_url = 'https://api.ipify.org/?format=json';
async function getIP() {
  const response = await fetch(api_url);
  const data = await response.json();
  console.log(data.ip);
  document.getElementById('ip').textContent = data.ip;
}
document.getElementById("ua").innerHTML = navigator.userAgent;
document.getElementById("cookieEnabled").innerHTML = navigator.cookieEnabled;
document.getElementById("language").innerHTML = navigator.language;
document.getElementById("languages").innerHTML = navigator.languages;
document.getElementById("vendor").innerHTML = navigator.vendor;
getIP();