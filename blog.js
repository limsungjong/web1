'use strict';

let Body = {
    // Body라는 변수명을 만들면서 setColor 함수와 setColorBakcground 함수를 각각 생성
    setColor : function (color) {
        // document.querySelector('body').style.color = color; // 'body'의 색의 color을 매개인자로 받은 color의 색상으로 변경
        $('body').css("color", color); // jqurey
    },
    setColorBakcground : function (color) {
        // document.querySelector('body').style.backgroundColor = color; // 'body'의 색의 backgroundColor을 매개인자로 받은 color의 색상으로 변경
        $('body').css("backgroundColor", color); // jqurey
    }
}
let Links = { 
    // Links라는 변수명을 생성 LinksetColor 함수를 생성
    LinksetColor : function (color) {
    var hrefcolor = document.querySelectorAll('.container .left__sidebar li a'); // .container .left__sidebar li에서 a 태그를 hrefcolor 변수 설정
    let i = 0;
        while(i < hrefcolor.length) { // 위에서 만든 hrefcolor의 배열의 길이만큼 반복
            hrefcolor[i].style.color = color; // hrefcolor의 배열을 i 번 돌면서 Linksetcolor의 매개 color의 색으로 변경
            i++; // i의 값 카운트
        }
    }
}
// ModeChange 함수 생성
function ModeChange (self){ 
        var target = document.querySelector('body'); // target 변수를 'body' 태그 선택을 등록
        if(self.value === 'Night') { // 위에서 받은 매개변수 self에 있는 value 값이 === Night면 실행
            Body.setColor ('#f5f5f5');
            Body.setColorBakcground('#1b1b1b');
            Links.LinksetColor ('#f5f5f5');
            self.value = 'Day'; // 매개변수 self의 value 값을 Day로 변경
        } else {
            Body.setColor('#1b1b1b');
            Body.setColorBakcground ('#f5f5f5');
            Links.LinksetColor('#1b1b1b');
            self.value = 'Night'; // 매개변수 self의 value 값을 Night로 변경
        }
    }

// source code : https://showyourself.tistory.com/3
// Searching 변수에 Search.prototype으로 만들고
const Searching = Search.prototype;

// 각각 keyword에는 input태그의 text를 받기 위해 name인 search를 불러와서 할당
// engine에는 select에서 각각 google 와 naver 선택을 받아와서 할당
// button은 검색 버튼이 눌렸을 때도 반응하기 위해 만듬
// form에는 Searcg 폼 태그 자체를 할당
// 각각 this를 통해 함수가 만들어진 곳의 객체를 가리킴
function Search() {
    this.keyword = document.querySelector('input[name = "search"]');
    this.engine = document.querySelector('.SelectSearch');
    this.button = document.querySelector('.SearchBotton');
    this.form = document.querySelector('.Search');
// Engine 함수 실행
    this.Engeine();
}
// Searching에서 Engeine 함수를 선언
Search.prototype.Engeine = function() {
    this.form.addEventListener ('submit', e => {
// Search 함수의 form과 addEventListener함수를 이용하여 form태그의 제출 이벤트 추가
        e.preventDefault();

        let engine = this.engine.value;
        let keyword = this.keyword.value;

        if(engine === 'google') {
            location.href = 'http://www.google.co.kr/search?q=' + keyword;
        } else if (engine === 'naver') {
            location.href = 'https://search.naver.com/search.naver?query=' + keyword;
        }
    });
}
new Search();

var audio = document.getElementById("myaudio");
  audio.volume = 0.1;