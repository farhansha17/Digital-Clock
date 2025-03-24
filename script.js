const clock = document.getElementById("clock");
const toggleBtn = document.getElementById("toggle-theme");

function updateTime() {
  const now = new Date();
  const hrs = String(now.getHours()).padStart(2, "0");
  const mins = String(now.getMinutes()).padStart(2, "0");
  const secs = String(now.getSeconds()).padStart(2, "0");
  clock.textContent = `${hrs}:${mins}:${secs}`;
}

setInterval(updateTime, 1000);
updateTime(); // Initial call

toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  if (document.body.classList.contains("dark-mode")) {
    toggleBtn.textContent = "☀️ Light Mode";
  } else {
    toggleBtn.textContent = "🌙 Dark Mode";
  }
});
