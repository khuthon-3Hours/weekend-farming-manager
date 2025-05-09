document.addEventListener('DOMContentLoaded', () => {
  const guide = document.getElementById('seedGuide');

  const title = document.createElement('h2');
  title.innerText = "\n🌱 파종 이전 필수 진행 사항";
  guide.appendChild(title);

  const contentBox = document.createElement('div');
  contentBox.style.backgroundColor = "#ffffff";
  contentBox.style.borderRadius = "12px";
  contentBox.style.boxShadow = "0 4px 10px rgba(0, 0, 0, 0.05)";
  contentBox.style.padding = "1rem";
  contentBox.style.marginTop = "1rem";
  contentBox.style.fontSize = "0.9rem";
  contentBox.style.fontWeight = "bold";
  contentBox.style.width = "85%";
  contentBox.style.maxWidth = "300px";
  contentBox.style.maxHeight = "100px";
  contentBox.style.margin = "0 auto";

  const list = document.createElement('ul');
  list.style.paddingLeft = "1.2rem";

  const items = [
    `"<a href='page4.html?hint=1'>곁순 제거하기</a>"`,
    `"<a href='page4.html?hint=2'>물 주기</a>"`

  ];

  items.forEach(text => {
    const li = document.createElement('li');
    li.innerHTML = text;
    list.appendChild(li);
  });

  contentBox.appendChild(list);
  guide.appendChild(contentBox);
});