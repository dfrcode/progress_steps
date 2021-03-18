import "../css/style.scss";

const progress = document.getElementById("progress"),
  prev = document.getElementById("prev"),
  next = document.getElementById("next"),
  circles = document.querySelectorAll(".container_progress_circle");

let currentActive = 1;

next.addEventListener("click", () => {
  currentActive++;
  if (currentActive > circles.length - 1) {
    currentActive = circles.length;
    next.disabled = true;
  }
  prev.disabled = false;
  addActiveClass()
});

prev.addEventListener("click", () => {
  currentActive--;
  if (currentActive < 2) {
    currentActive = 1;
    prev.disabled = true;
  }
  next.disabled = false;
  addActiveClass()
});

function addActiveClass() {
    circles.forEach((circle, idx) => {
        if (idx < currentActive) {
            circle.classList.add('active')
        } else {
            circle.classList.remove('active')
        }
    })
    const actives = document.querySelectorAll('.active')
    progress.style.width = `${(actives.length - 1) / (circles.length - 1) * 100}%`
    console.log(progress.style.width)
} 
