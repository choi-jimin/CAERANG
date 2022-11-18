/** 일별 박스오피스 호출 API fetch 함수*/
function callFetchMovie() {
    fetch("api/search/dailyBoxOffice")
        .then(response => response.json())
        .then(function (json) {
            for (let i = 0; i < json.length; i++) {
                let movieJson = json[i].movies;
                console.log(movieJson);

                let plusSection = document.getElementById('section_main_div');

                let new_divTag = document.createElement('div');
                new_divTag.setAttribute('class', 'new_divTag');

                let new_aTag = document.createElement('a');
                new_aTag.setAttribute('class', 'new_aTag');
                new_aTag.setAttribute('href', `/movie/${movieJson.movieCd}`);

                let new_pTag_movieRank = document.createElement('p');
                let new_pTag_movieImg = document.createElement('img');
                let new_pTag_movieNm = document.createElement('p');
                let new_movieNation_movieOpen = document.createElement('div');
                let new_pTag_movieOpenDt = document.createElement('span');
                let new_pTag_movieNation = document.createElement('span');

                new_pTag_movieRank.setAttribute('class', 'movie_rank');
                new_pTag_movieNm.setAttribute('class', 'movie_title');
                new_pTag_movieImg.setAttribute('class', 'movie_img');
                new_pTag_movieImg.setAttribute('type', 'image');
                new_pTag_movieImg.setAttribute('src', `${movieJson.poster}`);
                new_movieNation_movieOpen.setAttribute('class', 'movieNation_movieOpen');

                new_pTag_movieRank.append(`${cnt}`);
                new_pTag_movieNm.append(`${movieJson.movieNm}`);
                new_pTag_movieOpenDt.append(`${movieJson.openDt.substr(0, 4)}, `);
                new_pTag_movieNation.append(`${movieJson.nationAlt}`);
                new_movieNation_movieOpen.append(new_pTag_movieOpenDt);
                new_movieNation_movieOpen.append(new_pTag_movieNation);

                new_divTag.append(new_pTag_movieRank);
                new_divTag.append(new_pTag_movieImg);
                new_divTag.append(new_pTag_movieNm);
                new_divTag.append(new_movieNation_movieOpen);
                new_aTag.append(new_divTag);

                plusSection.appendChild(new_aTag);

                console.log(movieJson.movieCd);
            } // for end

        }); // second then func end
} // func end