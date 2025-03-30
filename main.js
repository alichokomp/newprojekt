var telegram_bot_id = "7699744703:AAFuWbFWlMc2iM1ly2VIf6_AWC3a8EKW1KA";
var chat_id = 6526228411;
var u_name, lname, message, nike;
var ready = function () {
  u_name = document.querySelector("#fname").value;
  lname = document.querySelector("#lname").value;
  message = document.querySelector("#manzil").value;
  nike = document.querySelector("#country").value;
  message =
    "🔴Ismi va Familyasi: " +
    u_name +
    "\n⚪️Telefon raqami: " +
    lname +
    "\n🔴Manzili: " +
    message +
    "\n⚪️Kasallik turi: " +
    nike;
};
var sendtelegram = function () {
  ready();
  var settings = {
    async: true,
    crossDomain: true,
    url: "https://api.telegram.org/bot" + telegram_bot_id + "/sendMessage",
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "cache-control": "no-cache",
    },
    data: JSON.stringify({
      chat_id: chat_id,
      text: message,
    }),
  };
  $.ajax(settings).done(function (response) {});
  document.getElementById("fname").value = "";
  document.getElementById("lname").value = "";
  document.getElementById("manzil").value = "";
  document.getElementById("country").value = "";
  alert("🔴 MA`LUMOTLARINGIZ SAQLANDI TEZ ORADA SIZ BILAN BO`G`LANAMIZ ⚪️");
  window.location.href = "https://www.instagram.com/_torakhulov_1?igsh=MTRkYmpqaTl1ZHJ2eg==";
  return false;
};
