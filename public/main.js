// main.js
const app = document.getElementById('app');

// 초기 로드
loadPage('page1.html', false);

// 뒤로/앞으로 버튼 처리
window.addEventListener('popstate', e => {
  const url = e.state?.url || 'page1.html';
  loadPage(url, false);
});

/**
 * 페이지 로드 함수
 * @param {string} pageUrl - ex) 'page1.html'
 * @param {boolean} addHistory - 히스토리 스택에 추가 여부
 */
function loadPage(pageUrl, addHistory = true) {
  // 1) 페이드 아웃
  app.classList.add('fade-out');
  
  setTimeout(() => {
    // 2) AJAX로 HTML 조각 가져오기
    fetch(pageUrl)
      .then(r => r.text())
      .then(html => {
        // 3) 기존 동적 리소스 제거
        document.querySelectorAll('link[data-dynamic]').forEach(n => n.remove());
        document.querySelectorAll('script[data-dynamic]').forEach(n => n.remove());
        
        // 4) 대응하는 CSS/JS 파일명 계산
        //    page1.html → 1
        const match = pageUrl.match(/page(\d+)\.html/);
        const idx   = match ? match[1] : null;
        if (idx) {
          // 4a) CSS 로드
          const css = document.createElement('link');
          css.rel = 'stylesheet';
          css.href = `style_page${idx}.css`;
          css.setAttribute('data-dynamic','');
          document.head.appendChild(css);
        }

        // 5) 앱 컨테이너에 HTML 주입
        app.innerHTML = html;

        // 6) 대응하는 JS 로드
        if (idx) {
          const js = document.createElement('script');
          js.src = `script_page${idx}.js`;
          js.defer = true;
          js.setAttribute('data-dynamic','');
          document.body.appendChild(js);
        }

        // 7) 페이드 인
        app.classList.remove('fade-out');
        app.classList.add('fade-in');
        setTimeout(() => app.classList.remove('fade-in'), 400);

        // 8) 히스토리 관리
        if (addHistory) history.pushState({ url: pageUrl }, '', pageUrl);
      });
  }, 400); // CSS transition-duration과 일치시킬 것
}
