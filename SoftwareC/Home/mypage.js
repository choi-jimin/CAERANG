function callFetchMypageSecond() {
    fetch('/api/get/wanting')
        .then(response => response.json())
        .then(function (json) {
            console.log(json);
            for (let i = 0; i < json.length; i++) {
                let myWant = json[i].movie;

                let myWantMovieNm = myWant.movieNm;
                let myWantNationAlt = myWant.nationAlt;
                let myWantOpenDt = myWant.openDt;
                let myWantImg = myWant.poster;

                let user_want = document.getElementById('mypage_want');
                let new_divTag = document.createElement('div');

                let new_aTag = document.createElement('a');
                new_aTag.setAttribute('id', 'new_aTag');

                let new_pTag_wImg = document.createElement('img');
                let new_pTag_wMovieNm = document.createElement('p');
                let new_pTag_wNationAlt = document.createElement('p');
                let new_pTag_wOpenDt = document.createElement('p');

                new_pTag_wImg.setAttribute('type', 'image');
                new_pTag_wImg.setAttribute('src', `${myWantImg}`);
                new_pTag_wMovieNm.setAttribute('id', 'wmovie_title');
                new_pTag_wNationAlt.setAttribute('id', 'wnation');
                new_pTag_wOpenDt.setAttribute('id', 'wopen_dt');

                new_pTag_wMovieNm.append(`${myWantMovieNm}`);
                new_pTag_wNationAlt.append(`${myWantNationAlt}`);
                new_pTag_wOpenDt.append(`${myWantOpenDt.substr(0, 4)}`);

                new_divTag.append(new_pTag_wImg);
                new_divTag.append(new_pTag_wMovieNm);
                new_divTag.append(new_pTag_wNationAlt);
                new_divTag.append(new_pTag_wOpenDt);
                new_aTag.append(new_divTag);

                user_want.appendChild(new_aTag);
            }
        })
        .catch((err) => {
            console.log(err);
        })
}

function callFetchMypageThird() {
    fetch('/api/get/watching')
        .then(response => response.json())
        .then(function (json) {
            console.log(json);
            for (let i = 0; i < json.length; i++) {
                let myWatch = json[i].movie;

                let myWatchMovieNm = myWatch.movieNm;
                let myWatchNationAlt = myWatch.nationAlt;
                let myWatchOpenDt = myWatch.openDt;
                let myWatchImg = myWatch.poster;

                let user_watching = document.getElementById('mypage_watching');
                let new_divTag = document.createElement('div');

                let new_aTag = document.createElement('a');
                new_aTag.setAttribute('id', 'new_aTag');

                let new_pTag_ingImg = document.createElement('img');
                let new_pTag_ingMovieNm = document.createElement('p');
                let new_pTag_ingNationAlt = document.createElement('p');
                let new_pTag_ingOpenDt = document.createElement('p');

                new_pTag_ingImg.setAttribute('type', 'image');
                new_pTag_ingImg.setAttribute('src', `${myWatchImg}`);
                new_pTag_ingMovieNm.setAttribute('id', 'ingmovie_title');
                new_pTag_ingNationAlt.setAttribute('id', 'ingnation');
                new_pTag_ingOpenDt.setAttribute('id', 'ingopen_dt');

                new_pTag_ingMovieNm.append(`${myWatchMovieNm}`);
                new_pTag_ingNationAlt.append(`${myWatchNationAlt}`);
                new_pTag_ingOpenDt.append(`${myWatchOpenDt}`);

                new_divTag.append(new_pTag_ingImg);
                new_divTag.append(new_pTag_ingMovieNm);
                new_divTag.append(new_pTag_ingNationAlt);
                new_divTag.append(new_pTag_ingOpenDt);
                new_aTag.append(new_divTag);

                user_watching.appendChild(new_aTag);
            }
        })
        .catch((err) => {
            console.log(err);
        })
}