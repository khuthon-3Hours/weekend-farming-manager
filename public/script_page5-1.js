document.addEventListener('DOMContentLoaded', () => {
    const guide = document.getElementById('seedGuide');
  
    const title = document.createElement('h2');
    title.innerText = "\n🌱 파종 이전 꿀팁";
    guide.appendChild(title);
  
    const contentBox = document.createElement('div');
    contentBox.style.backgroundColor = "#ffffff";
    contentBox.style.borderRadius = "12px";
    contentBox.style.boxShadow = "0 4px 10px rgba(0, 0, 0, 0.05)";
    contentBox.style.padding = "1rem";
    contentBox.style.marginTop = "1rem";
    contentBox.style.fontSize = "0.9rem";
    contentBox.style.fontWeight = "bold";
    contentBox.style.width = "360px";
    contentBox.style.maxWidth = "360px";
    contentBox.style.maxHeight = "150px";
    contentBox.style.margin = "0 auto";
    contentBox.style.overflowY = "auto";
  
    const list = document.createElement('ul');
    list.style.paddingLeft = "1.2rem";
  
    const items = [
      `"곁순은 방울토마토 재배를 마칠 때까지 계속 제거해주어야 합니다. 곁순을 제거하지 않는다면 곁순에서 영양분을 소모하여 전체 형세를 약하게 합니다."`,
      `"만약 실수로 원줄기를 잘랐다면 곁순을 원줄기처럼 키워주면 정상 재배가 가능합니다."`
  
    ];
  
    items.forEach(text => {
      const li = document.createElement('li');
      li.innerHTML = text;
      list.appendChild(li);
    });
  
    contentBox.appendChild(list);
    guide.appendChild(contentBox);
  });