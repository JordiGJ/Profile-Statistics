// get elements
const sections = document.querySelectorAll("section");
const nums = [15, 260, 27];

// set speeds
sections.forEach((section, index) => {
  const p = section.querySelector("p");
  const target = nums[index];
  p.textContent = 0;
  let speed = 0;
  if (index === 0) {
    speed = 61;
  } else if (index === 2) {
    speed = 42;
  } else {
    speed = 1;
  }

  function test() {
    let counter = 0;

    let inter = setInterval(() => {
      counter++;
      p.textContent = counter;
      if (counter === target) {
        clearInterval(inter);
      }
    }, speed);
  }
  test();
});
