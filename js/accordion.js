
const toggleBtns = document.querySelectorAll(".toggle-button");

for (let toggleBtn of toggleBtns) toggleBtn.parentElement.addEventListener('click', () => {
  console.log("Click");
  toggleBtn.classList.toggle("open");
  toggleBtn.parentElement.parentElement.classList.toggle("open");
})