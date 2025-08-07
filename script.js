
document.getElementById('registrationForm').addEventListener('submit', async function (e) {
  e.preventDefault();

  const formData = new FormData(this);
  const data = {};
  formData.forEach((value, key) => data[key] = value);

  const response = await fetch('https://sheetdb.io/api/v1/YOUR_SHEETDB_API_ID', {
    method: 'POST',
    body: JSON.stringify(data),
    headers: { 'Content-Type': 'application/json' }
  });

  if (response.ok) {
    window.location.href = "confirmation.html";
  } else {
    alert("Erreur lors de l'inscription. Veuillez réessayer.");
  }
});
