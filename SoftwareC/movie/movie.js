function service() {
    let signIn = "${signIn}";
    if (signIn == "") {
        alert("서비스 페이지는 로그인 후 사용하실 수 있습니다.");
        location.href = "/Zoo/login/login.html";
    } else {
        
    }
}

/*const drawStar = (target) => {
    //document.querySelector(`.star span`).style.width = `${target.value * 10}%`;
    //document.querySelector(`.star span`).style.width = result;
    document.querySelector(`.star span`).style.width = `80%`;
    console.log(target.value);
}

const coloring = () => {

}*/

let star_cnt;

window.onload = function loadStar() {
    let star = document.querySelectorAll('input');
    let c_value = document.querySelector('#current_value');
    let current_value = 0;

    c_value.textContent =  current_value + ' out of 5'
    
    for (let i = 0; i < star.length; i++) {
	    star[i].addEventListener('click', function() {
		    current_value = this.value;

            c_value.textContent = current_value / 2 + " out of 5";
    	});

        if(star[i].getAttribute('value') == 3) {
            star[i].setAttribute('checked', true);
            c_value.textContent = 3/2 + ' out of 5';
        }
    }

    let button_check = false;

    const myButton = document.querySelector('.fa-folder-closed');
    myButton.addEventListener('click', () => {
        if(button_check == false) {
            button_check = true;
            myButton.classList.replace('fa-folder-closed', 'fa-check');
        } else {
            button_check = false;
            myButton.classList.replace('fa-check', 'fa-folder-closed');
        }
    });

    let button_check_w = false;

    const myButton_w = document.querySelector('.fa-laptop');
    myButton_w.addEventListener('click', () => {
        if(button_check_w == false) {
            button_check_w = true;
            myButton_w.classList.replace('fa-laptop', 'fa-check');
        } else {
            button_check_w = false;
            myButton_w.classList.replace('fa-check', 'fa-laptop');
        }
    });
}

function clickStar(target){
    let star = target.value;

    star_cnt = star;
}




