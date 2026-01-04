function checkNights(form) {
  const checkin = new Date(form.checkin.value);
  const checkout = new Date(form.checkout.value);
  const diffTime = checkout - checkin;
  const nights = diffTime / (1000 * 60 * 60 * 24);

  if (nights < 4) {
    alert("Il soggiorno minimo è di 4 notti.");
    return false;
  }

  const appartamento = form.querySelector("input[type=hidden]").value;

  const message =
    "Ciao, vorrei informazioni per:\n" +
    "Appartamento: " + appartamento + "\n" +
    "Arrivo: " + form.checkin.value + "\n" +
    "Partenza: " + form.checkout.value + "\n" +
    "Ospiti: " + form.querySelector('input[type=number]').value;

  window.open(
    "https://wa.me/393470445977?text=" + encodeURIComponent(message),
    "_blank"
  );

  return false;
}
