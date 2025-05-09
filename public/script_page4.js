document.addEventListener('DOMContentLoaded', () => {
    const hintPage = document.getElementById('hintPage');
    const Hint = ['support', 'cut', 'water']  
    const hint = 1;
    const youtubeUrl = {
      support:"https://www.youtube.com/watch?v=DoTRWplEdxg",    //지지대 설치
      cut: "https://www.youtube.com/watch?v=HIcHx24OSDw",    //곁순 제거
      water: ""  //물주기
    }
    
  
    function extractYoutubeID(url) {
      const regExp = /(?:youtube\.com\/.*v=|youtu\.be\/)([^&\n?#]+)/;
      const match = url.match(regExp);
      return match ? match[1] : null;
    }
  
    const videoId = extractYoutubeID(youtubeUrl[Hint[hint]]);
  
    if (videoId) {
      const videoFrame = document.createElement('iframe');
      videoFrame.width = "100%";
      videoFrame.height = "220"; 
      videoFrame.style.marginTop = "50px";
      videoFrame.style.marginBottom = "10px";
      videoFrame.style.borderRadius = "12px";
      videoFrame.style.boxShadow = "0 2px 8px rgba(0, 0, 0, 0.1)";

      videoFrame.src = `https://www.youtube.com/embed/${videoId}`;
      videoFrame.frameBorder = "0";
      videoFrame.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture";
      videoFrame.allowFullscreen = true;
  
      hintPage.appendChild(videoFrame);
    } else {
      const errorMsg = document.createElement('p');
      errorMsg.innerText = "유효하지 않은 YouTube 링크입니다.";
      hintPage.appendChild(errorMsg);
    }
  
    const commentText = {
      support:`
      방울 토마토 지주대 설치 영상입니다.

       -일자 말뚝모양으로 설치하는 것 보다 ㅅ자 형태가 되게 설치하는 것이 더 좋습니다.

       -길이는 환경에 따라 다르지만, 180cm정도가 가장 적합합니다.

       -방울 토마토 지주대를 설치할 때, 방울 토마토 줄기가 지주대를 타고 올라가게 하기 위해서 줄기를 지주대에 묶어줘야 합니다.
    `,
      cut: `
      방울 토마토 곁순 제거 영상입니다.

       -곁순은 방울토마토 재배를 마칠 때까지 계속 제거해주어야 합니다. 곁순을 제거하지 않는다면 곁순에서 영양분을 소모하여 전체 형세를 약하게 합니다.

       -주로 방울 토마토 줄기 사이 사이에 곁순이 자랍니다.

       -만약 실수로 원줄기를 잘라도 곁순을 원줄기처럼 키워주면 정상 재배가 가능합니다.
      `,
      water: `
      방울 토마토 물 주기 영상입니다.

      -
      `

    }
  
    const commentBox = document.createElement('div');
    commentBox.className = "comment-box";
    commentBox.style.marginTop = "1rem";
    commentBox.style.padding = "1rem";
    commentBox.style.borderTop = "1px solid #ccc";
    commentBox.style.fontSize = "0.8rem";
    commentBox.style.fontWeight = "bold"; 
    commentBox.style.backgroundColor = "#ffffff";  // 흰색 배경
    commentBox.style.borderRadius = "12px";        // 둥근 테두리
    commentBox.style.boxShadow = "0 2px 8px rgba(0, 0, 0, 0.05)"; // 부드러운 그림자
    commentBox.style.color = "#333";               // 글자 색상
    commentBox.style.whiteSpace = "pre-line";
    commentBox.style.maxHeight = "200px";
    commentBox.style.overflowY = "auto";

    commentBox.innerText = commentText[Hint[hint]].trim();
    hintPage.appendChild(commentBox);
  });
  