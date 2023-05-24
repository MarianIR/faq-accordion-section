const question = document.querySelectorAll(".question");
const arrow = document.querySelectorAll(".arrow");
const answer = document.querySelectorAll(".answer");

let activeIndex = null;

question.forEach((title, index) => {
  title.addEventListener("click", () => {
    if (activeIndex !== null && activeIndex !== index) {
      arrow[activeIndex].classList.remove("active");
      answer[activeIndex].classList.remove("show");
    }

    arrow[index].classList.toggle("active");
    answer[index].classList.toggle("show");

    activeIndex = activeIndex === index ? null : index;
  });
});
