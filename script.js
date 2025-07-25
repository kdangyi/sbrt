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

if (slides.length > 0) {
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

    dots.forEach(dot => dot.classList.remove("active"));
    if (dots[currentSlide]) {
      dots[currentSlide].classList.add("active");
    }
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

  // 자동 슬라이드
  setInterval(() => {
    nextSlide();
  }, 5000);

  // 슬라이드 초기화
  showSlide(0);
}

const gallery = document.getElementById('gallery');

const imageList = [
  "감자탕.jpg",
  "교자.jpg",
  "김말이.jpg",
  "김치볶음밥.jpg",
  "김치찌개.jpg",
  "떡볶이.jpg",
  "배경화면.jpg",
  "부대찌개.jpg",
  "불고기덮밥.jpg",
  "비빔밥.jpg",
  "순두부.jpg",
  "스시5pcs.jpg",
  "스시콤보 (2).jpg",
  "스시콤보.jpg",
  "아이스커피.png",
  "양념치킨.jpg",
  "오징어링.jpg",
  "잡채.jpg",
  "제육덮밥.jpg",
  "해물파전.jpg"
];

imageList.forEach(fileName => {
  const img = document.createElement('img');
  img.src = `images/${fileName}`;

  // alt 텍스트: 확장자 제거 후 _, -, ( ) 등을 공백으로 변경
  img.alt = fileName
    .replace(/\.[^/.]+$/, '')          // 확장자 제거
    .replace(/[_\-]/g, ' ')            // _ 또는 - → 공백
    .replace(/\s+/g, ' ')              // 여러 공백 → 하나로
    .trim();                           // 앞뒤 공백 제거

  // 이미지 로딩 실패 시 대체 이미지로 교체
  img.onerror = function () {
    this.src = 'images/default.jpg';  // 대체 이미지 경로 (직접 준비 필요)
    this.alt = '이미지를 불러올 수 없습니다';
  };

  gallery.appendChild(img);
});
