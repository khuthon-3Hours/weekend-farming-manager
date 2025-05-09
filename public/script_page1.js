// 그리드 세팅 모드와 일반 모드로 나누기
// 그리드 세팅 모드일 때는 그리드 블록을 클릭하면 감자와 토마토 중 하나를 선택할 수 있습니다.
// 일반 모드일 때는 그리드 블록을 클릭하면 감자나 토마토의 상세페이지로 이동합니다.

let isSettingMode = false;

// 모드 토글 버튼
const modeToggleBtn = document.querySelector('.mode-toggle');
modeToggleBtn.addEventListener('click', () => {
    isSettingMode = !isSettingMode;
    modeToggleBtn.textContent = isSettingMode ? '설정 모드 종료' : '그리드 설정 모드';
    // 시각적 피드백을 위해 바디나 그리드에 클래스 추가
    document.body.classList.toggle('setting-mode', isSettingMode);
    const gridSetting = document.querySelector('.grid-setting');
    gridSetting.style.display = isSettingMode ? 'block' : 'none';
});
// 감자와 토마토 선택 함수: .vege-select-modal을 사용하여 감자와 토마토를 선택할 수 있는 모달을 띄우는 로직을 추가
const vegeSelectModal = document.querySelector('.vege-select-modal');
const vegeSelectButtons = vegeSelectModal.querySelectorAll('button');

// 그리드 아이템 클릭 이벤트
let gridItems = document.querySelectorAll('.grid-item');

// 1) 현재 선택 중인 그리드 아이템을 담을 변수
let currentItem = null;

// 2) 그리드 클릭 시 currentItem 설정하고 모달만 띄우기
gridItems.forEach(item => {
    item.addEventListener('click', () => {
        if (isSettingMode) {
            currentItem = item;
            vegeSelectModal.style.display = 'flex';
        } else {
            alert('상세페이지로 이동합니다.');
        }
    });
});

// 3) 버튼 리스너는 한번만 등록!
vegeSelectButtons.forEach(button => {
    button.addEventListener('click', () => {
        if (!currentItem) return;

        const selected = button.textContent;
        if (selected === '감자') {
            currentItem.style.backgroundColor = 'yellow';
        } else if (selected === '토마토') {
            currentItem.style.backgroundColor = 'red';
        }

        // 설정 종료
        vegeSelectModal.style.display = 'none';
        currentItem = null;
    });
});
// 그리드 행렬 세팅
const rowInput = document.getElementById('row');
const columnInput = document.getElementById('column');
const gridContainer = document.querySelector('.grid');
const updateGrid = () => {
    const rows = parseInt(rowInput.value);
    const columns = parseInt(columnInput.value);
    gridContainer.style.gridTemplateColumns = `repeat(${columns}, 1fr)`;
    gridContainer.style.gridAutoRows = `${Math.floor(300 / rows)}px`;
    // 그리드 아이템 수에 맞게 추가
    const totalItems = rows * columns;
    while (gridContainer.children.length < totalItems) {
        const newItem = document.createElement('div');
        newItem.classList.add('grid-item');
        gridContainer.appendChild(newItem);
    }
    while (gridContainer.children.length > totalItems) {
        gridContainer.removeChild(gridContainer.lastChild);
    }
    // 그리드 아이템 클릭 이벤트 재설정
    gridItems = document.querySelectorAll('.grid-item');
    gridItems.forEach(item => {
        item.addEventListener('click', () => {
            if (isSettingMode) {
                currentItem = item;
                vegeSelectModal.style.display = 'flex';
            } else {
                alert('상세페이지로 이동합니다.');
            }
        });
    });
};
rowInput.addEventListener('input', updateGrid);
columnInput.addEventListener('input', updateGrid);
