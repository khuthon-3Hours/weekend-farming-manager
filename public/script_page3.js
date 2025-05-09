const cardsData = [
  { title: "지지대 세우기", img: "images/sample1.png" },
  { title: "잡초뽑기", img: "images/sample2.png" },
  { title: "진드기 처리", img: "images/sample3.png" },
  { title: "물주기", img: "images/sample4.png" }
];

let currentIndex = 0;
let checkedCount = 0;
let checkedStatus = Array(cardsData.length).fill(false); // ✅ renderCards 바깥으로 이동

const deck = document.getElementById("cardDeck");

function renderCards() {
  deck.innerHTML = '';
  const total = cardsData.length;

  for (let offset = 0; offset < total; offset++) {
    const index = (currentIndex + offset) % total;
    const data = cardsData[index];
    const card = document.createElement("div");
    card.className = "card";

    const img = document.createElement("img");
    img.src = data.img;

    const titleWrapper = document.createElement("div");
    titleWrapper.style.display = "flex";
    titleWrapper.style.alignItems = "center";
    titleWrapper.style.justifyContent = "center";
    titleWrapper.style.gap = "10px";

    const title = document.createElement("h3");
    title.innerText = data.title;

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.style.transform = "scale(2)";
    checkbox.style.cursor = "pointer";
    checkbox.checked = checkedStatus[index]; // ✅ 이전 체크 상태 반영

    checkbox.addEventListener("change", (e) => {
      if (e.target.checked) {
        if (!checkedStatus[index]) {
          checkedStatus[index] = true;
          checkedCount++;
          updateProgress();

          // ✅ 시각적으로 체크된 상태를 확인한 후 이동
          setTimeout(() => {
            if (checkedCount < cardsData.length) {
              currentIndex = (currentIndex + 1) % total;
              renderCards();
            }
          }, 400); // 0.4초 지연 후 이동
        }
      } else {
        if (checkedStatus[index]) {
          checkedStatus[index] = false;
          checkedCount--;
          updateProgress();
        }
      }
    });

    titleWrapper.appendChild(title);
    titleWrapper.appendChild(checkbox);

    card.appendChild(img);
    card.appendChild(titleWrapper);

    const rotation = offset * 5;
    const translateX = offset * 30;
    const scale = offset === 0 ? 1 : 1;

    card.style.transform = `translateX(${translateX}px) rotate(${rotation}deg) scale(${scale})`;
    card.style.zIndex = 100 - Math.abs(offset);

    if (offset !== 0) {
      card.addEventListener("click", () => {
        if (checkedCount < cardsData.length) {
          currentIndex = (currentIndex + 1) % total;
          renderCards();
        }
      });
    }

    deck.appendChild(card);
  }

  // 진행도 바 없으면 추가
  let progressBar = document.getElementById("progressBar");
  if (!progressBar) {
    const wrapper = document.createElement("div");
    wrapper.className = "progress-bar-wrapper";
    progressBar = document.createElement("div");
    progressBar.id = "progressBar";
    progressBar.className = "progress-bar";
    wrapper.appendChild(progressBar);
    document.querySelector(".phone-frame").appendChild(wrapper);
  }
  updateProgress();
}

function updateProgress() {
  const progress = document.getElementById("progressBar");
  const percent = (checkedCount / cardsData.length) * 100;
  progress.style.width = `${percent}%`;
}

renderCards();
