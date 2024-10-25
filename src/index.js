document.getElementById("button").addEventListener("click", () => {
  const notReadNotification = document.querySelectorAll(".not-read");
  for (let i = 0; i < notReadNotification.length; i++) {
    const element = notReadNotification[i];
    element.classList.remove("not-read");
  }
});
