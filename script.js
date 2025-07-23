// top 버튼 기능
const topBtn = document.getElementById("topBtn");

window.onscroll = function () {
  if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
    topBtn.style.display = "block";
  } else {
    topBtn.style.display = "none";
  }
};

topBtn.addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});

let currentSlide = 0;
const slides = document.querySelectorAll(".slide");
const dots = document.querySelectorAll(".dot");

function showSlide(index) {
  const totalSlides = slides.length;
  if (index < 0) {
    currentSlide = totalSlides - 1;
  } else if (index >= totalSlides) {
    currentSlide = 0;
  } else {
    currentSlide = index;
  }

  const slideWidth = slides[0].clientWidth;
  document.querySelector(".slides").style.transform = `translateX(-${slideWidth * currentSlide}px)`;

  // 점 상태 업데이트
  dots.forEach(dot => dot.classList.remove("active"));
  dots[currentSlide].classList.add("active");
}

function nextSlide() {
  showSlide(currentSlide + 1);
}

function prevSlide() {
  showSlide(currentSlide - 1);
}

function goToSlide(index) {
  showSlide(index);
}

// 자동 슬라이드 (선택 사항)
setInterval(() => {
  nextSlide();
}, 5000);

// 시작 시 초기화
showSlide(0);
