function loadPage(page) {
    const main = document.getElementById("main-content");
    fetch(page)
        .then(res => res.text())
        .then(html => {
            main.innerHTML = html;

            // JS를 따로 불러오는 방식 (page에 따라 분기)
            if (page === "page1.html") {
                loadScript("js/page1.js");
            } else if (page === "page2.html") {
                loadScript("js/page2.js");
            } else if (page === "page3.html") {
                loadScript("js/page3.js");
            } else if (page === "page4.html") {
                loadScript("js/page4.js");
            }
        });
}

function loadScript(url) {
    const script = document.createElement("script");
    script.src = url;
    script.defer = true;
    document.body.appendChild(script);
}