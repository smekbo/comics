let prev = document.getElementById("comic-nav_prev");
let prevUrl = (prev === null) ? null : prev.getAttribute('href');
let next = document.getElementById("comic-nav_next");
let nextUrl = (next === null) ? null : next.getAttribute('href');

document.addEventListener('keydown', (e) => {
  // if (!e.repeat)
  //   console.log(`Key "${e.key}" pressed  [event: keydown]`);
  // else
  //   console.log(`Key "${e.key}" repeating  [event: keydown]`);
  
  if (e.key === "ArrowRight" && nextUrl)
  {
    window.location.replace(location.origin + nextUrl)
  }
  if (e.key === "ArrowLeft" && prevUrl)
  {
    window.location.replace(location.origin + prevUrl)
  }
});