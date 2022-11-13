function service() {
    let signIn = "${signIn}";
    if (signIn == "") {
        alert("서비스 페이지는 로그인 후 사용하실 수 있습니다.");
        location.href = "/Zoo/login/login.html";
    } else {
        location.href = ".html"
    }
}

const drawStar = (target) => {
    document.querySelector(`.star span`).style.width = `${target.value * 10}%`;
}