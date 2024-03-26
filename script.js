// Get the dynamic text from the URL query parameter
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const wordBase64 = urlParams.get('msg').replace(' ','+');

console.log("Params:", wordBase64);

const dynamicText = decodeURIComponent(escape(atob(wordBase64)));

console.log("Dynamic Text:", dynamicText);
document.getElementById('dynamicText').textContent = dynamicText || 'Text';
