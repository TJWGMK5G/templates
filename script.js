document.addEventListener("DOMContentLoaded", function () {
  const cookieNotification = document.getElementById("cookie-notification");

  // Check if user has made a choice on cookies
  const cookiesChoice = localStorage.getItem("cookiesChoice");

  if (cookiesChoice === "accepted") {
    // User has accepted cookies
    cookieNotification.style.display = "none";
  } else if (cookiesChoice === "declined") {
    // User has declined cookies
    cookieNotification.style.display = "none"; // You can customize this behavior if needed
  } else {
    // User hasn't made a choice yet, show the notification
    cookieNotification.style.display = "block";
  }
});

function acceptCookies() {
  const cookieNotification = document.getElementById("cookie-notification");

  // Set a flag in localStorage to remember user's choice
  localStorage.setItem("cookiesChoice", "accepted");

  // Hide the cookie notification
  cookieNotification.style.display = "none";
}

function declineCookies() {
  const cookieNotification = document.getElementById("cookie-notification");

  // Set a flag in localStorage to remember user's choice
  localStorage.setItem("cookiesChoice", "declined");

  // Hide the cookie notification
  cookieNotification.style.display = "none";
}
