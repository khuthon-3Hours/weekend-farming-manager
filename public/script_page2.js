const cropImage = document.getElementById("cropImage");
const progressBar = document.getElementById("progressBar");
const dateSlider = document.getElementById("dateSlider");
const diligenceSlider = document.getElementById("diligenceSlider");

function updateImage(progress, diligence) {
    let stage = 'seed';
    if (progress > 75) stage = 'red';
    else if (progress > 25) stage = 'green';
    else if (progress > 10) stage = 'sprout';

    const condition = diligence < 50 ? '_bad' : '';
    cropImage.src = `images/${stage}${condition}.png`;
}

function updateProgress() {
    const value = parseInt(dateSlider.value);
    const diligence = parseInt(diligenceSlider.value);
    progressBar.style.width = `${value}%`;
    updateImage(value, diligence);
}

function hint(stage) {
    alert(`${stage} 힌트 페이지로 이동합니다.`);
    // window.location.href = `/hint/${stage}`;
}
let tipTimeout = null;

async function fetchTip() {
    const progress = parseInt(document.getElementById("dateSlider").value);

    const tips = {
        seed: [
            "방울 토마토는 일반 토마토보다 병충해에 강한 편입니다!",
            "방울 토마토는 일반 토마토에 비해 생육 속도가 빠릅니다!",
        ],
        transplant: [
            "정식은 모를 밭에 옮겨 심는 것을 말하며, 이후 수확 때까지 옮기지 않습니다.",
        ],
        harvest: [
            "곁순은 꽃대 아래에서 강하게 자랍니다. 아깝더라도 모두 제거해주세요.",
            "곁순을 그대로 두면 전체 형세가 약해집니다. 개화 시점에 맞춰 제거해주세요.",
        ],
    };

    let tipList = [];

    if (progress <= 10) {
        tipList = tips.seed;
    } else if (progress <= 25) {
        tipList = tips.transplant;
    } else {
        tipList = tips.harvest;
    }

    const randomTip = tipList[Math.floor(Math.random() * tipList.length)];
    document.getElementById("tipContent").innerText = randomTip;
}

document.getElementById("dateSlider").addEventListener("input", () => {
    updateProgress();

    if (tipTimeout) clearTimeout(tipTimeout);

    tipTimeout = setTimeout(() => {
        fetchTip();
    }, 1000); // 1초 후 tip 갱신
});


// 초기화
fetchTip();
updateProgress();
dateSlider.addEventListener("input", updateProgress);
diligenceSlider.addEventListener("input", updateProgress);